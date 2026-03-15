import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const PetDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAdoptForm, setShowAdoptForm] = useState(false);

  const fetchPet = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/pets/${id}`);
      setPet(response.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching pet:', err);
      setError('Failed to load pet details. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchPet();
  }, [fetchPet]);

  const handleAdoptClick = () => {
    setShowAdoptForm(!showAdoptForm);
  };

  const handleAdoptSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const adoptionData = {
      petId: pet.id,
      userId: 1, // For now, using a default user ID
      reason: formData.get('message') || 'I would love to adopt this pet!',
      adoptionFee: pet.adoptionFee
    };

    try {
      await axios.post('/api/adoptions', adoptionData);
      alert(`Congratulations! Your adoption request for ${pet.name} has been submitted! 🎉`);
      setShowAdoptForm(false);
    } catch (err) {
      console.error('Error submitting adoption request:', err);
      alert('Failed to submit adoption request. Please try again.');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 pt-10 pb-16 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-spin">🐾</div>
          <h3 className="text-2xl font-bold text-gray-700 mb-2">Loading Pet Details...</h3>
        </div>
      </div>
    );
  }

  if (error || !pet) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 pt-10 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <button
            onClick={() => navigate('/')}
            className="mb-8 bg-gradient-to-r from-orange-400 to-pink-400 text-white px-6 py-2 rounded-lg font-bold hover:from-orange-500 hover:to-pink-500 transition transform hover:scale-105"
          >
            ← Back to Pets
          </button>
          <div className="text-6xl mb-4">❌</div>
          <h3 className="text-2xl font-bold text-gray-700 mb-2">Pet Not Found</h3>
          <p className="text-gray-600">{error || 'The pet you are looking for does not exist.'}</p>
        </div>
      </div>
    );
  }

  const getEmoji = (type) => {
    const emojiMap = {
      Dog: '🐕',
      Cat: '🐱',
      Parrot: '🦜',
      Rabbit: '🐰',
      Lizard: '🦎',
      Turtle: '🐢'
    };
    return emojiMap[type] || '🐾';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 pt-10 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="mb-8 bg-gradient-to-r from-orange-400 to-pink-400 text-white px-6 py-2 rounded-lg font-bold hover:from-orange-500 hover:to-pink-500 transition transform hover:scale-105"
        >
          ← Back to Pets
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 fade-in">
          {/* Pet Image Section */}
          <div className="flex flex-col justify-center">
            <div className="bg-gradient-to-br from-yellow-200 to-orange-200 rounded-dynamic p-12 text-center shadow-xl">
              <div className="text-9xl mb-8 animate-bounce-subtle">{getEmoji(pet.type)}</div>
              <div className="bg-white bg-opacity-70 rounded-lg p-6">
                <p className="text-gray-700 font-semibold">Click to adopt this amazing pet!</p>
              </div>
            </div>

            {/* Key Info */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white rounded-lg p-4 shadow-lg text-center">
                <p className="text-gray-600 text-sm">Age</p>
                <p className="text-2xl font-bold text-orange-500">{pet.age} years</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-lg text-center">
                <p className="text-gray-600 text-sm">Weight</p>
                <p className="text-2xl font-bold text-pink-500">{pet.weight} kg</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-lg text-center">
                <p className="text-gray-600 text-sm">Color</p>
                <p className="text-2xl font-bold text-purple-500">{pet.color}</p>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-lg text-center">
                <p className="text-gray-600 text-sm">Rating</p>
                <p className="text-2xl font-bold text-yellow-500">⭐ {pet.rating}/5</p>
              </div>
            </div>
          </div>

          {/* Pet Details Section */}
          <div>
            <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400 mb-2">
              {pet.name}
            </h1>
            <p className="text-2xl text-gray-600 mb-4">{pet.type} - {pet.breed}</p>

            {/* Description */}
            <div className="bg-white rounded-lg p-6 shadow-lg mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-3">📖 About {pet.name}</h2>
              <p className="text-gray-700 leading-relaxed">{pet.description}</p>
            </div>

            {/* Personality */}
            <div className="bg-white rounded-lg p-6 shadow-lg mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-3">💫 Personality Traits</h2>
              <div className="flex flex-wrap gap-3">
                {pet.personality.split(', ').map((trait, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-orange-200 to-pink-200 text-gray-700 px-4 py-2 rounded-full font-semibold"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            {/* Health Info */}
            <div className="bg-white rounded-lg p-6 shadow-lg mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-3">🏥 Health Information</h2>
              <p className="text-gray-700">Vaccinated and healthy</p>
            </div>

            {/* Adoption Fee */}
            <div className="bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg p-6 shadow-lg mb-6 text-white">
              <p className="text-lg opacity-90">Adoption Fee</p>
              <p className="text-4xl font-bold">${pet.adoptionFee}</p>
            </div>

            {/* Adopt Button */}
            <button
              onClick={handleAdoptClick}
              className="w-full bg-gradient-to-r from-orange-400 via-pink-400 to-red-400 text-white py-4 rounded-lg font-bold text-lg hover:from-orange-500 hover:via-pink-500 hover:to-red-500 transition transform hover:scale-105 shadow-lg"
            >
              🎉 Start Adoption Process
            </button>
          </div>
        </div>

        {/* Adoption Form */}
        {showAdoptForm && (
          <div className="mt-12 bg-white rounded-lg p-8 shadow-2xl fade-in">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">🐾 Adoption Application</h2>
            <form onSubmit={handleAdoptSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Full Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-400"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Phone *</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-400"
                    placeholder="Your phone"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Address *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-400"
                    placeholder="Your address"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">Why do you want to adopt {pet.name}? *</label>
                <textarea
                  required
                  rows="4"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-400"
                  placeholder="Tell us about yourself and why you're a great match..."
                ></textarea>
              </div>

              <div>
                <label className="flex items-center space-x-3">
                  <input type="checkbox" required className="w-5 h-5" />
                  <span className="text-gray-700">I agree to provide {pet.name} with proper care and love 💕</span>
                </label>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-green-500 text-white py-3 rounded-lg font-bold hover:bg-green-600 transition"
                >
                  ✅ Submit Application
                </button>
                <button
                  type="button"
                  onClick={() => setShowAdoptForm(false)}
                  className="flex-1 bg-gray-400 text-white py-3 rounded-lg font-bold hover:bg-gray-500 transition"
                >
                  ❌ Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default PetDetailsPage;
