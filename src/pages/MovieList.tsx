import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
          params: {
            api_key: 'ea42c846aa4a5e68e1253d3cdf137735'
          }
        });
        setMovies(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <div className="text-white text-center">Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies.map((movie: any) => (
        <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-card">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-96 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white">{movie.title}</h3>
            <p className="text-gray-400 mt-2">{movie.release_date}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MovieList;