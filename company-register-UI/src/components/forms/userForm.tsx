import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { AdminConsumer } from '../../config/context';
import { schema } from '../../schemas/user';
import { CREATE_USER } from '../../querys/user';
import { useEffect } from 'react';

const UserForm = () => {
  const navigate = useNavigate();
  const { updateModal } = AdminConsumer();
  const [createUser, result] = useMutation(CREATE_USER)

  useEffect(() => {    
  }, [result])

  const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

  const onSubmit = async ({ name, email, password }: any) => {
    createUser({ variables: { name, email, password } })
    navigate('/')
    alert(`User created, please login`)
    updateModal({active: false, from:'', id: '', item: null})
	};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input type="text" className="form-control" id="name" {...register('name')} />
        <p className="text-danger">{errors.name?.message as string}</p>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="text" className="form-control" id="email" {...register('email')} />
        <p className="text-danger">{errors.email?.message as string}</p>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" {...register('password')} />
        <p className="text-danger">{errors.password?.message as string}</p>
      </div>
      <button type="submit" className="btn btn-danger " onClick={()=>updateModal({active: false, from:'', id: '', item: null})}>Close</button>
      <button type="submit" className="btn btn-primary float-end">Send</button>
    </form>
  )
}

export default UserForm
