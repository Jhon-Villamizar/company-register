import React from 'react'
import { Link } from 'react-router-dom'
import { AdminConsumer } from '../../config/context';
import './nav.scss'

const Nav = () => {
	const { userId } = AdminConsumer();
	return (
		<nav className="navbar nav-container">
			<div className="container d-flex flex-row">
				<div className="w-50">
					<Link to={'/dashboard'} className='text-decoration-none text-white'>
						<h2>HOME</h2>
					</Link>
				</div>
				<div className="w-50 d-flex flex-row justify-content-end">
					<div className="me-3">
						<Link to={'/company'}  className='text-decoration-none text-white'>
							<span>Company</span>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Nav