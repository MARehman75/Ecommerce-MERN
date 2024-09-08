import Navbar from '../features/navbar/Navbar'
import UserOrders from '../features/user/components/userOrders'

const UserOrdersPage = () => {
  return (
    <Navbar>
        <h1 className='mx-auto text-4xl text-left'>My Orders</h1>
        <UserOrders/>
    </Navbar>
  )
}

export default UserOrdersPage