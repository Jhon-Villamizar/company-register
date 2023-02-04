import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AdminConsumer } from '../../config/context';
import { schema } from '../../schemas/inventory/inventory';
import './modal.scss'

const Modal = () => {
  const { modal, updateModal } = AdminConsumer();

  useEffect(() => {
    console.log(modal);
  }, [modal])
  const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = async ({ nit, name, serial, quantity }: any) => {
		console.log(nit,name, serial, quantity);
    updateModal({active: false, from:'', id: '', itemId: ''})
	};
  return (
    <div className='modal-form d-flex'>
      <div className="card w-50  mx-auto fit-height">
        <div className="card-header">
          Create Item
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue={modal? modal?.id : ''} type="text" className="form-control" id="id" {...register('nit')} hidden/>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" {...register('name')} />
              <p className="text-danger">{errors.name?.message as string}</p>
            </div>
            <div className="mb-3">
              <label htmlFor="serial" className="form-label">Serial</label>
              <input type="text" className="form-control" id="serial" {...register('serial')} />
              <p className="text-danger">{errors.serial?.message as string}</p>
            </div>
            <div className="mb-3">
              <label htmlFor="quantity" className="form-label">Quantity</label>
              <input type="number" className="form-control" id="quantity" {...register('quantity')} />
              <p className="text-danger">{errors.quantity?.message as string}</p>
            </div>
            <button type="submit" className="btn btn-danger " onClick={()=>updateModal({active: false, from:'', id: '', itemId: ''})}>Close</button>
            <button type="submit" className="btn btn-primary float-end">Add</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Modal
