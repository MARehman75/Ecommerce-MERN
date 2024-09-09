import Navbar from '../features/navbar/Navbar'
import UserProfile from '../features/user/components/UserProfile'

const UserProfilePage = () => {
  return (
    <Navbar>
        <h1 className='mx-auto text-4xl text-left'>My Profile</h1>
        <UserProfile/>
    </Navbar>
  )
}

export default UserProfilePage