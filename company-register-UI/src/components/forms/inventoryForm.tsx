import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@apollo/client';
import { AdminConsumer } from '../../config/context';
import { schema } from '../../schemas/inventory';
import { CREATE_INVENTORY, UPDATE_INVENTORY } from '../../querys/inventory';
import { useNavigate } from 'react-router-dom';

const InventoryForm = () => {
  const navigate = useNavigate();
  const { modal, updateModal } = AdminConsumer();
  const [createInventory] = useMutation(CREATE_INVENTORY)
  const [updateInventory] = useMutation(UPDATE_INVENTORY)

  const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

  const onSubmit = async ({ name, serial, quantity }: any) => {
    quantity = quantity.toString()
    if(modal && modal.item) {
      updateInventory({ variables: { id: modal?.item?.id, name, serial, quantity, companyNit: modal?.id }})
      alert('Item updated')
      updateModal({active: false, from:'', id: '', item: null})
      navigate('/inventory')
    } else {
      createInventory({ variables: { name, serial, quantity, companyNit: modal?.id }})
      alert('Item created')
      updateModal({active: false, from:'', id: '', item: null})
      navigate('/inventory')
    }
	};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" defaultValue={modal? modal?.item?.name:null } {...register('name')} />
        <p className="text-danger">{errors.name?.message as string}</p>
      </div>
      <div className="mb-3">
        <label htmlFor="serial" className="form-label">Serial</label>
        <input type="text" className="form-control" id="serial" defaultValue={modal? modal?.item?.serial:null } {...register('serial')} />
        <p className="text-danger">{errors.serial?.message as string}</p>
      </div>
      <div className="mb-3">
        <label htmlFor="quantity" className="form-label">Quantity</label>
        <input type="number" className="form-control" id="quantity" defaultValue={modal? modal?.item?.quantity:null } {...register('quantity')} />
        <p className="text-danger">{errors.quantity?.message as string}</p>
      </div>
      <button type="submit" className="btn btn-danger " onClick={()=>updateModal({active: false, from:'', id: '', item: null})}>Close</button>
      <button type="submit" className="btn btn-primary float-end">Send</button>
    </form>
  )
}

export default InventoryForm