import { useLazyQuery, useMutation } from '@apollo/client';
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AdminConsumer } from '../../config/context';
import { DELETE_INVENTORY, FIND_INVENTORIES_BY_COMPANY } from '../../querys/inventory';

const Intentories = () => {
  const navigate = useNavigate();
  const { inventory, nit, updateInventory, actions, modal, updateModal } = AdminConsumer();
  const [getInventary, result] = useLazyQuery(FIND_INVENTORIES_BY_COMPANY, {
    fetchPolicy: 'no-cache'
  })
  const [deleteInventory] = useMutation(DELETE_INVENTORY)

  useEffect(() => {
    showInventary()
  }, [modal])

  useEffect(() => {
    if (result.data) {
      updateInventory(result.data.getInventoryByCompanyNit)
    }
  }, [result.data, inventory])


  const showInventary = () => {
    getInventary({ variables: { companyNit: nit }});
  }

  const hadlerDelete = (id: any) => {
    deleteInventory({ variables:{id: id}})
    alert('Inventory deleted')
    showInventary()
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
          {
            actions?(
              <button type="button" className="btn btn-outline-primary" onClick={() => updateModal({active: true, from: 'inventory', id: nit, item: null})}>Add item to inventory</button>
            ):(null)
          }
            <div className='mt-5'>
              {
                inventory?(
                    inventory.length > 0? (
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th scope="col">Serial</th>
                              <th scope="col">Name</th>
                              <th scope="col">Quantity</th>
                              {
                                actions?(
                                  <th scope="col" className='text-center'>Actions</th>
                                ):(null)
                              }

                            </tr>
                          </thead>
                          <tbody>
                            {
                              inventory.map((item: any, index:number) => (
                                <tr key={index}>
                                  <th scope="row">{item.serial}</th>
                                  <td>{item.name}</td>
                                  <td>{item.quantity}</td>
                                  {
                                    actions?(
                                      <td className='text-center'>
                                        <div className="d-flex justify-content-center">
                                          <button type="button" className="btn btn-primary p-1 button-icon me-1" onClick={() => updateModal({active: true, from: 'inventory', id: nit, item: item})}>
                                            <img src="edit.png" alt="" width={22} />
                                          </button>
                                          <button type="button" className="btn btn-danger p-1 button-icon" onClick={() => hadlerDelete(item.id)}>
                                            <img src="delete.png" alt="" width={22} />
                                          </button>
                                        </div>
                                      </td>
                                    ):(null)
                                  }

                                </tr>
                              ))
                            }
                          </tbody>
                        </table>
                      </div>
                    ):(
                      <h2>No hay Registros</h2>
                    )
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
    </>
  )
}

export default Intentories