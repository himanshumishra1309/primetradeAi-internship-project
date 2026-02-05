function TweetDetail() {
  return (
    <div className="bg-primary-jet min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button className="text-gray-400 hover:text-white mr-4 transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <h1 className="text-2xl font-bold text-primary-orange">TweetHub</h1>
              <span className="ml-3 px-3 py-1 bg-primary-moonstone text-white text-xs font-semibold rounded-full">USER</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/dashboard" className="text-gray-400 hover:text-white transition">Dashboard</a>
              <button className="bg-primary-orange hover:bg-orange-600 px-4 py-2 rounded-lg text-white font-medium transition">
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Tweet Card */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg mb-6">
          {/* User Info */}
          <div className="flex items-start space-x-4 mb-4">
            <div className="w-14 h-14 bg-primary-orange rounded-full flex items-center justify-center text-white font-bold text-xl shrink-0">
              JD
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-1">
                <h3 className="text-white font-bold text-lg">John Doe</h3>
                <span className="text-primary-moonstone text-sm">@johndoe</span>
                <span className="text-gray-500 text-sm">• 2 hours ago</span>
              </div>
              <p className="text-gray-300 text-base leading-relaxed">
                Just finished implementing a scalable REST API with JWT authentication and role-based access control! 
                The architecture feels solid and ready for production. 🚀
                
                Key features:
                • Token-based auth
                • RBAC with middleware
                • MongoDB integration
                • Full CRUD operations
                
                #WebDevelopment #API #NodeJS #MongoDB
              </p>
            </div>
          </div>

          {/* Tweet Stats */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-700 mb-4">
            <div className="flex space-x-6">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
                <span className="text-gray-400 font-medium">234 Likes</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
                <span className="text-gray-400 font-medium">48 Comments</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                </svg>
                <span className="text-gray-400 font-medium">12 Shares</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 pt-4 border-t border-gray-700">
            <button className="flex-1 bg-primary-orange hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
              <span>Like</span>
            </button>
            <button className="flex-1 bg-primary-moonstone hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
              <span>Comment</span>
            </button>
            <button className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
              </svg>
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* Add Comment */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg mb-6">
          <h3 className="text-white font-bold text-lg mb-4">Add a Comment</h3>
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-primary-moonstone rounded-full flex items-center justify-center text-white font-bold shrink-0">
              U
            </div>
            <div className="flex-1">
              <textarea 
                rows="3"
                placeholder="Write your comment..."
                className="w-full px-4 py-3 bg-primary-jet border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-orange resize-none"
              ></textarea>
              <div className="flex justify-end mt-3">
                <button className="bg-primary-orange hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition">
                  Post Comment
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg">
          <h3 className="text-white font-bold text-lg mb-6">Comments (48)</h3>
          
          {/* Comment 1 */}
          <div className="pb-6 mb-6 border-b border-gray-700">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold shrink-0">
                AS
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className="text-white font-semibold">Alice Smith</h4>
                  <span className="text-primary-moonstone text-sm">@alice_smith</span>
                  <span className="text-gray-500 text-sm">• 1 hour ago</span>
                </div>
                <p className="text-gray-300 mb-3">
                  This looks amazing! I've been working on something similar. How did you handle token refresh? 
                  Would love to hear more about your implementation! 🤔
                </p>
                <div className="flex items-center space-x-4">
                  <button className="text-gray-400 hover:text-primary-orange transition flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                    <span className="text-sm">12</span>
                  </button>
                  <button className="text-gray-400 hover:text-primary-moonstone transition text-sm">
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Comment 2 */}
          <div className="pb-6 mb-6 border-b border-gray-700">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold shrink-0">
                MB
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className="text-white font-semibold">Mike Brown</h4>
                  <span className="text-primary-moonstone text-sm">@mikebrown</span>
                  <span className="text-gray-500 text-sm">• 45 min ago</span>
                </div>
                <p className="text-gray-300 mb-3">
                  Great work! Did you implement rate limiting? That's crucial for production APIs.
                </p>
                <div className="flex items-center space-x-4">
                  <button className="text-gray-400 hover:text-primary-orange transition flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                    <span className="text-sm">8</span>
                  </button>
                  <button className="text-gray-400 hover:text-primary-moonstone transition text-sm">
                    Reply
                  </button>
                </div>
              </div>
            </div>

            {/* Nested Reply */}
            <div className="ml-14 mt-4 flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary-orange rounded-full flex items-center justify-center text-white font-bold shrink-0">
                JD
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className="text-white font-semibold">John Doe</h4>
                  <span className="text-primary-moonstone text-sm">@johndoe</span>
                  <span className="text-gray-500 text-sm">• 30 min ago</span>
                </div>
                <p className="text-gray-300 mb-3">
                  Yes! Using express-rate-limit middleware with Redis for distributed rate limiting. Works great! 👍
                </p>
                <div className="flex items-center space-x-4">
                  <button className="text-gray-400 hover:text-primary-orange transition flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                    <span className="text-sm">15</span>
                  </button>
                  <button className="text-gray-400 hover:text-primary-moonstone transition text-sm">
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Comment 3 */}
          <div className="pb-6 mb-6 border-b border-gray-700">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center text-white font-bold shrink-0">
                EJ
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className="text-white font-semibold">Emma Johnson</h4>
                  <span className="text-primary-moonstone text-sm">@emmaj</span>
                  <span className="text-gray-500 text-sm">• 20 min ago</span>
                </div>
                <p className="text-gray-300 mb-3">
                  Congratulations! 🎉 Would you consider open-sourcing this? I'd love to learn from your code!
                </p>
                <div className="flex items-center space-x-4">
                  <button className="text-gray-400 hover:text-primary-orange transition flex items-center space-x-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                    <span className="text-sm">25</span>
                  </button>
                  <button className="text-gray-400 hover:text-primary-moonstone transition text-sm">
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Load More Button */}
          <div className="text-center">
            <button className="text-primary-moonstone hover:text-blue-400 font-medium transition">
              Load More Comments (45 remaining)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TweetDetail;
