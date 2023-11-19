import { useDispatch } from "react-redux"
import { removeCustomer } from "../../redux/reducers"
import { Modal } from "antd"

import trashIcon from '../../images/trash-bin.png'

const DeleteCustomer = ({ customerID, showDeleteModal, setShowDeleteModal }) => {
    const dispatch = useDispatch()
    return (
        <Modal
            title={null}
            centered={true}
            width={400}
            open={showDeleteModal}
            onCancel={() => setShowDeleteModal(false)}
            footer={null}
        >
            <div className="my-10">

                <div className="flex justify-center my-10">
                    <img src={trashIcon} alt='trash Icon' />
                </div>
                <div className="text-center my-10 space-y-5">
                    <h1 className="text-xl font-bold">Are you sure?</h1>
                    <p className="px-5">Do you really want to delete this customer? This process can not be undone.</p>
                </div>

                <div className='flex justify-center gap-10'>
                    <button
                        onClick={() => setShowDeleteModal(false)}
                        className='flex justify-around items-center text-white bg-theme-delete-gray py-2 px-10 rounded-lg uppercase hover:shadow-xl'
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => {
                            dispatch(removeCustomer(customerID))
                            setShowDeleteModal(false)
                        }}
                        className='flex justify-around items-center text-white bg-theme-delete-bg py-2 px-10 rounded-lg uppercase hover:shadow-xl'
                    >
                        Delete
                    </button>
                </div>

            </div>
        </Modal>
    )
}

export default DeleteCustomer