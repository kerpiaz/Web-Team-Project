import { getCategories, getMoviesGeneralInfo, getMoviesFullInfo, getMovieById, getCategory, searchMovies } from '../data/movies.js';

const myApiKey = '72dZueU3dzghkydrZ7nuqnbzOihjkdBr';

export const loadTrending = async () => {
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${myApiKey}&limit=25&rating=g`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching trending gifs:', error);
    return [];
  }
};

export const loadCategory = (id = null) => {
  const category = getCategory(id);

  return category;
}

export const loadMovies = (categoryId = null) => {
  const movies = getMoviesGeneralInfo(categoryId);

  return movies;
};

export const loadSingleMovie = (id) => {
  const movie = getMovieById(id);

  return movie;  
};

export const loadSearchMovies = (searchTerm = '') => {
  const movies = searchMovies(searchTerm);

  return movies;
};
