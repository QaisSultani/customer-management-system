import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { sortedCustomers } from '../../redux/reducers'

import sortArrowUp from '../../images/Path up.png'
import sortArrowDown from '../../images/Path down.png'


const Header = ({ customers }) => {
    const [idAsc, setIdAsc] = useState(true)
    const [nameAsc, setNameAsc] = useState(false)
    const [emailAsc, setEmailAsc] = useState(false)

    const dispatch = useDispatch()

    const handleIDSort = (id_asc) => {
        const updated_customers = customers.slice().sort((a, b) => {
            return id_asc ? a.id - b.id : b.id - a.id
        })
        dispatch(sortedCustomers(updated_customers))
        setIdAsc(id_asc)
        setNameAsc(false)
        setEmailAsc(false)
    }

    const handleNameSort = (name_asc) => {
        const updated_customers = customers.slice().sort((a, b) => {
            const first = `${a.first_name} ${a.last_name || ''}`
            const second = `${b.first_name} ${b.last_name || ''}`
            return name_asc ? first.localeCompare(second) : second.localeCompare(first)
        })
        dispatch(sortedCustomers(updated_customers))
        setNameAsc(name_asc)
        setIdAsc(false)
        setEmailAsc(false)
    }

    const handleEmailSort = (email_asc) => {
        const updated_customers = customers.slice().sort((a, b) => {
            return email_asc ? a.email.localeCompare(b.email) : b.email.localeCompare(a.email)
        })
        dispatch(sortedCustomers(updated_customers))
        setEmailAsc(email_asc)
        setIdAsc(false)
        setNameAsc(false)
    }

    return (
        <div className='grid grid-cols-6 sm:grid-cols-12 px-5 py-2 m-5 mb:m-10 mbx:m-14 sm:m-5 xl:mx-20 text-theme-color bg-theme-color-light/50 rounded-lg'>

            <div className='hidden sm:block sm:col-span-1'></div>

            <div className='col-span-1 mbx:col-span-2 sm:col-span-2 flex justify-center items-center gap-1'>
                <p className='text-sm mb:text-base lg:hidden'>ID</p>
                <p className='hidden lg:block sm:max-md:text-sm'>Customer ID</p>
                <button
                    onClick={() => handleIDSort(!idAsc)}
                    className='space-y-[1px]'
                >
                    <img src={sortArrowUp} alt='sort arrow' className='scale-75' />
                    <img src={sortArrowDown} alt='sort arrow' className='scale-75' />
                </button>
            </div>

            <div className='col-span-2 sm:col-span-2 xl:col-span-3 flex justify-start items-center gap-1'>
                <p className='text-sm mb:text-base lg:hidden sm:max-md:text-sm'>Name</p>
                <p className='hidden lg:block'>Customer Name</p>
                <button
                    onClick={() => handleNameSort(!nameAsc)}
                    className='space-y-[1px]'
                >
                    <img src={sortArrowUp} alt='sort arrow' className='scale-75' />
                    <img src={sortArrowDown} alt='sort arrow' className='scale-75' />
                </button>
            </div>

            <div className='col-span-3 mbx:col-span-2 sm:col-span-3 flex justify-start items-center gap-1'>
                <p className='text-sm mb:text-base sm:max-md:text-sm'>Email</p>
                <button
                    onClick={() => handleEmailSort(!emailAsc)}
                    className='space-y-[1px]'
                >
                    <img src={sortArrowUp} alt='sort arrow' className='scale-75' />
                    <img src={sortArrowDown} alt='sort arrow' className='scale-75' />
                </button>
            </div>

        </div>
    )
}

export default Header