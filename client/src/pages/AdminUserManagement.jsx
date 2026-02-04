function AdminUserManagement() {
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
                <a href="/admin/users" className="text-white font-medium">Users</a>
                <a href="/admin/analytics" className="text-gray-400 hover:text-white transition">Analytics</a>
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
          <h2 className="text-4xl font-bold text-white mb-2">User Management</h2>
          <p className="text-primary-moonstone text-lg">Manage all users on the platform</p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg">
            <p className="text-gray-400 text-sm font-medium mb-2">Total Users</p>
            <p className="text-3xl font-bold text-white">1,284</p>
            <p className="text-green-500 text-sm mt-2">↑ 12% this month</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg">
            <p className="text-gray-400 text-sm font-medium mb-2">Active Users</p>
            <p className="text-3xl font-bold text-primary-moonstone">986</p>
            <p className="text-green-500 text-sm mt-2">↑ 8% this month</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg">
            <p className="text-gray-400 text-sm font-medium mb-2">Banned Users</p>
            <p className="text-3xl font-bold text-red-500">12</p>
            <p className="text-gray-400 text-sm mt-2">Needs review</p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg">
            <p className="text-gray-400 text-sm font-medium mb-2">Admins</p>
            <p className="text-3xl font-bold text-primary-orange">5</p>
            <p className="text-gray-400 text-sm mt-2">Privileged users</p>
          </div>
        </div>

        {/* Filters and Actions */}
        <div className="bg-gray-800 rounded-xl p-4 mb-6 border border-gray-700 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex flex-wrap gap-4">
            <input 
              type="text"
              placeholder="Search users..."
              className="px-4 py-2 bg-primary-jet border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-orange"
            />
            <select className="px-4 py-2 bg-primary-jet border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange">
              <option>All Users</option>
              <option>Active</option>
              <option>Inactive</option>
              <option>Banned</option>
              <option>Admins</option>
            </select>
            <select className="px-4 py-2 bg-primary-jet border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange">
              <option>Sort by: Newest</option>
              <option>Sort by: Oldest</option>
              <option>Sort by: Most Active</option>
              <option>Sort by: Username</option>
            </select>
          </div>
          <button className="bg-primary-orange hover:bg-orange-600 px-4 py-2 rounded-lg text-white font-medium transition flex items-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
            </svg>
            <span>Add User</span>
          </button>
        </div>

        {/* Users Table */}
        <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">User</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Role</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Joined</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {/* User Row 1 */}
                <tr className="hover:bg-gray-750 transition">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary-orange rounded-full flex items-center justify-center text-white font-bold">
                        JD
                      </div>
                      <div>
                        <p className="text-white font-medium">John Doe</p>
                        <p className="text-gray-400 text-sm">@johndoe</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-300">john.doe@example.com</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-primary-moonstone text-white text-xs font-semibold rounded-full">USER</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-green-900 text-green-400 text-xs font-semibold rounded-full">Active</span>
                  </td>
                  <td className="px-6 py-4 text-gray-300">Jan 15, 2026</td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition" title="View">
                        <svg className="w-4 h-4 text-primary-moonstone" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                      </button>
                      <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition" title="Edit">
                        <svg className="w-4 h-4 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                        </svg>
                      </button>
                      <button className="p-2 bg-gray-700 hover:bg-red-900 rounded-lg transition" title="Ban">
                        <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>

                {/* User Row 2 */}
                <tr className="hover:bg-gray-750 transition">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                        AS
                      </div>
                      <div>
                        <p className="text-white font-medium">Alice Smith</p>
                        <p className="text-gray-400 text-sm">@alice_smith</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-300">alice.smith@example.com</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-red-600 text-white text-xs font-semibold rounded-full">ADMIN</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-green-900 text-green-400 text-xs font-semibold rounded-full">Active</span>
                  </td>
                  <td className="px-6 py-4 text-gray-300">Dec 10, 2025</td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition" title="View">
                        <svg className="w-4 h-4 text-primary-moonstone" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                      </button>
                      <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition" title="Edit">
                        <svg className="w-4 h-4 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                        </svg>
                      </button>
                      <button className="p-2 bg-gray-700 hover:bg-yellow-900 rounded-lg transition" title="Demote">
                        <svg className="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>

                {/* User Row 3 - Banned */}
                <tr className="hover:bg-gray-750 transition bg-red-900 bg-opacity-10">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">
                        MB
                      </div>
                      <div>
                        <p className="text-white font-medium">Mike Brown</p>
                        <p className="text-gray-400 text-sm">@mikebrown</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-300">mike.brown@example.com</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-primary-moonstone text-white text-xs font-semibold rounded-full">USER</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-red-900 text-red-400 text-xs font-semibold rounded-full">Banned</span>
                  </td>
                  <td className="px-6 py-4 text-gray-300">Nov 20, 2025</td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition" title="View">
                        <svg className="w-4 h-4 text-primary-moonstone" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                      </button>
                      <button className="p-2 bg-green-700 hover:bg-green-600 rounded-lg transition" title="Unban">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </button>
                      <button className="p-2 bg-gray-700 hover:bg-red-900 rounded-lg transition" title="Delete">
                        <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>

                {/* User Row 4 */}
                <tr className="hover:bg-gray-750 transition">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                        EJ
                      </div>
                      <div>
                        <p className="text-white font-medium">Emma Johnson</p>
                        <p className="text-gray-400 text-sm">@emmaj</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-300">emma.j@example.com</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-primary-moonstone text-white text-xs font-semibold rounded-full">USER</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-green-900 text-green-400 text-xs font-semibold rounded-full">Active</span>
                  </td>
                  <td className="px-6 py-4 text-gray-300">Jan 28, 2026</td>
                  <td className="px-6 py-4">
                    <div className="flex space-x-2">
                      <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition" title="View">
                        <svg className="w-4 h-4 text-primary-moonstone" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                        </svg>
                      </button>
                      <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition" title="Edit">
                        <svg className="w-4 h-4 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                        </svg>
                      </button>
                      <button className="p-2 bg-gray-700 hover:bg-red-900 rounded-lg transition" title="Ban">
                        <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
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

export default AdminUserManagement;
