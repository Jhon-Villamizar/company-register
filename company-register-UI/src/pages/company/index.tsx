import React, { useEffect } from 'react'
import TableCompanies from '../../components/tablesCompanies/companies'
import Nav from '../../components/nav'
import TableCompany from '../../components/tablesCompanies/company'
import { AdminConsumer } from '../../config/context';
import Modal from '../../components/modal';

function Company() {
  const { companies, user, modal } = AdminConsumer();

  useEffect(() => {
    console.log(companies)
  }, [companies])

  return (
    <div className='position-relative'>
      <Nav />
      {
        user?.id? (
          <>
            <h2 className='text-center mt-5'>User Company</h2>
            <TableCompany />
          </>
        ):(null)
      }
      <h2 className='text-center mt-5'>Company List</h2>
      <TableCompanies />
      {modal?.active?(<Modal />):(null)}
    </div>
  )
}

export default Company