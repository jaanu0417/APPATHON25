import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';

const genres = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 18, name: 'Drama' },
  { id: 14, name: 'Fantasy' },
  { id: 27, name: 'Horror' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 53, name: 'Thriller' }
];

const Preferences = () => {
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);

  const toggleGenre = (genreId: number) => {
    setSelectedGenres(prev =>
      prev.includes(genreId)
        ? prev.filter(id => id !== genreId)
        : [...prev, genreId]
    );
  };

  const savePreferences = async () => {
    setLoading(true);
    try {
      const { error } = await supabase
        .from('user_preferences')
        .upsert({ 
          user_id: (await supabase.auth.getUser()).data.user?.id,
          genres: selectedGenres 
        });

      if (error) throw error;
      toast.success('Preferences saved successfully!');
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-8">Movie Preferences</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {genres.map(genre => (
          <button
            key={genre.id}
            onClick={() => toggleGenre(genre.id)}
            className={`p-4 rounded-lg transition-all ${
              selectedGenres.includes(genre.id)
                ? 'bg-purple-600 text-white'
                : 'bg-gray-800/80 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {genre.name}
          </button>
        ))}
      </div>
      <button
        onClick={savePreferences}
        disabled={loading}
        className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg transition-colors"
      >
        {loading ? 'Saving...' : 'Save Preferences'}
      </button>
    </div>
  );
};

export default Preferences;