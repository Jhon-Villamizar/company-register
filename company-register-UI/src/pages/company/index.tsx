import React, { useEffect } from 'react'
import TableCompanies from '../../components/tablesCompanies/companies'
import Nav from '../../components/nav'
import TableCompany from '../../components/tablesCompanies/company'
import { AdminConsumer } from '../../config/context';

function Company() {
  const { companies } = AdminConsumer();

  useEffect(() => {
    console.log(companies)
  }, [companies])

  return (
    <div>
      <Nav />
      <h2 className='text-center mt-5'>User Company</h2>
      <TableCompany />
      <h2 className='text-center mt-5'>Company List</h2>
      <TableCompanies />
    </div>
  )
}

export default Company