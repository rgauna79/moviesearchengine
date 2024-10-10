const API_KEY = "711d7a7f";
const BASE_URL = "https://www.omdbapi.com";

export const searchMovies = async ({ search }) => {
  if (search === "") return null;

  const url = `${BASE_URL}/?apikey=${API_KEY}&s=${search}`;
  try {
    const response = await fetch(url);
    const json = await response.json();
    const movies = json.Search;
    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }));
  } catch (error) {
    throw new Error("Error searching for movies");
  }
};
