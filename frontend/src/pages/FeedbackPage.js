import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FeedbackPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newReview, setNewReview] = useState({
    name: '',
    pet: '',
    rating: 5,
    feedback: '',
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/api/feedback');
      setReviews(response.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching feedback:', err);
      setError('Failed to load feedback. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleAddReview = async (e) => {
    e.preventDefault();
    if (newReview.name && newReview.pet && newReview.feedback) {
      const feedbackData = {
        name: newReview.name,
        petName: newReview.pet,
        rating: newReview.rating,
        feedbackText: newReview.feedback,
        approved: false // Will need admin approval
      };

      try {
        await axios.post('/api/feedback', feedbackData);
        alert('Thank you for your feedback! Your review will be displayed after approval. 🙏');
        setNewReview({ name: '', pet: '', rating: 5, feedback: '' });
        // Optionally refetch to show pending reviews, but since approved=false, they won't show
      } catch (err) {
        console.error('Error submitting feedback:', err);
        alert('Failed to submit feedback. Please try again.');
      }
    }
  };

  const averageRating = reviews.length > 0 ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 pt-10 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 fade-in">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400 mb-4">
            💬 Happy Customer Stories
          </h1>
          <p className="text-xl text-gray-700">
            Hear from families who found their perfect pet companions through PawsAdopt
          </p>
        </div>

        {loading ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4 animate-spin">🐾</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">Loading Reviews...</h3>
            <p className="text-gray-600">Fetching customer feedback</p>
          </div>
        ) : error ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">❌</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">Error Loading Reviews</h3>
            <p className="text-gray-600 mb-4">{error}</p>
            <button 
              onClick={fetchFeedback}
              className="bg-gradient-to-r from-orange-400 to-pink-400 text-white px-6 py-2 rounded-lg font-bold hover:from-orange-500 hover:to-pink-500 transition"
            >
              Try Again
            </button>
          </div>
        ) : (
          <>
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-lg p-8 shadow-lg text-center">
                <p className="text-gray-600 text-sm mb-2">Total Reviews</p>
                <p className="text-4xl font-bold text-orange-500">{reviews.length}</p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-lg text-center">
                <p className="text-gray-600 text-sm mb-2">Average Rating</p>
                <p className="text-4xl font-bold text-yellow-500">⭐ {averageRating}</p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-lg text-center">
                <p className="text-gray-600 text-sm mb-2">Happy Families</p>
                <p className="text-4xl font-bold text-pink-500">1000+</p>
              </div>
            </div>

            {/* Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {reviews.map((review, index) => (
                <div key={review.id} className="bg-white rounded-lg p-6 shadow-lg fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-4xl">😊</div>
                      <div>
                        <h3 className="font-bold text-gray-800">{review.name}</h3>
                        <p className="text-sm text-gray-600">Adopted {review.petName}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex text-yellow-400 mb-1">
                        {'⭐'.repeat(review.rating)}
                      </div>
                      <p className="text-sm text-gray-500">{new Date().toLocaleDateString()}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{review.feedbackText}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Add Review Section */}
        <div className="bg-white rounded-lg p-8 shadow-lg mb-12 fade-in">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">✍️ Share Your Story</h2>
          <form onSubmit={handleAddReview} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-bold mb-2">Your Name *</label>
                <input
                  type="text"
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-400"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Pet Name *</label>
                <input
                  type="text"
                  value={newReview.pet}
                  onChange={(e) => setNewReview({ ...newReview, pet: e.target.value })}
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-400"
                  placeholder="Your pet's name"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-bold mb-2">Rating *</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map(star => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setNewReview({ ...newReview, rating: star })}
                    className={`text-3xl transition transform hover:scale-125 ${
                      star <= newReview.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  >
                    ⭐
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-bold mb-2">Your Feedback *</label>
              <textarea
                value={newReview.feedback}
                onChange={(e) => setNewReview({ ...newReview, feedback: e.target.value })}
                rows="5"
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-400"
                placeholder="Tell us about your experience with your new pet..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-400 to-pink-400 text-white py-3 rounded-lg font-bold hover:from-orange-500 hover:to-pink-500 transition transform hover:scale-105 shadow-lg"
            >
              📤 Submit Review
            </button>
          </form>
        </div>

        {/* Reviews List */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-8">📖 Customer Reviews</h2>
          <div className="space-y-6">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {review.emoji} {review.name}
                    </h3>
                    <p className="text-gray-600">
                      🐾 Adopted: <span className="font-semibold">{review.pet}</span>
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl mb-1">
                      {'⭐'.repeat(review.rating)}
                    </div>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">"{review.feedback}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-8 text-center text-white shadow-lg">
          <h3 className="text-3xl font-bold mb-4">Ready to Write Your Own Story? 💕</h3>
          <p className="text-lg mb-6">Start your pet adoption journey today and join our family of happy pet lovers!</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-white text-purple-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition transform hover:scale-105"
          >
            Browse Pets Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
