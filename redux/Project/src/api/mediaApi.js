import axios from "axios";

const UNSLASHED_API_KEY = import.meta.env.VITE_UNSLASHED_API_KEY;
const PEXELS_API_KEY = import.meta.env.VITE_PEXELS_API_KEY;


export async function fetchPhotos(query, page, per_page){
   const res = await axios.get('https://api.unsplash.com/search/photos', {
    params: {query, page, per_page},
    headers: {Authorization: `Client-ID ${UNSLASHED_API_KEY}`}
   });

   return res.data;
}

export async function fetchVideos(query, per_page = 15){
  const res = await axios.get('https://api.pexels.com/videos/search', {
    params: {query,per_page},
    headers: {Authorization: PEXELS_API_KEY}
   }); 

    return res.data;    
}