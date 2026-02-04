function Unauthorized() {
  return (
    <div className="bg-primary-jet min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        {/* Warning Icon */}
        <div className="mb-8 inline-block">
          <div className="w-32 h-32 mx-auto bg-red-900 rounded-full flex items-center justify-center border-4 border-red-600 shadow-2xl animate-pulse">
            <svg className="w-20 h-20 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
          </div>
        </div>
        
        {/* Error Message */}
        <div className="bg-gray-800 rounded-2xl p-8 border border-red-900 shadow-2xl mb-8">
          <h1 className="text-5xl font-bold text-red-500 mb-4">Access Denied</h1>
          <h2 className="text-2xl font-semibold text-white mb-6">You Are Not Authorized</h2>
          
          <div className="bg-primary-jet rounded-xl p-6 mb-6 border-l-4 border-red-500">
            <p className="text-primary-moonstone text-lg leading-relaxed">
              Sorry, you don't have permission to access this page or resource. 
              This area is restricted to authorized users only.
            </p>
          </div>
          
          {/* Reasons Section */}
          <div className="bg-primary-jet rounded-xl p-6 mb-6 text-left">
            <p className="text-white font-semibold mb-4 flex items-center space-x-2">
              <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Why am I seeing this?</span>
            </p>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-primary-orange mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <span>You don't have the required permissions or role</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-primary-orange mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <span>Your session may have expired</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-primary-orange mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <span>You need to log in with an authorized account</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-primary-orange mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <span>This page is restricted to administrators only</span>
              </li>
            </ul>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/login" className="bg-primary-orange hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
              </svg>
              <span>Login</span>
            </a>
            <a href="/" className="bg-gray-700 hover:bg-gray-600 text-white font-semibold px-8 py-3 rounded-lg transition border border-gray-600 flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
              <span>Go to Home</span>
            </a>
          </div>
        </div>
        
        {/* Additional Help */}
        <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
          <p className="text-gray-400 text-sm">
            If you believe this is a mistake, please 
            <a href="#" className="text-primary-orange hover:text-orange-400 transition font-medium"> contact support</a> 
            or reach out to your administrator.
          </p>
        </div>
        
        {/* Footer */}
        <p className="text-gray-600 text-xs mt-6">
          Error Code: 403 - Forbidden Access
        </p>
      </div>
    </div>
  );
}

export default Unauthorized;
