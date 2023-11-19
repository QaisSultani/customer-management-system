import { useState } from "react";

import dummyProfile from '../../images/dummy-profile.png'

import EditCustomer from "../EditCustomer";
import DeleteCustomer from "../DeleteCustomer";

const CustomerDetails = ({ customer }) => {
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false)

    const { id, avatar, first_name, last_name, email } = customer

    return (
        <div className='grid grid-cols-6 sm:grid-cols-12 sm:items-center p-1 mb:max-sm:py-5 mb:max-sm:space-y-5 m-5 mb:m-10 mbx:m-14 sm:m-5 xl:mx-20 bg-white rounded-xl shadow-lg'>
            
            <div className="col-span-1 sm:hidden"></div>
            <div className='col-span-4 sm:col-span-1 aspect-square flex justify-center'>
                <img src={avatar || dummyProfile} alt='avatar' className='rounded-md md:max-mbx:m-2 aspect-square object-cover' />
            </div>
            <div className="col-span-1 sm:hidden"></div>

            
            <div className='col-span-1 mbx:col-span-2 text-center mx-1'>
                <p className="text-xs mb:text-sm mbx:text-base">{String(id).padStart(3, '0')}</p>
            </div>
            <div className='col-span-2 xl:col-span-3 text-theme-color-light underline truncate mx-1'>
                <p className="text-xs mb:text-sm mbx:text-base"><span>{first_name} {last_name}</span></p>
            </div>
            <div className='col-span-3 mbx:col-span-2 sm:col-span-3 xl:col-span-4 truncate mx-1'>
                <p className="text-xs mb:text-sm mbx:text-base">{email}</p>
            </div>


            <div className="col-span-1 sm:hidden"></div>
            <div className='col-span-2 xl:col-span-1 flex justify-center items-center m-2'>
                <button
                    onClick={() => setShowEditModal(true)}
                    className='bg-theme-edit-bg/40 text-theme-edit-text rounded-md w-20 mb:w-24 mb:py-1'
                >
                    Edit
                </button>
                <EditCustomer
                    showEditModal={showEditModal}
                    setShowEditModal={setShowEditModal}
                    customer={customer}
                />
            </div>
            <div className='col-span-2 xl:col-span-1 flex justify-center items-center m-2'>
                <button
                    onClick={() => setShowDeleteModal(true)}
                    className='bg-theme-delete-bg/40 text-theme-delete-text rounded-md w-20 mb:w-24 mb:py-1'
                >
                    Delete
                </button>
                <DeleteCustomer
                    customerID={id}
                    showDeleteModal={showDeleteModal}
                    setShowDeleteModal={setShowDeleteModal}
                />
            </div>
            <div className="col-span-1 sm:hidden"></div>
            
        </div>
    )
}

export default CustomerDetails