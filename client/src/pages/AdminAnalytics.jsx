function AdminAnalytics() {
  return (
    <div className="bg-primary-jet min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-6">
              <h1 className="text-2xl font-bold text-primary-orange">TweetHub</h1>
              <span className="px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded-full">ADMIN</span>
              <div className="hidden md:flex space-x-4">
                <a href="/admin/dashboard" className="text-gray-400 hover:text-white transition">Dashboard</a>
                <a href="/admin/users" className="text-gray-400 hover:text-white transition">Users</a>
                <a href="/admin/analytics" className="text-white font-medium">Analytics</a>
              </div>
            </div>
            <button className="bg-primary-orange hover:bg-orange-600 px-4 py-2 rounded-lg text-white font-medium transition">
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-white mb-2">Platform Analytics</h2>
          <p className="text-primary-moonstone text-lg">Comprehensive insights and metrics</p>
        </div>

        {/* Time Range Selector */}
        <div className="bg-gray-800 rounded-xl p-4 mb-6 border border-gray-700 flex justify-between items-center">
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-primary-orange text-white rounded-lg font-medium transition">Today</button>
            <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition">7 Days</button>
            <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition">30 Days</button>
            <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition">90 Days</button>
          </div>
          <button className="bg-primary-moonstone hover:bg-blue-600 px-4 py-2 rounded-lg text-white font-medium transition flex items-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
            <span>Export Report</span>
          </button>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-400 text-sm font-medium">Total Users</p>
              <div className="w-12 h-12 bg-primary-orange bg-opacity-20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
            </div>
            <p className="text-4xl font-bold text-white mb-2">1,284</p>
            <div className="flex items-center space-x-2">
              <span className="text-green-500 text-sm font-medium">+12.5%</span>
              <span className="text-gray-400 text-sm">vs last period</span>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-400 text-sm font-medium">Total Tweets</p>
              <div className="w-12 h-12 bg-primary-moonstone bg-opacity-20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-moonstone" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                </svg>
              </div>
            </div>
            <p className="text-4xl font-bold text-white mb-2">8,542</p>
            <div className="flex items-center space-x-2">
              <span className="text-green-500 text-sm font-medium">+8.2%</span>
              <span className="text-gray-400 text-sm">vs last period</span>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-400 text-sm font-medium">Engagement Rate</p>
              <div className="w-12 h-12 bg-green-500 bg-opacity-20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
            </div>
            <p className="text-4xl font-bold text-white mb-2">67.8%</p>
            <div className="flex items-center space-x-2">
              <span className="text-green-500 text-sm font-medium">+5.3%</span>
              <span className="text-gray-400 text-sm">vs last period</span>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-400 text-sm font-medium">Active Sessions</p>
              <div className="w-12 h-12 bg-purple-500 bg-opacity-20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
            </div>
            <p className="text-4xl font-bold text-white mb-2">326</p>
            <div className="flex items-center space-x-2">
              <span className="text-red-500 text-sm font-medium">-2.1%</span>
              <span className="text-gray-400 text-sm">vs last period</span>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* User Growth Chart Placeholder */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg">
            <h3 className="text-xl font-bold text-white mb-4">User Growth</h3>
            <div className="h-64 bg-primary-jet rounded-lg flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-primary-orange mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
                <p className="text-gray-400">Chart visualization placeholder</p>
              </div>
            </div>
          </div>

          {/* Tweet Activity Chart Placeholder */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg">
            <h3 className="text-xl font-bold text-white mb-4">Tweet Activity</h3>
            <div className="h-64 bg-primary-jet rounded-lg flex items-center justify-center">
              <div className="text-center">
                <svg className="w-16 h-16 text-primary-moonstone mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                </svg>
                <p className="text-gray-400">Chart visualization placeholder</p>
              </div>
            </div>
          </div>
        </div>

        {/* Top Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Top Users */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg">
            <h3 className="text-xl font-bold text-white mb-4">Top Contributors</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-primary-jet rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-orange rounded-full flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div>
                    <p className="text-white font-medium">@johndoe</p>
                    <p className="text-gray-400 text-sm">124 tweets</p>
                  </div>
                </div>
                <span className="text-primary-orange font-bold">+28%</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-primary-jet rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-moonstone rounded-full flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div>
                    <p className="text-white font-medium">@alice_smith</p>
                    <p className="text-gray-400 text-sm">98 tweets</p>
                  </div>
                </div>
                <span className="text-primary-moonstone font-bold">+22%</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-primary-jet rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div>
                    <p className="text-white font-medium">@emmaj</p>
                    <p className="text-gray-400 text-sm">87 tweets</p>
                  </div>
                </div>
                <span className="text-green-500 font-bold">+19%</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-primary-jet rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <div>
                    <p className="text-white font-medium">@davidw</p>
                    <p className="text-gray-400 text-sm">76 tweets</p>
                  </div>
                </div>
                <span className="text-purple-500 font-bold">+15%</span>
              </div>
            </div>
          </div>

          {/* Top Hashtags */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg">
            <h3 className="text-xl font-bold text-white mb-4">Trending Topics</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-primary-jet rounded-lg">
                <div>
                  <p className="text-primary-orange font-bold text-lg">#WebDevelopment</p>
                  <p className="text-gray-400 text-sm">2,450 mentions</p>
                </div>
                <svg className="w-6 h-6 text-primary-orange" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>

              <div className="flex items-center justify-between p-4 bg-primary-jet rounded-lg">
                <div>
                  <p className="text-primary-moonstone font-bold text-lg">#JavaScript</p>
                  <p className="text-gray-400 text-sm">1,890 mentions</p>
                </div>
                <svg className="w-6 h-6 text-primary-moonstone" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>

              <div className="flex items-center justify-between p-4 bg-primary-jet rounded-lg">
                <div>
                  <p className="text-green-500 font-bold text-lg">#TechNews</p>
                  <p className="text-gray-400 text-sm">1,567 mentions</p>
                </div>
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>

              <div className="flex items-center justify-between p-4 bg-primary-jet rounded-lg">
                <div>
                  <p className="text-purple-500 font-bold text-lg">#CodeNewbie</p>
                  <p className="text-gray-400 text-sm">1,234 mentions</p>
                </div>
                <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* System Health */}
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg">
          <h3 className="text-xl font-bold text-white mb-6">System Health</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-gray-400 text-sm">Server Uptime</p>
                <span className="text-green-500 font-bold">99.9%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{width: '99.9%'}}></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-gray-400 text-sm">API Response Time</p>
                <span className="text-primary-moonstone font-bold">120ms</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-primary-moonstone h-2 rounded-full" style={{width: '85%'}}></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <p className="text-gray-400 text-sm">Database Load</p>
                <span className="text-primary-orange font-bold">45%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-primary-orange h-2 rounded-full" style={{width: '45%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminAnalytics;
