import { useEffect } from 'react'
import { useQuery } from '@apollo/client';
import { AdminConsumer } from '../../config/context';
import { ALL_COMPANIES } from '../../querys/company';
import './tables.scss'

const TableCompanies = () => {
  const { company, userId, companies, updateCompanies, updateInventory } = AdminConsumer();
  const { data } = useQuery(ALL_COMPANIES);

  useEffect(() => {
    if(data) {
      updateCompanies(data.getAllCompanies)
    }
  }, [data, company])

  const handlerInventory = (id: string) => {
    console.log(id)
  }

  const conUsuario = data?.getAllCompanies?.filter((item: any, index: number) => item.userId!== userId)  

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className='mt-3'>
            {
              companies? (
                <div className='table-responsive'>
                  <table className="table border border-light">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Phone</th>
                        <th scope="col" className='text-center'>Inventary</th>
                        <th scope="col" className='text-center'>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        companies?(
                          company?(
                            conUsuario.map((item: any, index: number) => (
                              <tr key={index}>
                                <th scope="row">{item.name}</th>
                                <td>{item.address}</td>
                                <td>{item.phone}</td>
                                
                              </tr>
                            ))
                          ):(
                            companies.map((item: any, index: number) => (
                              <tr key={index}>
                                <th scope="row">{item.name}</th>
                                <td>{item.address}</td>
                                <td>{item.phone}</td>
                                <td>
                                  <div className="text-center">
                                    <button className='text-center' onClick={()=> handlerInventory(item.nit)}>
                                      <img src="/inventory.png" alt="" width={20} height={20} />
                                    </button>
                                  </div>
                                </td>
                                <td className='text-center'>
                                  <div className="d-flex justify-content-center">
                                    <button type="button" className="btn btn-primary p-1 button-icon me-1">
                                      <img src="edit.png" alt="" width={22} />
                                    </button>
                                    <button type="button" className="btn btn-danger p-1 button-icon">
                                      <img src="delete.png" alt="" width={22} />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            )
                          ))
                        ):null
                      }
                    </tbody>
                  </table>
                </div>
              ):(
                <div className="d-flex justify-content-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default TableCompanies