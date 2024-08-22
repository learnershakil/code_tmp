import { useParams } from 'react-router-dom'

const User = () => {
    const {UserId} = useParams()
  return (
    <>
    <div className='bg-gray-600 text-center p-4 font-bold text-white'>User: {UserId}</div>
    </>
  )
}

export default User