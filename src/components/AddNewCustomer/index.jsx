import { useState } from "react"
import { useDispatch } from "react-redux"
import { addCustomer } from "../../redux/reducers"

import { Modal } from "antd"

import newCustomerImage from '../../images/Mask Group 1.png'
import plusIcon from '../../images/Sign In.png'

const AddNewCustomer = ({ showNewCustomerModal, setShowNewCustomerModal }) => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [avatar, setAvatar] = useState('')
    const [fileName, setFileName] = useState('')

    const dispatch = useDispatch()

    const handleAddCustomer = (e) => {
        e.preventDefault()
        const [first_name, last_name] = fullName.split(' ')

        const new_customer = { first_name, last_name, email, avatar }

        dispatch(addCustomer(new_customer))

        setFullName('')
        setEmail('')
        setAvatar('')
        setShowNewCustomerModal(false)
    }

    const handleClose = () => {
        setFullName('')
        setEmail('')
        setAvatar('')
        setFileName('')
        setShowNewCustomerModal(false)
    }

    return (
        <div className='p-5 mb:max-sm:flex mb:max-sm:justify-center sm:py-10 xl:px-20'>
            <button
                onClick={() => setShowNewCustomerModal(true)}
                className='flex justify-center items-center gap-2 text-white bg-gradient-to-r from-theme-gradient-light to-theme-gradient-dark py-2 px-4 rounded-lg hover:shadow-xl'
            >
                <img src={plusIcon} alt='plus icon' className='scale-75' />
                <p className='md:text-lg uppercase'>Add new customer</p>
            </button>
            <Modal
                styles={{ body: { marginInline: -24, marginTop: -20 } }}
                title={null}
                centered={true}
                width={400}
                open={showNewCustomerModal}
                onCancel={() => handleClose()}
                footer={null}
            >
                <div className='w-full rounded-t-md h-[10vh] flex justify-center items-center bg-theme-color text-white relative mb-2'>
                    <img src={newCustomerImage} alt='bg' />
                    <div className='absolute pt-8'>
                        <p className='text-2xl'>Add New Customer</p>
                    </div>
                </div>
                <form
                    onSubmit={(e) => {
                        handleAddCustomer(e)
                    }}
                    className='px-8 pt-14 pb-5 space-y-7'
                >
                    <input
                        type='text'
                        placeholder='Customer Name'
                        value={fullName}
                        required
                        className='w-full outline-none border rounded-md h-[5vh] p-5'
                        onChange={(e) => {
                            setFullName(e.target.value)
                        }}
                    />
                    <input
                        type='email'
                        placeholder='Email'
                        value={email}
                        required
                        className='w-full outline-none border rounded-md h-[5vh] p-5'
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />
                    <div className='pb-2'>
                        <input
                            id='upload'
                            type='file'
                            className='hidden'
                            accept="image/png, image/jpeg, image/jpg"
                            onChange={(e) => {
                                setFileName(e.target.files[0].name)
                                setAvatar(URL.createObjectURL(e.target.files[0]))
                            }}
                        />
                        <label
                            htmlFor='upload'
                        >
                            <span
                                className='text-theme-color-light underline capitalize cursor-pointer'
                            >
                                Upload Photo
                            </span>
                            <span className="block">
                                {fileName}
                            </span>
                        </label>
                    </div>
                    <div className='flex justify-center'>
                        <button
                            className='flex justify-around items-center w-72 text-white py-2 px-4 rounded-lg uppercase text-lg hover:shadow-xl bg-gradient-to-r from-theme-gradient-light to-theme-gradient-dark'
                        >
                            Add Customer
                        </button>
                    </div>
                </form>
            </Modal>
        </div>
    )
}
export default AddNewCustomer
