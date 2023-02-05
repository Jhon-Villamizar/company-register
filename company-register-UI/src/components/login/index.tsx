import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import bcrypt from 'bcryptjs';
import { useQuery } from '@apollo/client';
import { useNavigate } from "react-router-dom";
import { AdminConsumer } from '../../config/context';
import { ALL_USERS } from '../../querys/user';
import { schema } from '../../schemas/login';
import './login.scss';
import { useState } from 'react';



const Login = () => {
	const [error, setError] = useState('')
	const { data } = useQuery(ALL_USERS);
	const { updateUser } = AdminConsumer();
	const navigate = useNavigate();
	
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = async ({ email, password }: any) => {
		try {
			const user = data.getAllUsers.find((user: any) => user.email === email);
			if (user) {
				const compare = bcrypt.compareSync(password, user.password)
				if (compare) {
					updateUser(user)
					navigate("/dashboard");
					console.log(user);		
				} else {
					setError('password')
					reset()
				}
			}  else {
				setError('user')
				reset()
			}
		} catch (error) {
			alert('petition fail, try again')
			reset()
			console.error("Error en la consulta");
		}
	};

	const handlerGuest = () => {
		navigate("/dashboard");
	}

	return (
		<div className="bg-primary container-fluid vh-100">
			<div className='align-content-center d-flex h-100 row justify-content-sm-center'>
				<div className="col-xs-12 col-sm-9 col-md-7 col-lg-5 col-xxl-4">

					<div className="card w-100">
						<div className="card-header">
							<h1 className='text-center'>Company Inventories</h1>
							<h6 className='text-center'>Access</h6>
						</div>
						<div className="card-body">
							<form onSubmit={handleSubmit(onSubmit)}>
								<div className="mb-3">
									<label htmlFor="exampleInputEmail1" className="form-label">Email</label>
									<input type="email" className="form-control" id="exampleInputEmail1" {...register('email')} />
									<p className="text-danger">{errors.email?.message as string}</p>
								</div>
								<div className="mb-3">
									<label htmlFor="exampleInputPassword" className="form-label">Password</label>
									<input type="password" className="form-control" id="exampleInputPassword" {...register('password')} />
									<p className="text-danger">{errors.password?.message as string}</p>
								</div>
								<button type="button" className="btn btn-outline-primary" onClick={() => handlerGuest()}>Guest</button>
								<button type="submit" className="btn btn-primary float-end">Log In</button>
							</form>
							{
								error.length > 0? (
									<div className='card-footer'>
									{
										error==='user'?(
											<div className="alert alert-danger d-flex align-items-center mt-2 p-2" role="alert">
												<b>Email is wrong</b>
											</div>
										):(
											<div className="alert alert-danger d-flex align-items-center mt-2 p-2" role="alert">
												<b>Password is wrong</b>
											</div>
										)
									}
									</div>
								):(null)
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login