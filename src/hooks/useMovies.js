import {useRef, useState, useMemo, useCallback} from 'react';
import { searchMovies } from '../services/movies';

export function useMovies({search, sort}) {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const previousSearch = useRef(search);

    const getMovies = useCallback(async ({search}) => {
        if (search === previousSearch.current) return;
        try {
            setLoading(true);
            setError(null);
            previousSearch.current = search;
            // const url = `https://www.omdbapi.com/?apikey=711d7a7f&s=${search}`;
            // const response = await fetch(url);
            // const json = await response.json();
            const newMovies = await searchMovies({search});
            setMovies(newMovies);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }, []);

    const sortedMovies = useMemo(() => {
        if (!movies) return [];
        return sort
            ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
            : movies;
    }, [movies, sort]);

    return { movies: sortedMovies, getMovies, loading, error };
}