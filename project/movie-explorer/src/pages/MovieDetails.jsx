import { getMovieDetails } from "../services/apiService"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { addToFav, removeFromFav, isFav } from "../components/fav"
import { toast } from "react-toastify"

function MovieDetails() {

    const { id } = useParams()
    const [movie, setMovie] = useState(null)
    const [fav, setFav] = useState(false)

    useEffect(() => {
       getMovieDetails(id).then((data) => {
        console.log(data);
        setMovie(data);
        setFav(isFav(data.id));
       }) 
       .catch((err) => console.error(err))

    }, [])
    if (!movie) {
        return (
        <div className="main-h-screen flex items-center justify-center">
          <h2 className="text-xl font-semibold animate-pulse">Loading Movies....</h2>
        </div>
        );
    }

    const toggleFav = () => {
        if (fav) {
            // remove from fav
            removeFromFav(movie.id);
            toast.info(`${movie.title} removed from Favourites`);
        } else {
            // add to fav
            addToFav(movie);
            toast.success(`${movie.title} added to Favourites!!`);
        }
        setFav(!fav);
    }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden md:flex">
            <img 
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} 
            alt={movie.title}
            className="md:w-1/3 object-cover " 
            />
            <div className="p-6 md:w-2/3">
               <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
               <p className="text-gray-700 mb-4">{movie.overview}</p>
               <p className="font-semibold mb-2">⭐ Rating: {movie.vote_average}</p>
               <p className="mb-4 text-gray-700">📅 Release Date : {movie.release_date}</p>

               <button onClick={toggleFav} className="px-5 py-2 bg-red-600 text-white rounded hover:bg-red-700 font-semibold">
                {fav ? "Remove from Favourites ❤️" : "Add to Favourites 🤍"}
               </button>
            </div>
        </div>
    </div>
  )
}

export default MovieDetails