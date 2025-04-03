import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-white">
      <h1 className="text-6xl font-bold text-purple-400 mb-4">404</h1>
      <p className="text-2xl mb-8">Page Not Found</p>
      <p className="text-gray-400 mb-8 text-center max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
      >
        <Home className="w-5 h-5" />
        <span>Back to Home</span>
      </Link>
    </div>
  );
};

export default NotFound;