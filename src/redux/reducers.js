import axios from "axios"
import { createSlice } from '@reduxjs/toolkit'

let ID = 0

const customers = () => {
    if (localStorage.getItem('customers')) {
        const customers_data = JSON.parse(localStorage.getItem('customers'))
        ID = customers_data.length + 1
        return customers_data
    }
    else {
        axios.get('https://reqres.in/api/users?page=1').then(res => {
            localStorage.setItem('customers', JSON.stringify(res.data.data))
            ID = res.data.data.length + 1
            return res.data.data
        }).catch(err => {
            console.log(err)
        })
    }
}

const initialCustomers = customers()

const initialState = {
    customers: initialCustomers,
}

export const customerSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {
        addCustomer: (state, action) => {
            const new_customer = { ...action.payload, id: ID++ }
            localStorage.setItem('customers', JSON.stringify([...state.customers, new_customer]))
            state.customers.push(new_customer)
        },
        removeCustomer: (state, action) => {
            const updated_customers = state.customers.filter(customer => customer.id !== action.payload)
            localStorage.setItem('customers', JSON.stringify(updated_customers))
            state.customers = updated_customers
        },
        editCustomer: (state, action) => {
            const updated_customers = state.customers.map(customer => {
                if (customer.id === action.payload.id) {
                    return action.payload
                }
                return customer
            })
            localStorage.setItem('customers', JSON.stringify(updated_customers))
            state.customers = updated_customers
        },
        sortedCustomers: (state, action) => {
            state.customers = action.payload
        }
    }
})

export const {
    addCustomer,
    removeCustomer,
    editCustomer,
    sortedCustomers,
} = customerSlice.actions
export default customerSlice.reducer
