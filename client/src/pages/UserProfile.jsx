function UserProfile() {
  return (
    <div className="bg-primary-jet min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
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
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Cover Image */}
        <div className="relative mb-20">
          <div className="h-48 bg-gradient-to-r from-primary-orange to-primary-moonstone rounded-xl"></div>
          
          {/* Profile Picture */}
          <div className="absolute -bottom-16 left-8">
            <div className="w-32 h-32 bg-primary-orange rounded-full border-4 border-gray-800 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">JD</span>
            </div>
          </div>

          {/* Edit Profile Button */}
          <button className="absolute bottom-4 right-4 bg-primary-orange hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition transform hover:scale-105 flex items-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
            </svg>
            <span>Edit Profile</span>
          </button>
        </div>

        {/* Profile Info */}
        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 shadow-lg mb-6">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-white mb-2">John Doe</h2>
            <p className="text-primary-moonstone text-lg mb-4">@johndoe</p>
            <p className="text-gray-300 text-base leading-relaxed">
              Full-stack developer passionate about building scalable web applications. 
              Love to share knowledge and learn from the community. 🚀💻
            </p>
          </div>

          {/* Profile Stats */}
          <div className="grid grid-cols-4 gap-4 pt-6 border-t border-gray-700">
            <div className="text-center">
              <p className="text-2xl font-bold text-white">42</p>
              <p className="text-gray-400 text-sm">Tweets</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary-orange">1.2K</p>
              <p className="text-gray-400 text-sm">Followers</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-primary-moonstone">340</p>
              <p className="text-gray-400 text-sm">Following</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-500">856</p>
              <p className="text-gray-400 text-sm">Likes</p>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 shadow-lg mb-6">
          <h3 className="text-xl font-bold text-white mb-4">Profile Details</h3>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span className="text-gray-300">john.doe@example.com</span>
            </div>

            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span className="text-gray-300">San Francisco, CA</span>
            </div>

            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
              </svg>
              <a href="#" className="text-primary-moonstone hover:text-blue-400 transition">johndoe.dev</a>
            </div>

            <div className="flex items-center space-x-3">
              <svg className="w-5 h-5 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <span className="text-gray-300">Joined January 2025</span>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 shadow-lg">
          <h3 className="text-xl font-bold text-white mb-6">Recent Activity</h3>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-4 pb-4 border-b border-gray-700">
              <div className="w-2 h-2 bg-primary-orange rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-gray-300">Posted a new tweet</p>
                <p className="text-gray-500 text-sm">2 hours ago</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 pb-4 border-b border-gray-700">
              <div className="w-2 h-2 bg-primary-moonstone rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-gray-300">Liked 3 tweets</p>
                <p className="text-gray-500 text-sm">5 hours ago</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 pb-4 border-b border-gray-700">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-gray-300">Updated profile information</p>
                <p className="text-gray-500 text-sm">1 day ago</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-gray-300">Started following 5 new users</p>
                <p className="text-gray-500 text-sm">2 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
