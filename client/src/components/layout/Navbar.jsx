const Navbar = () => {
  return (
    <nav className="bg-gray-800 border-b border-gray-700 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary-orange">TweetHub</span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-white hover:text-primary-orange transition-colors duration-200 font-medium">
              Home
            </a>
            <a href="/tweets" className="text-white hover:text-primary-orange transition-colors duration-200 font-medium">
              Explore
            </a>
            <a href="/dashboard" className="text-white hover:text-primary-orange transition-colors duration-200 font-medium">
              Dashboard
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="/login">
              <button className="px-6 py-2 text-white bg-gray-700 hover:bg-gray-600 transition-colors duration-200 rounded-lg font-medium cursor-pointer">
                Login
              </button>
            </a>
            <a href="/register">
              <button className="px-6 py-2 bg-primary-orange text-white hover:bg-orange-600 transition-colors duration-200 rounded-lg font-medium cursor-pointer shadow-lg">
                Sign Up
              </button>
            </a>
          </div>

          <div className="md:hidden">
            <button className="text-white hover:text-primary-orange transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
