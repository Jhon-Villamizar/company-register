import { AdminConsumer } from '../../config/context';

const TableCompany = () => {
  const { company } = AdminConsumer();
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          {
            company && company.length !== 0 ? (
              <div className='table-responsive'>
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Address</th>
                      <th scope="col">Phone</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      company.map((item: any, index: number) => (
                        <tr key={index}>
                          <th scope="row">{item.name}</th>
                          <td>{item.address}</td>
                          <td>{item.phone}</td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
            ) : (
              <div>
                <button type='button' className="btn btn-primary">Register your company</button>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default TableCompany