import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <nav className="bg-gray-800 border-b border-gray-700 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary-orange">TweetHub</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`${
                location.pathname === '/' 
                  ? 'text-primary-orange border-b-2 border-primary-orange' 
                  : 'text-white hover:text-primary-orange'
              } transition-colors duration-200 font-medium pb-1`}
            >
              Home
            </Link>
            <Link 
              to="/tweets" 
              className={`${
                location.pathname === '/tweets' 
                  ? 'text-primary-orange border-b-2 border-primary-orange' 
                  : 'text-white hover:text-primary-orange'
              } transition-colors duration-200 font-medium pb-1`}
            >
              Tweets
            </Link>
            {isAuthenticated && (
              <Link 
                to="/dashboard" 
                className={`${
                  location.pathname === '/dashboard' 
                    ? 'text-primary-orange border-b-2 border-primary-orange' 
                    : 'text-white hover:text-primary-orange'
                } transition-colors duration-200 font-medium pb-1`}
              >
                Dashboard
              </Link>
            )}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <span className="text-gray-300 text-sm">
                  Welcome, <span className="text-primary-orange font-semibold">{user?.f_name || user?.username}</span>
                </span>
                <button
                  onClick={handleLogout}
                  className="px-6 py-2 bg-gray-700 text-white hover:bg-gray-600 transition-colors duration-200 rounded-lg font-medium cursor-pointer"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className="px-6 py-2 text-white bg-gray-700 hover:bg-gray-600 transition-colors duration-200 rounded-lg font-medium cursor-pointer">
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button className="px-6 py-2 bg-primary-orange text-white hover:bg-orange-600 transition-colors duration-200 rounded-lg font-medium cursor-pointer shadow-lg">
                    Sign Up
                  </button>
                </Link>
              </>
            )}
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
