function UserDashboard() {
  return (
    <div className="bg-primary-jet min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary-orange">TweetHub</h1>
              <span className="ml-3 px-3 py-1 bg-primary-moonstone text-white text-xs font-semibold rounded-full">USER</span>
            </div>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-white font-medium">John Doe</p>
                <p className="text-gray-400 text-sm">@johndoe</p>
              </div>
              <button className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </button>
              <button className="bg-primary-orange hover:bg-orange-600 px-4 py-2 rounded-lg text-white font-medium transition">
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-white mb-2">My Tweets</h2>
          <p className="text-primary-moonstone text-lg">Manage and share your thoughts</p>
        </div>

        {/* Create Tweet Card */}
        <div className="bg-gray-800 rounded-xl p-6 mb-6 border border-gray-700 shadow-lg">
          <h3 className="text-xl font-semibold text-white mb-4">Create a Tweet</h3>
          <form>
            <textarea 
              placeholder="What's on your mind?"
              rows="4"
              className="w-full px-4 py-3 bg-primary-jet border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent resize-none transition"
              maxLength="280"
            ></textarea>
            <div className="flex justify-between items-center mt-4">
              <span className="text-gray-400 text-sm">0 / 280</span>
              <button 
                type="submit"
                className="bg-primary-orange hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition transform hover:scale-105"
              >
                Tweet
              </button>
            </div>
          </form>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 text-center">
            <p className="text-3xl font-bold text-primary-orange">42</p>
            <p className="text-gray-400 mt-1">Total Tweets</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 text-center">
            <p className="text-3xl font-bold text-primary-moonstone">128</p>
            <p className="text-gray-400 mt-1">Total Likes</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 text-center">
            <p className="text-3xl font-bold text-green-500">8</p>
            <p className="text-gray-400 mt-1">Today</p>
          </div>
        </div>

        {/* Tweets List */}
        <div className="space-y-4">
          {/* Tweet Card 1 */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg hover:border-gray-600 transition">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-orange rounded-full flex items-center justify-center text-white font-bold text-lg">
                  JD
                </div>
                <div>
                  <p className="text-white font-semibold">John Doe</p>
                  <p className="text-gray-400 text-sm">@johndoe • 2 hours ago</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition" title="Edit">
                  <svg className="w-5 h-5 text-primary-moonstone" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                  </svg>
                </button>
                <button className="bg-gray-700 hover:bg-red-900 p-2 rounded-lg transition" title="Delete">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
                </button>
              </div>
            </div>
            <p className="text-white text-lg mb-4">Just deployed my first full-stack application! 🚀 The feeling is incredible. Thanks to everyone who helped me along the way!</p>
            <div className="flex items-center space-x-6 text-gray-400">
              <button className="flex items-center space-x-2 hover:text-red-500 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
                <span>24</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-primary-moonstone transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                </svg>
                <span>Share</span>
              </button>
            </div>
          </div>

          {/* Tweet Card 2 */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg hover:border-gray-600 transition">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-orange rounded-full flex items-center justify-center text-white font-bold text-lg">
                  JD
                </div>
                <div>
                  <p className="text-white font-semibold">John Doe</p>
                  <p className="text-gray-400 text-sm">@johndoe • 5 hours ago</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition" title="Edit">
                  <svg className="w-5 h-5 text-primary-moonstone" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                  </svg>
                </button>
                <button className="bg-gray-700 hover:bg-red-900 p-2 rounded-lg transition" title="Delete">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
                </button>
              </div>
            </div>
            <p className="text-white text-lg mb-4">Working on a new feature today. Can't wait to show you all what we've been building! Stay tuned 👀</p>
            <div className="flex items-center space-x-6 text-gray-400">
              <button className="flex items-center space-x-2 hover:text-red-500 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
                <span>15</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-primary-moonstone transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                </svg>
                <span>Share</span>
              </button>
            </div>
          </div>

          {/* Tweet Card 3 */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg hover:border-gray-600 transition">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-orange rounded-full flex items-center justify-center text-white font-bold text-lg">
                  JD
                </div>
                <div>
                  <p className="text-white font-semibold">John Doe</p>
                  <p className="text-gray-400 text-sm">@johndoe • 1 day ago</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition" title="Edit">
                  <svg className="w-5 h-5 text-primary-moonstone" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                  </svg>
                </button>
                <button className="bg-gray-700 hover:bg-red-900 p-2 rounded-lg transition" title="Delete">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
                </button>
              </div>
            </div>
            <p className="text-white text-lg mb-4">Learning something new every day makes the journey worthwhile. What are you learning today? 📚💡</p>
            <div className="flex items-center space-x-6 text-gray-400">
              <button className="flex items-center space-x-2 hover:text-red-500 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
                <span>32</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-primary-moonstone transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                </svg>
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
