import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className='bg-black text-white shadow-md'>
            <div className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-16'>
                    <Link to="#" className='text-2xl font-bold text-blue-500 hover:text-blue-400'>Movie Explorer</Link>

                    <div className='flex space-x-6'>
                        <Link className='font-semibold hover:text-blue-400' to ="/">Home</Link>
                        <Link className='font-semibold hover:text-blue-400' to ="/movies">Movies</Link>
                        <Link className='font-semibold hover:text-blue-400' to ="/fav">Favourites</Link>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar