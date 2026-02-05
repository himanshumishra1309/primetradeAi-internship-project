function UserSettings() {
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
              <a href="/profile" className="text-gray-400 hover:text-white transition">Profile</a>
              <button className="bg-primary-orange hover:bg-orange-600 px-4 py-2 rounded-lg text-white font-medium transition">
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-white mb-2">Settings</h2>
          <p className="text-primary-moonstone text-lg">Manage your account preferences</p>
        </div>

        {/* Account Settings */}
        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 shadow-lg mb-6">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
            <svg className="w-7 h-7 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            <span>Account Information</span>
          </h3>

          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-primary-moonstone mb-2">Full Name</label>
                <input 
                  type="text"
                  defaultValue="John Doe"
                  className="w-full px-4 py-3 bg-primary-jet border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-orange transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary-moonstone mb-2">Username</label>
                <input 
                  type="text"
                  defaultValue="johndoe"
                  className="w-full px-4 py-3 bg-primary-jet border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-orange transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-primary-moonstone mb-2">Email Address</label>
              <input 
                type="email"
                defaultValue="john.doe@example.com"
                className="w-full px-4 py-3 bg-primary-jet border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-orange transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-primary-moonstone mb-2">Bio</label>
              <textarea 
                rows="4"
                defaultValue="Full-stack developer passionate about building scalable web applications."
                className="w-full px-4 py-3 bg-primary-jet border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-orange resize-none transition"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-primary-moonstone mb-2">Location</label>
              <input 
                type="text"
                defaultValue="San Francisco, CA"
                className="w-full px-4 py-3 bg-primary-jet border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-orange transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-primary-moonstone mb-2">Website</label>
              <input 
                type="url"
                defaultValue="https://johndoe.dev"
                className="w-full px-4 py-3 bg-primary-jet border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-orange transition"
              />
            </div>

            <button type="submit" className="bg-primary-orange hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition transform hover:scale-105">
              Save Changes
            </button>
          </form>
        </div>

        {/* Password Settings */}
        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 shadow-lg mb-6">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
            <svg className="w-7 h-7 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
            <span>Change Password</span>
          </h3>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-primary-moonstone mb-2">Current Password</label>
              <input 
                type="password"
                placeholder="Enter current password"
                className="w-full px-4 py-3 bg-primary-jet border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-orange transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-primary-moonstone mb-2">New Password</label>
              <input 
                type="password"
                placeholder="Enter new password"
                className="w-full px-4 py-3 bg-primary-jet border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-orange transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-primary-moonstone mb-2">Confirm New Password</label>
              <input 
                type="password"
                placeholder="Confirm new password"
                className="w-full px-4 py-3 bg-primary-jet border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-orange transition"
              />
            </div>

            <button type="submit" className="bg-primary-orange hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition transform hover:scale-105">
              Update Password
            </button>
          </form>
        </div>

        {/* Privacy Settings */}
        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 shadow-lg mb-6">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
            <svg className="w-7 h-7 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
            <span>Privacy & Security</span>
          </h3>

          <div className="space-y-5">
            <div className="flex items-center justify-between pb-5 border-b border-gray-700">
              <div>
                <p className="text-white font-medium">Private Account</p>
                <p className="text-gray-400 text-sm">Only approved followers can see your tweets</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-orange rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-orange"></div>
              </label>
            </div>

            <div className="flex items-center justify-between pb-5 border-b border-gray-700">
              <div>
                <p className="text-white font-medium">Show Email</p>
                <p className="text-gray-400 text-sm">Display your email on your profile</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-orange rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-orange"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Two-Factor Authentication</p>
                <p className="text-gray-400 text-sm">Add an extra layer of security to your account</p>
              </div>
              <button className="bg-primary-moonstone hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition">
                Enable
              </button>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 shadow-lg mb-6">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
            <svg className="w-7 h-7 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
            </svg>
            <span>Notifications</span>
          </h3>

          <div className="space-y-5">
            <div className="flex items-center justify-between pb-5 border-b border-gray-700">
              <div>
                <p className="text-white font-medium">Email Notifications</p>
                <p className="text-gray-400 text-sm">Receive notifications via email</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-orange rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-orange"></div>
              </label>
            </div>

            <div className="flex items-center justify-between pb-5 border-b border-gray-700">
              <div>
                <p className="text-white font-medium">Push Notifications</p>
                <p className="text-gray-400 text-sm">Receive push notifications on your device</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-orange rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-orange"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">SMS Notifications</p>
                <p className="text-gray-400 text-sm">Receive notifications via SMS</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-orange rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-orange"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-gray-800 rounded-xl p-8 border border-red-700 shadow-lg">
          <h3 className="text-2xl font-bold text-red-500 mb-6 flex items-center space-x-3">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
            </svg>
            <span>Danger Zone</span>
          </h3>

          <div className="space-y-4">
            <div className="bg-primary-jet rounded-lg p-5 border-l-4 border-yellow-500">
              <p className="text-white font-medium mb-2">Deactivate Account</p>
              <p className="text-gray-400 text-sm mb-4">Temporarily disable your account. You can reactivate it anytime.</p>
              <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-4 py-2 rounded-lg transition">
                Deactivate
              </button>
            </div>

            <div className="bg-primary-jet rounded-lg p-5 border-l-4 border-red-500">
              <p className="text-white font-medium mb-2">Delete Account</p>
              <p className="text-gray-400 text-sm mb-4">Permanently delete your account and all your data. This action cannot be undone.</p>
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg transition">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSettings;
