import { useState } from 'react'
import { useSelector } from 'react-redux'

import logo from '../../images/logo-1.png'
import customerIcone from '../../images/customers icon.png'

import AddNewCustomer from '../AddNewCustomer'
import CustomerDetails from '../CustomerDetails'
import Header from '../Header'

const Customer = () => {
    const [showNewCustomerModal, setShowNewCustomerModal] = useState(false)

    let customers = useSelector(state => state.customers)

    return (
        <div className="sm:flex sm:justify-end">

            <div className="bg-theme-color sm:h-[100vh] sm:w-[20vw] sm:fixed sm:left-0 sm:rounded-r-2xl">
                <div className='flex justify-center p-5'>
                    <img src={logo} alt='logo' className='sm:pt-10' />
                </div>
                <div className='hidden sm:block sm:pt-20'>
                    <div className='flex justify-center px-2 sm:px-3 md:px-4 lg:px-10'>
                        <button className='flex justify-center items-center gap-1 text-white bg-theme-color-dark rounded-lg shadow-2xl hover:shadow-transparent px-4 py-2 w-full'>
                            <img src={customerIcone} alt='customers icon' className='scale-75' />
                            <p className='uppercase hidden md:block'>customers</p>
                        </button>
                    </div>
                </div>
            </div>

            <div className='bg-background-color sm:w-[80vw]'>
                <div className='mb:max-sm:flex mb:max-sm:justify-center p-5 sm:py-10 xl:px-20 bg-white shadow-lg'>
                    <p className='text-xl uppercase font-semibold xl:text-4xl'>customers</p>
                </div>
                <AddNewCustomer
                    showNewCustomerModal={showNewCustomerModal}
                    setShowNewCustomerModal={setShowNewCustomerModal}
                />
                <Header customers={customers} />
                {customers.map((customer) => {
                    return (
                        <CustomerDetails key={customer.id} customer={customer} />
                    )
                })}
            </div>

        </div >
    )
}
export default Customer