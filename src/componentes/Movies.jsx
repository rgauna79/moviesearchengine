function listOfMovies({ movies }) {
  return (
    <ul className="movieList">
      {movies.map((movie) => (
        <li key={movie.id} className="movieCard">
          <h3 className="movieTitle">{movie.title}</h3>
          <p className="movieYear">{movie.year}</p>
          <img src={movie.poster} alt={movie.title} className="moviePoster" />
        </li>
      ))}
    </ul>
  );
}

function NoMoviesFound() {
  return <p>No movies found</p>;
}

export  function Movies({ movies }) {
  return movies.length > 0 ? listOfMovies({ movies }) : NoMoviesFound();
}