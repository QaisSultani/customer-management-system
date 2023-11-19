import { useState } from "react"
import { useDispatch } from "react-redux"
import { editCustomer } from '../../redux/reducers'
import { Modal } from "antd"

import newCustomerImage from '../../images/Mask Group 1.png'


const EditCustomer = ({ customer, showEditModal, setShowEditModal }) => {
    const { first_name, last_name, id } = customer
    const [fullName, setFullName] = useState(`${first_name} ${last_name || ''}`)
    const [email, setEmail] = useState(customer.email)
    const [avatar, setAvatar] = useState(customer.avatar)
    const [fileName, setFileName] = useState('')

    const dispatch = useDispatch()

    const handleEdit = (e) => {
        e.preventDefault()

        const [first_name, last_name] = fullName.split(' ')
        const updated_customer = { first_name, last_name, email, avatar, id }
        dispatch(editCustomer(updated_customer))
        setShowEditModal(false)
    }

    const handleClose = () => {
        setFullName(`${first_name} ${last_name || ''}`)
        setEmail(customer.email)
        setAvatar(customer.avatar)
        setFileName('')
        setShowEditModal(false)
    }

    return (
        <Modal
            styles={{ body: { marginInline: -24, marginTop: -20 } }}
            title={null}
            centered={true}
            width={400}
            open={showEditModal}
            onCancel={() => handleClose()}
            footer={null}
        >

            <div className='w-full rounded-t-md h-[10vh] flex justify-center items-center bg-theme-color text-white relative mb-2'>
                <img src={newCustomerImage} alt='bg' />
                <div className='absolute pt-8'>
                    <p className='text-2xl'>Edit Customer</p>
                </div>
            </div>

            <form
                onSubmit={(e) => handleEdit(e)}
                className='px-8 pt-14 pb-5 space-y-7'
            >

                <input
                    type='text'
                    placeholder='Customer Name'
                    required
                    value={fullName}
                    className='w-full outline-none border rounded-md h-[5vh] p-5'
                    onChange={(e) => setFullName(e.target.value)}
                />
                <input
                    type='email'
                    placeholder='Email'
                    required
                    value={email}
                    className='w-full outline-none border rounded-md h-[5vh] p-5'
                    onChange={(e) => setEmail(e.target.value)}
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
                        className='flex justify-around items-center w-72 text-white bg-gradient-to-r from-theme-gradient-light to-theme-gradient-dark py-2 px-4 rounded-lg uppercase text-lg hover:shadow-xl'
                    >
                        Edit Customer
                    </button>
                </div>

            </form>

        </Modal>
    )
}

export default EditCustomer