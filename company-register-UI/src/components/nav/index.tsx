import React from 'react'
import { Link } from 'react-router-dom'
import { AdminConsumer } from '../../config/context';
import './nav.scss'

const Nav = () => {
	const { user, updateModal, updateUser } = AdminConsumer();
	return (
		<nav className="navbar nav-container">
			<div className="container d-flex flex-row">
				<div className="w-50">
					<Link to={'/dashboard'} className='text-decoration-none text-white'>
						<h2>HOME</h2>
					</Link>
				</div>
				<div className="w-50 d-flex flex-row justify-content-end">
					<div>
						<Link to={'/company'}  className='text-decoration-none text-white'>
							<span>Company</span>
						</Link>
					</div>
					{
						!user? (
							<>
								<div className='ms-3'>
									<span className='text-white' onClick={()=>updateModal({active: true, from: 'user', id: '',itemId: ''})}>Register</span>
								</div>
								<div className='ms-3'>
									<Link to={'/'} className='text-decoration-none text-white'>
										<span >Sing In</span>
									</Link>
								</div>
							</>
						):(
							<>
								<div className='ms-3'>
									<Link to={'/'} className='text-decoration-none text-white' onClick={() => updateUser(null)}>
										<span >Log out</span>
									</Link>
								</div>
								<div className='align-items-center d-flex ms-5'>
									<span className='text-white'>{user.name}</span>
									<img src="/user.png" alt="" className='ms-2' width={20} height={20} />
								</div>
							</>
						)
					}
				</div>
			</div>
		</nav>
	)
}

export default Nav