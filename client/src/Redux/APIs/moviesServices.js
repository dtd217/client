import Axios from './Axios.js';

// ********** PUBLIC APIS **********

// Get all movies
const getAllMoviesService = async ({ categories, year, type, search, pageNumber }) => {
   const { data } = await Axios.get(`/movies?categories=${categories.join("&categories=")}&year=${year}&type=${type}&search=${search}&pageNumber=${pageNumber}`);
   return data
}

// Get movie by id
const getMovieByIdService = async (id) => {
   const { data } = await Axios.get(`/movies/${id}`);
   return data
}

// Get random movie
const getRandomMovieService = async () => {
   const { data } = await Axios.get('/movies/random/all');
   return data
}

// Get top rated movies
const getTopRatedMoviesService = async () => {
   const { data } = await Axios.get('/movies/rated/top');
   return data
}

// Review movie
const reviewMovieService = async (id, review, token) => {
   const { data } = await Axios.post(`/movies/${id}/reviews`, review, {
      headers: { Authorization: `Bearer ${token}` }
   });
   return data
}

// Delete movie
const deleteMovieService = async (id, token) => {
   const { data } = await Axios.delete(`/movies/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
   });
   return data
}

// Delete all movies
const deleteAllMoviesService = async (token) => {
   const { data } = await Axios.delete('/movies', {
      headers: { Authorization: `Bearer ${token}` }
   });
   return data
}

// Create movie
const createMovieService = async (movie, token) => {
   const { data } = await Axios.post('/movies', movie, {
      headers: { Authorization: `Bearer ${token}` }
   })
   return data
}

// Edit movie
const updateMovieService = async (id, movie, token) => {
   const { data } = await Axios.put(`/movies/${id}`, movie, {
      headers: { Authorization: `Bearer ${token}` }
   })
   return data
}

export {
   getAllMoviesService,
   getMovieByIdService,
   getRandomMovieService,
   getTopRatedMoviesService,
   reviewMovieService,
   deleteMovieService,
   deleteAllMoviesService,
   createMovieService,
   updateMovieService
}