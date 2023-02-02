import { useLazyQuery } from '@apollo/client';
import { useEffect } from 'react'
import { Link } from "react-router-dom";
import { AdminConsumer } from '../../config/context';
import { FIND_COMPANY } from '../../querys/company';
import './dashboard.scss'

const Dashboard = () => {
  const { logged, userId, company, uploadCompany } = AdminConsumer();
  const [getCompany, result] = useLazyQuery(FIND_COMPANY)
  useEffect(() => {
    showCompany()
  }, [])
  useEffect(() => {
    if (result.data) {
      uploadCompany(result.data.getCompanyByUserId)
    }
  }, [result])

  const showCompany = () => {
    getCompany({variables: {userId: userId}});
  }

  return (
    <>
      <div className="dashboard end-0 position-fixed start-0 vh-100 z-n1">
      </div>
      <div className="container content end-0 position-fixed start-0 vh-100 z-1">
        <div className='align-content-center d-flex h-100 row justify-content-sm-center'>
          <div className="col-12">
            <div className="row d-flex justify-content-center">
              <div className="col-xs-12 col-sm-10 col-md-10 col-lg-8 col-xxl-8">
                <h1 className='mb-5 text-center title'>Welcome To<br />Company Register</h1>
                <p className='detail mb-5 text-center'>In this application you will be able to register your company and create the inventory and control it as you wish.</p>
              </div>
            </div>
            <div className="row d-flex justify-content-center mt-5">
              <div className="col-xs-12 col-sm-9 col-md-7 col-lg-5 col-xxl-4">
                <div className="bg-opacity-75 bg-white card mb-5">
                  <Link to={'/company'}>
                    <div className="card-body">
                      This is some text within a card body.
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-xs-12 col-sm-9 col-md-7 col-lg-5 col-xxl-4">
                <div className="bg-opacity-75 bg-white card">
                  <div className="card-body">
                    This is some text within a card body.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard