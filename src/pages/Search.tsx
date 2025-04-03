import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Search as SearchIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const searchMovies = async () => {
      if (!query.trim()) {
        setResults([]);
        return;
      }

      setLoading(true);
      try {
        const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
          params: {
            api_key: 'ea42c846aa4a5e68e1253d3cdf137735',
            query: query
          }
        });
        setResults(response.data.results);
      } catch (error) {
        console.error('Error searching movies:', error);
      }
      setLoading(false);
    };

    const debounce = setTimeout(searchMovies, 500);
    return () => clearTimeout(debounce);
  }, [query]);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative mb-8">
        <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-gray-900/80 backdrop-blur-sm rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {loading ? (
        <div className="text-center text-white">Searching...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {results.map((movie: any) => (
            <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-96 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">{movie.title}</h3>
                <p className="text-purple-400 mt-2">Rating: {movie.vote_average} / 10</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;