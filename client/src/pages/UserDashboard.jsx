import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import tweetService from '../services/tweetService';
import ConfirmDialog from '../components/shared/ConfirmDialog';
import EditTweetModal from '../components/shared/EditTweetModal';

function UserDashboard() {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [newTweet, setNewTweet] = useState('');
  const [charCount, setCharCount] = useState(0);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [deleteTweetId, setDeleteTweetId] = useState(null);
  const [editTweet, setEditTweet] = useState(null);
  const { user, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated && user?._id) {
      fetchUserTweets();
    }
  }, [isAuthenticated, user]);

  const fetchUserTweets = async () => {
    try {
      setLoading(true);
      const response = await tweetService.getUserTweets(user._id, 1, 50);
      setTweets(response.data.tweets || []);
      setError('');
    } catch (err) {
      setError('Failed to load your tweets');
      console.error('Error fetching user tweets:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTweet = async (e) => {
    e.preventDefault();
    if (!newTweet.trim() || newTweet.length > 280) return;

    try {
      await tweetService.createTweet(newTweet);
      setNewTweet('');
      setCharCount(0);
      fetchUserTweets();
    } catch (err) {
      setError('Failed to create tweet');
      console.error('Error creating tweet:', err);
    }
  };

  const handleTweetChange = (e) => {
    const value = e.target.value;
    if (value.length <= 280) {
      setNewTweet(value);
      setCharCount(value.length);
    }
  };

  const handleDelete = (tweetId) => {
    setDeleteTweetId(tweetId);
    setShowDeleteConfirm(true);
  };

  const confirmDelete = async () => {
    try {
      await tweetService.deleteTweet(deleteTweetId);
      setError('');
      await fetchUserTweets();
    } catch (err) {
      setError('Failed to delete tweet');
      console.error('Error deleting tweet:', err);
    }
  };

  const handleEdit = (tweet) => {
    setEditTweet(tweet);
    setShowEditModal(true);
  };

  const handleSaveEdit = async (content) => {
    try {
      await tweetService.updateTweet(editTweet._id, content);
      fetchUserTweets();
    } catch (err) {
      setError('Failed to update tweet');
      console.error('Error updating tweet:', err);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  if (!isAuthenticated) {
    return (
      <div className="bg-primary-jet min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-white text-xl mb-4">Please login to view your dashboard</p>
          <a href="/login" className="px-6 py-2 bg-primary-orange hover:bg-orange-600 text-white font-semibold rounded-lg transition inline-block">
            Login
          </a>
        </div>
      </div>
    );
  }

  const totalLikes = tweets.reduce((sum, tweet) => sum + (tweet.likes?.length || 0), 0);
  const todayTweets = tweets.filter(tweet => {
    const tweetDate = new Date(tweet.createdAt);
    const today = new Date();
    return tweetDate.toDateString() === today.toDateString();
  }).length;

  return (
    <div className="bg-primary-jet min-h-screen">

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Create Tweet Card */}
        <div className="bg-gray-800 rounded-xl p-6 mb-6 border border-gray-700 shadow-lg">
          <h3 className="text-xl font-semibold text-white mb-4">Create a Tweet</h3>
          {error && (
            <div className="mb-4 p-3 bg-red-900 border border-red-700 rounded-lg text-red-200 text-sm">
              {error}
            </div>
          )}
          <form onSubmit={handleCreateTweet}>
            <textarea 
              value={newTweet}
              onChange={handleTweetChange}
              placeholder="What's on your mind?"
              rows="4"
              className="w-full px-4 py-3 bg-primary-jet border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent resize-none transition"
            ></textarea>
            <div className="flex justify-between items-center mt-4">
              <span className={`text-sm ${charCount > 280 ? 'text-red-500' : charCount > 260 ? 'text-yellow-500' : 'text-gray-400'}`}>
                {charCount} / 280
              </span>
              <button 
                type="submit"
                disabled={!newTweet.trim() || charCount > 280}
                className="bg-primary-orange hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Tweet
              </button>
            </div>
          </form>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 text-center">
            <p className="text-3xl font-bold text-primary-orange">{tweets.length}</p>
            <p className="text-gray-400 mt-1">Total Tweets</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 text-center">
            <p className="text-3xl font-bold text-primary-moonstone">{totalLikes}</p>
            <p className="text-gray-400 mt-1">Total Likes</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 text-center">
            <p className="text-3xl font-bold text-green-500">{todayTweets}</p>
            <p className="text-gray-400 mt-1">Today</p>
          </div>
        </div>

        {/* Tweets List */}
        <div className="space-y-4">
          {loading ? (
            <div className="bg-gray-800 rounded-xl p-12 border border-gray-700 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-orange mx-auto"></div>
              <p className="text-gray-400 mt-4">Loading your tweets...</p>
            </div>
          ) : tweets.length === 0 ? (
            <div className="bg-gray-800 rounded-xl p-12 border border-gray-700 text-center">
              <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
              <h3 className="text-xl font-bold text-white mb-2">No tweets yet</h3>
              <p className="text-gray-400">Start sharing your thoughts with the world!</p>
            </div>
          ) : (
            tweets.map((tweet) => (
              <div key={tweet._id} className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg hover:border-gray-600 transition">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary-orange rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {user?.f_name?.[0]?.toUpperCase() || 'U'}
                    </div>
                    <div>
                      <p className="text-white font-semibold">{user?.f_name} {user?.l_name}</p>
                      <p className="text-gray-400 text-sm">@{user?.username} • {formatDate(tweet.createdAt)}</p>
                      {tweet.isEdited && (
                        <span className="text-gray-500 text-xs italic">(edited)</span>
                      )}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => handleEdit(tweet)}
                      className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition" 
                      title="Edit"
                    >
                      <svg className="w-5 h-5 text-primary-moonstone" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                      </svg>
                    </button>
                    <button 
                      onClick={() => handleDelete(tweet._id)}
                      className="bg-gray-700 hover:bg-red-900 p-2 rounded-lg transition" 
                      title="Delete"
                    >
                      <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <p className="text-white text-lg mb-4">{tweet.content}</p>
                <div className="flex items-center space-x-6 text-gray-400">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                    <span>{tweet.likes?.length || 0}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Modals */}
      <ConfirmDialog
        isOpen={showDeleteConfirm}
        onClose={() => setShowDeleteConfirm(false)}
        onConfirm={confirmDelete}
        title="Delete Tweet"
        message="Are you sure you want to delete this tweet? This will permanently remove it from your profile."
        confirmText="Delete"
        cancelText="Cancel"
        type="danger"
      />

      <EditTweetModal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        onSave={handleSaveEdit}
        tweet={editTweet}
      />
    </div>
  );
}

export default UserDashboard;
