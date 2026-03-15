import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PetCard from '../components/PetCard';

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/pets');
      setPets(response.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching pets:', err);
      setError('Failed to load pets. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const categories = ['all', 'dog', 'cat', 'parrot', 'rabbit', 'lizard', 'turtle'];

  const filteredPets = pets.filter(pet => {
    const typeMatch = selectedCategory === 'all' || pet.type.toLowerCase() === selectedCategory;
    const searchMatch = pet.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                       pet.type.toLowerCase().includes(searchTerm.toLowerCase());
    return typeMatch && searchMatch;
  });

  const getCategoryEmoji = (category) => {
    const emojiMap = {
      all: '🐾',
      dog: '🐕',
      cat: '🐱',
      parrot: '🦜',
      rabbit: '🐰',
      lizard: '🦎',
      turtle: '🐢'
    };
    return emojiMap[category] || '🐾';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 pt-10">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 mb-4">
            🐾 Welcome to PawsAdopt
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Discover your perfect pet companion from our amazing collection of dogs, cats, exotic animals and more!
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center">
          <input
            type="text"
            placeholder="Search by name or type... 🔍"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-6 py-3 rounded-full border-2 border-orange-200 focus:outline-none focus:border-orange-500 transition w-full md:w-64 shadow-lg"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full font-bold transition transform hover:scale-110 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-orange-400 to-pink-400 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 border-2 border-orange-200 hover:border-orange-400'
              }`}
            >
              {getCategoryEmoji(cat)} {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </section>

      {/* Pets Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Available Pets ({filteredPets.length})
          </h2>
          <p className="text-gray-600 mt-2">Click on any pet to learn more and start the adoption process!</p>
        </div>

        {loading ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4 animate-spin">🐾</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">Loading Pets...</h3>
            <p className="text-gray-600">Fetching the latest available pets</p>
          </div>
        ) : error ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">❌</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">Error Loading Pets</h3>
            <p className="text-gray-600 mb-4">{error}</p>
            <button 
              onClick={fetchPets}
              className="bg-gradient-to-r from-orange-400 to-pink-400 text-white px-6 py-2 rounded-lg font-bold hover:from-orange-500 hover:to-pink-500 transition"
            >
              Try Again
            </button>
          </div>
        ) : filteredPets.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredPets.map((pet, index) => (
              <div key={pet.id} style={{ animationDelay: `${index * 0.1}s` }}>
                <PetCard pet={pet} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No Pets Found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        )}
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gradient-to-r from-purple-500 to-pink-500 py-16 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Why Choose PawsAdopt? ✨</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Healthy Pets</h3>
              <p className="text-gray-600">All pets are vaccinated, healthy-checked, and ready for their new homes</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Support</h3>
              <p className="text-gray-600">Lifetime support and guidance for you and your new furry friend</p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Trusted</h3>
              <p className="text-gray-600">1000+ happy families have found their perfect pets with us</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
