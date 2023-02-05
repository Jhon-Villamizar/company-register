import { useNavigate } from 'react-router-dom';
import Intentories from '../../components/tablesInventaries'
import Nav from '../../components/nav'
import { AdminConsumer } from '../../config/context';
import { useEffect } from 'react';
import Modal from '../../components/modal';

const Inventory = () => {
  const { modal } = AdminConsumer();

  useEffect(() => {

  }, [modal])

  return (
    <div className='position-relative'>
      <Nav />
      <h2 className='text-center mt-3'>Inventory</h2>
      <Intentories />
      {modal?.active?(<Modal />):(null)}
    </div>
  )
}

export default Inventory