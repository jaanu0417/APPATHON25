import React from 'react';
import { Link } from 'react-router-dom';
import { Film, Search, User, Settings } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900/80 backdrop-blur-md text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Film className="h-8 w-8 text-purple-500" />
            <span className="text-xl font-bold">JSN Movies</span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link to="/" className="hover:text-purple-400 transition-colors">Movies</Link>
            <Link to="/top-movies" className="hover:text-purple-400 transition-colors">Top Movies</Link>
            <Link to="/about" className="hover:text-purple-400 transition-colors">About Us</Link>
            <Link to="/search" className="hover:text-purple-400 transition-colors">
              <Search className="h-5 w-5" />
            </Link>
            <Link to="/preferences" className="hover:text-purple-400 transition-colors">
              <Settings className="h-5 w-5" />
            </Link>
            <Link to="/auth" className="hover:text-purple-400 transition-colors">
              <User className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;