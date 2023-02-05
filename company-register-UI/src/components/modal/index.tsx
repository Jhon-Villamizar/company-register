import { useEffect } from 'react';
import { AdminConsumer } from '../../config/context';
import Forms from '../forms';
import './modal.scss'

const Modal = () => {
  const { modal, updateModal } = AdminConsumer();

  useEffect(() => {
  }, [modal])

  const Title = (): any => {
    switch (modal?.from) {
      case 'inventory':
        if (modal?.item?.id?.length > 0) {
          return <b>Edit Item</b>
        }
        return <b>Add Item</b>
      case 'company':
        if(modal.item?.nit?.length > 0) {
          return <b>Edit Company</b>
        }
        return <b>Add Company</b>
      case 'user':
        return <b>Create User</b>
    }
  }

  return (
    <div className='modal-form d-flex'>
      <div className="card w-50  mx-auto fit-height">
        <div className="card-header">
          <Title />
        </div>
        <div className="card-body">
          <Forms />
        </div>
      </div>
    </div>
  )
}

export default Modal
