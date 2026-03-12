import {useState, useEffect} from 'react'
import { getTrendingMovies } from '../services/apiService'
import { Link } from 'react-router-dom'

function Home() {

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getTrendingMovies().then((data) => {
            console.log(data)
            setMovies(data.slice(0, 4))
        })
        .catch((err) => {
            console.log("Error fetching trending movies:", err)
        })
        .finally(() => {
            setLoading(false)
        })
    },[])

    if(loading){
        return <h2 className='p-4'>Loading...</h2>
    }

  return (
    <div className='p-6'>
        <div className='bg-gray-900 text-white p-10 rounded'>
            <h1 className='text-3xl font-bold'>Welcome to Movie Explorer</h1>
            <p className='mt-3'>Discover Trending or Popular Movies</p>

            <Link to="/movies" className='inline-block mt-4 bg-red-600 px-4 py-2 rounded'>Explore Movies</Link>
        </div>
        <h2 className='text-xl font-bold mt-8 mb-4 text-center text-blue-400 text-shadow-lg text-shadow-blue-600'>Trending Movies</h2>
        <div className='grid grid-cols-4 gap-4'> 
            {
                movies.map((movie) => (
                    <div key={movie.id} className='shadow-lg rounded-xl p-4'>
                        <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
                        <h3 className='font-semibold mt-2 text-xl text-center'>{movie.title}</h3>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Home