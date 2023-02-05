import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AdminConsumer } from '../../config/context';
import { schema } from '../../schemas/company';
import { useMutation } from '@apollo/client';
import { CREATE_COMPANY, UPDATE_COMPANY } from '../../querys/company';
import { useNavigate } from 'react-router-dom';

const CompanyForm = () => {
  const navigate = useNavigate();
  const { modal, updateModal, user, companyUser } = AdminConsumer();
  const [createCompany] = useMutation(CREATE_COMPANY)
  const [updateCompany] = useMutation(UPDATE_COMPANY)

  const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

  const onSubmit = async ({ nit, name, address, phone }: any) => {
    const findNit = companyUser.find((i: any) => i.nit == nit)
    if(findNit){
      updateCompany({ variables: { nit, name, address, phone, userId: user.id }})
      alert('Company updated')
      updateModal({active: false, from:'', id: '', item: null})
      navigate('/company')
    } else {
      createCompany({ variables: { nit, name, address, phone, userId: user.id }})
      alert('Company created')
      updateModal({active: false, from:'', id: '', item: null})
      navigate('/company')
    }
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {
        modal && modal?.item?.nit? (
          <>
            <input type="text" className="form-control" id="nit" defaultValue={modal?.item?.nit} {...register('nit')} hidden/>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" defaultValue={modal?.item?.name} {...register('name')} />
              <p className="text-danger">{errors.name?.message as string}</p>
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <input type="text" className="form-control" id="address" defaultValue={modal?.item?.address} {...register('address')} />
              <p className="text-danger">{errors.address?.message as string}</p>
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input type="text" className="form-control" id="phone" defaultValue={modal?.item?.phone} {...register('phone')} />
              <p className="text-danger">{errors.phone?.message as string}</p>
            </div>
          </>
        ):(
          <>
            <div className="mb-3">
              <label htmlFor="nit" className="form-label">Nit</label>
              <input type="text" className="form-control" id="nit" {...register('nit')} />
              <p className="text-danger">{errors.nit?.message as string}</p>
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" {...register('name')} />
              <p className="text-danger">{errors.name?.message as string}</p>
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <input type="text" className="form-control" id="address" {...register('address')} />
              <p className="text-danger">{errors.address?.message as string}</p>
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input type="text" className="form-control" id="phone" {...register('phone')} />
              <p className="text-danger">{errors.phone?.message as string}</p>
            </div>
          </>
        )
      }
      <button type="submit" className="btn btn-danger " onClick={()=>updateModal({active: false, from:'', id: '', item: null})}>Close</button>
      <button type="submit" className="btn btn-primary float-end">Send</button>
    </form>
  )
}

export default CompanyForm