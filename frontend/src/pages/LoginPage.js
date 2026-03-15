import React, { useState } from 'react';

const LoginPage = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      onLogin({ name: name || 'Pet Lover', email });
    } else {
      if (name && email && password) {
        onLogin({ name, email });
      }
    }
    setEmail('');
    setPassword('');
    setName('');
  };

  const animalEmojis = ['🐕', '🐱', '🐰', '🦜', '🐢', '🦎', '🐿️'];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {animalEmojis.map((emoji, i) => (
          <div
            key={i}
            className="absolute text-6xl opacity-20 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `bounce-subtle ${3 + Math.random() * 2}s infinite`,
              animationDelay: `${i * 0.2}s`
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      {/* Login Container */}
      <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 md:p-12 w-full max-w-md fade-in">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4 animate-bounce">
            {isLogin ? '🐾' : '🎉'}
          </div>
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400 mb-2">
            PawsAdopt
          </h1>
          <p className="text-gray-600">Find your perfect pet companion</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name Input (for signup) */}
          {!isLogin && (
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Full Name 👤</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-400 transition"
                required={!isLogin}
              />
            </div>
          )}

          {/* Email Input */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email 📧</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-400 transition"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Password 🔒</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-400 transition"
              required={!isLogin}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-400 via-pink-400 to-red-400 text-white font-bold py-3 rounded-lg hover:from-orange-500 hover:via-pink-500 hover:to-red-500 transition transform hover:scale-105 shadow-lg"
          >
            {isLogin ? '🚀 Login' : '✨ Create Account'}
          </button>
        </form>

        {/* Toggle */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 mb-2">
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setEmail('');
                setPassword('');
                setName('');
              }}
              className="text-orange-500 font-bold hover:text-pink-500 transition"
            >
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </p>
        </div>

        {/* Demo Info */}
        <div className="mt-6 p-3 bg-yellow-50 rounded-lg border-2 border-yellow-200">
          <p className="text-xs text-gray-700 text-center">
            💡 Demo: Use any email to login
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
