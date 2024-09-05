import "./App.css";
import { Movies } from "./componentes/Movies.jsx";
import { useEffect, useRef, useState, useCallback } from "react";
import { useMovies } from "./hooks/useMovies";
import debounce from "just-debounce-it";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "./hooks/useTheme.js";

function useSearch() {
  const [search, updateSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }
    if (search === "") {
      setError("Search cannot be empty");
      return;
    }
    if (search && search.length < 3) {
      setError("Search must be at least 3 characters");
      return;
    }
    if (search.match(/^\d+$/)) {
      setError("Search cannot be only numbers");
      return;
    }

    setError(null);
  }, [search]);

  return { search, updateSearch, error };
}

function App() {
  const [sort, setSort] = useState(false);
  const { search, updateSearch, error } = useSearch();
  const { movies, loading, getMovies } = useMovies({
    search,
    sort,
  });
  const { theme, toggleTheme } = useTheme();

  console.log(theme);
  const debouncedGetMovies = useCallback(
    debounce((search) => {
      // console.log("search", search);
      getMovies({ search });
    }, 300),
    [getMovies]
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({ search });
  };

  const handleSort = () => {
    setSort(!sort);
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    updateSearch(newSearch);
    debouncedGetMovies(newSearch);
  };

  return (
    <div className="page">
      <header>
        <div className="navbar">
          <label className="theme-switch">
            <input
              type="checkbox"
              onChange={toggleTheme}
              checked={theme === "dark"}
            />
            <span className="slider">
              <FontAwesomeIcon icon={faSun} className="icon light" />
              <FontAwesomeIcon icon={faMoon} className="icon dark" />
            </span>
            <p className="themeLabel">{theme} theme</p>
          </label>
        </div>
        <div className="searchBox">
          <h1>Movies search engine</h1>
          <form className="searchBar" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                value={search}
                onChange={handleChange}
                id="search"
                type="text"
                placeholder="Matrix, The Dark Knight... "
              />

              <div className="checkbox-group">
                <input
                  name="sort"
                  id="sort"
                  type="checkbox"
                  onChange={handleSort}
                  checked={sort}
                />
                <label htmlFor="sort">Sort</label>
              </div>
            </div>
            <button className="search" type="submit">
              Search
            </button>
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </header>
      <main>
        <h2>Movie Catalog</h2>
        {loading ? <p>Loading...</p> : <Movies movies={movies} />}
      </main>
    </div>
  );
}

export default App;
