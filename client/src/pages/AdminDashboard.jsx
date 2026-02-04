function AdminDashboard() {
  return (
    <div className="bg-primary-jet min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary-orange">TweetHub</h1>
              <span className="ml-3 px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded-full">ADMIN</span>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search users, tweets..."
                  className="w-full px-4 py-2 pl-10 bg-primary-jet border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-orange"
                />
                <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-white font-medium">Admin User</p>
                <p className="text-gray-400 text-sm">@admin</p>
              </div>
              <button className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
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
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h2>
          <p className="text-primary-moonstone text-lg">Monitor and manage all platform activity</p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-400 text-sm font-medium">Total Users</p>
              <svg className="w-8 h-8 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
              </svg>
            </div>
            <p className="text-4xl font-bold text-white">1,284</p>
            <p className="text-green-500 text-sm mt-2">↑ 12% from last week</p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-400 text-sm font-medium">Total Tweets</p>
              <svg className="w-8 h-8 text-primary-moonstone" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
              </svg>
            </div>
            <p className="text-4xl font-bold text-white">8,542</p>
            <p className="text-green-500 text-sm mt-2">↑ 8% from last week</p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-400 text-sm font-medium">Active Today</p>
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <p className="text-4xl font-bold text-white">326</p>
            <p className="text-red-500 text-sm mt-2">↓ 3% from yesterday</p>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <p className="text-gray-400 text-sm font-medium">Reports</p>
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
              </svg>
            </div>
            <p className="text-4xl font-bold text-white">12</p>
            <p className="text-yellow-500 text-sm mt-2">Pending Review</p>
          </div>
        </div>

        {/* Filter and Sort */}
        <div className="bg-gray-800 rounded-xl p-4 mb-6 border border-gray-700 flex justify-between items-center">
          <div className="flex space-x-4">
            <select className="bg-primary-jet border border-gray-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange">
              <option>All Users</option>
              <option>Admins</option>
              <option>Regular Users</option>
            </select>
            <select className="bg-primary-jet border border-gray-600 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange">
              <option>Sort by: Latest</option>
              <option>Sort by: Oldest</option>
              <option>Sort by: Most Popular</option>
              <option>Sort by: Most Reported</option>
            </select>
          </div>
          <button className="bg-primary-orange hover:bg-orange-600 px-4 py-2 rounded-lg text-white font-medium transition flex items-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path>
            </svg>
            <span>Filter</span>
          </button>
        </div>

        {/* All Tweets Section */}
        <div className="space-y-4">
          {/* Tweet Card 1 */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg hover:border-gray-600 transition">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-moonstone rounded-full flex items-center justify-center text-white font-bold text-lg">
                  JD
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <p className="text-white font-semibold">John Doe</p>
                    <span className="px-2 py-0.5 bg-primary-moonstone text-white text-xs font-semibold rounded">USER</span>
                  </div>
                  <p className="text-gray-400 text-sm">@johndoe • 2 hours ago</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition" title="View Details">
                  <svg className="w-5 h-5 text-primary-moonstone" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </button>
                <button className="bg-gray-700 hover:bg-red-900 p-2 rounded-lg transition" title="Delete">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
                </button>
                <button className="bg-gray-700 hover:bg-yellow-900 p-2 rounded-lg transition" title="Flag">
                  <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path>
                  </svg>
                </button>
              </div>
            </div>
            <p className="text-white text-lg mb-4">Just deployed my first full-stack application! 🚀 The feeling is incredible. Thanks to everyone who helped me along the way!</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6 text-gray-400">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                  <span>24 likes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                  </svg>
                  <span>5 shares</span>
                </div>
              </div>
              <span className="text-xs text-gray-500">Tweet ID: #7823</span>
            </div>
          </div>

          {/* Tweet Card 2 */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg hover:border-gray-600 transition">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  AS
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <p className="text-white font-semibold">Alice Smith</p>
                    <span className="px-2 py-0.5 bg-primary-moonstone text-white text-xs font-semibold rounded">USER</span>
                  </div>
                  <p className="text-gray-400 text-sm">@alice_smith • 3 hours ago</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition" title="View Details">
                  <svg className="w-5 h-5 text-primary-moonstone" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </button>
                <button className="bg-gray-700 hover:bg-red-900 p-2 rounded-lg transition" title="Delete">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
                </button>
                <button className="bg-gray-700 hover:bg-yellow-900 p-2 rounded-lg transition" title="Flag">
                  <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"></path>
                  </svg>
                </button>
              </div>
            </div>
            <p className="text-white text-lg mb-4">The new update is amazing! Really loving the improved performance and UI changes. Great work team! 💯</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6 text-gray-400">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                  <span>18 likes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                  </svg>
                  <span>3 shares</span>
                </div>
              </div>
              <span className="text-xs text-gray-500">Tweet ID: #7822</span>
            </div>
          </div>

          {/* Tweet Card 3 - Reported */}
          <div className="bg-gray-800 rounded-xl p-6 border border-red-700 shadow-lg hover:border-red-600 transition">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  MB
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <p className="text-white font-semibold">Mike Brown</p>
                    <span className="px-2 py-0.5 bg-primary-moonstone text-white text-xs font-semibold rounded">USER</span>
                    <span className="px-2 py-0.5 bg-red-600 text-white text-xs font-semibold rounded animate-pulse">REPORTED</span>
                  </div>
                  <p className="text-gray-400 text-sm">@mikebrown • 5 hours ago</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition" title="View Details">
                  <svg className="w-5 h-5 text-primary-moonstone" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                </button>
                <button className="bg-gray-700 hover:bg-red-900 p-2 rounded-lg transition" title="Delete">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
                </button>
                <button className="bg-green-700 hover:bg-green-600 p-2 rounded-lg transition" title="Approve">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </button>
              </div>
            </div>
            <p className="text-white text-lg mb-4">This is a test tweet to demonstrate reported content. This content has been flagged by users for review.</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6 text-gray-400">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                  <span>3 likes</span>
                </div>
                <div className="flex items-center space-x-2 text-red-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                  </svg>
                  <span>4 reports</span>
                </div>
              </div>
              <span className="text-xs text-gray-500">Tweet ID: #7821</span>
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center space-x-2 mt-8">
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-700 transition">
            Previous
          </button>
          <button className="bg-primary-orange text-white px-4 py-2 rounded-lg transition">1</button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-700 transition">2</button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-700 transition">3</button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-700 transition">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
