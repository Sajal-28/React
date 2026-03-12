import Axios from 'axios';

let API_KEY = "c06902cec3cfb0e7c5407f92ede8441e";
let BASE_URL = "https://api.themoviedb.org/3";

//Popular Movies

export const getPopularMovies = async (page = 1) => {
    try {
        const res = await Axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);

        return res.data.results;
    } catch (error) {
        console.log("Error in fetching popular movies:", error);
    }
};

// Single Movie Details

export const getMovieDetails = async (id) => {
    try {
        const res = await Axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`);

        return res.data;
    } catch (error) {
        console.log("Error in fetching movie details:", error);
    }
};

//Trending Movies

export const getTrendingMovies = async () => {
    try {
        const res = await Axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}&language=en-US`);
        return res.data.results;
    } catch (error) {
        console.log("Error in fetching trending movies:", error);
    }   
};