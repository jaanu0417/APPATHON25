import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import TopMovies from './pages/TopMovies';
import AboutUs from './pages/AboutUs';
import Search from './pages/Search';
import Auth from './pages/Auth';
import NotFound from './pages/NotFound';
import Preferences from './pages/Preferences';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen relative">
        <Toaster position="top-right" />
        <div className="space-background">
          <div className="stars"></div>
          <div className="nebula"></div>
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="shooting-star"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        <div className="content-wrapper flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<MovieList />} />
              <Route path="/movie/:id" element={<MovieDetails />} />
              <Route path="/top-movies" element={<TopMovies />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/search" element={<Search />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/preferences" element={<Preferences />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;