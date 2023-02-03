import Intentories from '../../components/tablesInventaries'
import Nav from '../../components/nav'

const Inventory = () => {
  
  return (
    <div>
      <Nav />
      <h2 className='text-center mt-3'>Inventory</h2>
      <Intentories />
    </div>
  )
}

export default Inventory