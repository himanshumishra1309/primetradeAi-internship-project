function NotFound() {
  return (
    <div className="bg-primary-jet min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        {/* 404 Large Number */}
        <div className="mb-8 animate-bounce">
          <h1 className="text-9xl font-bold text-primary-orange leading-none">404</h1>
          <div className="flex justify-center items-center space-x-4 mt-4">
            <div className="w-16 h-1 bg-primary-moonstone rounded"></div>
            <svg className="w-8 h-8 text-primary-moonstone" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div className="w-16 h-1 bg-primary-moonstone rounded"></div>
          </div>
        </div>
        
        {/* Error Message */}
        <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 shadow-2xl mb-8">
          <h2 className="text-4xl font-bold text-white mb-4">Page Not Found</h2>
          <p className="text-primary-moonstone text-lg mb-6">
            Oops! The page you're looking for has flown away like a tweet in the wind. 
            It might have been deleted, moved, or never existed.
          </p>
          
          {/* Suggestions */}
          <div className="bg-primary-jet rounded-xl p-6 mb-6 text-left">
            <p className="text-white font-semibold mb-3">What you can do:</p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-primary-orange mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <span>Check the URL for typos or errors</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-primary-orange mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <span>Return to the homepage and start fresh</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-primary-orange mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <span>Use the search feature to find what you need</span>
              </li>
            </ul>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/" className="bg-primary-orange hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
              <span>Go to Home</span>
            </a>
            <button onClick={() => window.history.back()} className="bg-gray-700 hover:bg-gray-600 text-white font-semibold px-8 py-3 rounded-lg transition border border-gray-600 flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
              <span>Go Back</span>
            </button>
          </div>
        </div>
        
        {/* Footer */}
        <p className="text-gray-600 text-sm">
          Need help? <a href="#" className="text-primary-orange hover:text-orange-400 transition">Contact Support</a>
        </p>
      </div>
    </div>
  );
}

export default NotFound;
