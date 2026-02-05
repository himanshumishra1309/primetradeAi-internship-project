import api from './api';

export const tweetService = {
  // Get all tweets with pagination
  getAllTweets: async (page = 1, limit = 10, sortBy = 'createdAt', order = 'desc') => {
    const response = await api.get('/tweets', {
      params: { page, limit, sortBy, order },
    });
    return response.data;
  },

  // Get single tweet by ID
  getTweetById: async (tweetId) => {
    const response = await api.get(`/tweets/${tweetId}`);
    return response.data;
  },

  // Get tweets by user ID
  getUserTweets: async (userId, page = 1, limit = 10) => {
    const response = await api.get(`/tweets/user/${userId}`, {
      params: { page, limit },
    });
    return response.data;
  },

  // Create a new tweet
  createTweet: async (content) => {
    const response = await api.post('/tweets', { content });
    return response.data;
  },

  // Update a tweet
  updateTweet: async (tweetId, content) => {
    const response = await api.patch(`/tweets/${tweetId}`, { content });
    return response.data;
  },

  // Delete a tweet
  deleteTweet: async (tweetId) => {
    const response = await api.delete(`/tweets/${tweetId}`);
    return response.data;
  },

  // Like/Unlike a tweet
  likeTweet: async (tweetId) => {
    const response = await api.post(`/tweets/${tweetId}/like`);
    return response.data;
  },
};

export default tweetService;
