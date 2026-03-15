import React from 'react';
import { useNavigate } from 'react-router-dom';

const PetCard = ({ pet }) => {
  const navigate = useNavigate();

  const getPetEmoji = (type) => {
    const emojiMap = {
      'dog': '🐕',
      'cat': '🐱',
      'rabbit': '🐰',
      'parrot': '🦜',
      'snake': '🐍',
      'lizard': '🦎',
      'turtle': '🐢',
      'hamster': '🐹',
      'bird': '🐦'
    };
    return emojiMap[type.toLowerCase()] || '🐾';
  };

  return (
    <div
      onClick={() => navigate(`/pet/${pet.id}`)}
      className="bg-white rounded-dynamic shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 cursor-pointer overflow-hidden fade-in"
    >
      <div className="relative h-64 bg-gradient-to-br from-yellow-200 to-orange-200 flex items-center justify-center">
        <div className="text-9xl animate-bounce-subtle">{getPetEmoji(pet.type)}</div>
        <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
          {pet.age}y
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{pet.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{pet.type.charAt(0).toUpperCase() + pet.type.slice(1)}</p>
        <div className="flex justify-between items-center mb-3">
          <span className="text-yellow-500 font-bold">⭐ {pet.rating}/5</span>
          <span className="text-green-600 font-semibold">${pet.adoptionFee}</span>
        </div>
        <p className="text-gray-700 text-sm mb-4 line-clamp-2">{pet.description}</p>
        <button className="w-full bg-gradient-to-r from-orange-400 to-pink-400 text-white py-2 rounded-lg font-bold hover:from-orange-500 hover:to-pink-500 transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default PetCard;
