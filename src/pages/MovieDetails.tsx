import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
          params: {
            api_key: 'ea42c846aa4a5e68e1253d3cdf137735'
          }
        });
        setMovie(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) {
    return <div className="text-white text-center">Loading...</div>;
  }

  if (!movie) {
    return <div className="text-white text-center">Movie not found</div>;
  }

  return (
    <div className="bg-gray-800/80 backdrop-blur-md rounded-lg p-6 text-white shadow-xl">
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full md:w-1/3 rounded-lg shadow-2xl"
        />
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4 text-purple-300">{movie.title}</h1>
          <p className="text-gray-300 mb-4 leading-relaxed">{movie.overview}</p>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-900/50 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="text-purple-400 font-semibold">Release Date</h3>
              <p className="text-white">{movie.release_date}</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="text-purple-400 font-semibold">Rating</h3>
              <p className="text-white">{movie.vote_average} / 10</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="text-purple-400 font-semibold">Runtime</h3>
              <p className="text-white">{movie.runtime} minutes</p>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg backdrop-blur-sm">
              <h3 className="text-purple-400 font-semibold">Budget</h3>
              <p className="text-white">${movie.budget?.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;