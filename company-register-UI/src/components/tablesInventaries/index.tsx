import { useLazyQuery } from '@apollo/client';
import React, { useEffect } from 'react'
import { AdminConsumer } from '../../config/context';
import { FIND_INVENTORIES_BY_COMPANY } from '../../querys/inventory';

const Intentories = () => {
  const { inventory, updateInventory } = AdminConsumer();
  const [getInventary, result] = useLazyQuery(FIND_INVENTORIES_BY_COMPANY)

  useEffect(() => {
    showInventary()
  }, [])

  useEffect(() => {
    console.log(result)
    if (result.data) {
      updateInventory(result.data.getInventoryByCompanyNit)
    }
  }, [result])


  const showInventary = () => {
    getInventary({ variables: { companyNit: inventory }});
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className='mt-5'>
            {
              result? (
                <table className="table table-striped-columns">
                  <thead>
                    <tr>
                      <th scope="col">Serial</th>
                      <th scope="col">Name</th>
                      <th scope="col">Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      inventory? (
                        inventory.map((item: any, index:number) => (
                          <tr key={index}>
                            <th scope="row">{item.serial}</th>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                          </tr>
                        ))
                      ):(null)
                    }
                    
                  </tbody>
                </table>
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

export default Intentories