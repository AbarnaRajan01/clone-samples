import axios from "axios";

const urlBase="https://api.themoviedb.org/3"
const api_key="d97a9e35a07268c80ee3f1850ad50a69"
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=d97a9e35a07268c80ee3f1850ad50a69';
//https://api.themoviedb.org/3/trending/all/day?api_key=d97a9e35a07268c80ee3f1850ad50a69
const getTrendingVideos=axios.get(urlBase+
    "/trending/all/day?api_key="+api_key);
    const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

   
export default{
    getTrendingVideos,getMovieByGenreId
    
}
