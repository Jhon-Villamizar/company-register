import { useEffect } from 'react'
import { useQuery } from '@apollo/client';
import { AdminConsumer } from '../../config/context';
import { ALL_COMPANIES } from '../../querys/company';
import './tables.scss'
import { useNavigate } from 'react-router-dom';

const TableCompanies = () => {
  const navigate = useNavigate();
  const { companyUser, user, companies, updateCompanies, updateNit } = AdminConsumer();
  const { data } = useQuery(ALL_COMPANIES);

  useEffect(() => {
    if(data) {
      updateCompanies(data.getAllCompanies)
    }
  }, [data, companyUser])

  const handlerInventory = (id: string) => {
    console.log(id)
    updateNit(id)
    navigate('/inventory')
  }

  const conUsuario = data?.getAllCompanies?.filter((item: any, index: number) => item.userId!== user?.id)  

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className='mt-3'>
            {
              companies? (
                <div className='table-responsive'>
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Phone</th>
                        <th scope="col" className='text-center'>Inventary</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        companies?(
                          companyUser?(
                            conUsuario.map((item: any, index: number) => (
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