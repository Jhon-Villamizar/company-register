import { useLazyQuery, useMutation } from '@apollo/client';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AdminConsumer } from '../../config/context';
import { DELETE_COMPANY, FIND_COMPANY } from '../../querys/company';

const TableCompany = () => {
  const navigate = useNavigate();
  const { companyUser, updateNit, updateActions, updateModal, user, modal, updateCompanyUser } = AdminConsumer();
  const [getCompany, result] = useLazyQuery(FIND_COMPANY, {
    fetchPolicy: 'no-cache'
  })
  const [deleteCompany] = useMutation(DELETE_COMPANY)

  useEffect(() => {
    showCompany()
  }, [modal])

  useEffect(() => {
    updateCompanyUser(result?.data?.getCompanyByUserId)
  }, [result])

  const showCompany = () => {
    getCompany({ variables: {userId: user?.id} })
  }

  const handlerInventory = (id: string) => {
    updateNit(id)
    updateActions(true)
    navigate('/inventory')
  }

  const hadlerDelete = (nit: string) => {
    deleteCompany({ variables: {nit: nit}})
    alert('Company deleted')
    showCompany()
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          {
            companyUser && companyUser.length !== 0 ? (
              <>
              <div>
                <button type='button' className="btn btn-outline-primary" onClick={()=>updateModal({active: true, from: 'company', id: user.id, item: null})}>Add company</button>
              </div>
              <div className='table-responsive'>
                <table className="table">
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
                      companyUser.map((item: any, index: number) => (
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
                              <button type="button" className="btn btn-primary p-1 button-icon me-1" onClick={() => updateModal({active: true, from: 'company', id: user.id, item: item})}>
                                <img src="edit.png" alt="" width={22} />
                              </button>
                              <button type="button" className="btn btn-danger p-1 button-icon" onClick={()=> hadlerDelete(item.nit)}>
                                <img src="delete.png" alt="" width={22} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
              </>
            ) : (
              <div>
                <button type='button' className="btn btn-primary" onClick={()=>updateModal({active: true, from: 'company', id: user.id, item: null})}>Register your company</button>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default TableCompany