function Loading() {
  return (
    <div className="bg-primary-jet min-h-screen flex items-center justify-center">
      <div className="text-center">
        {/* Logo */}
        <h1 className="text-6xl font-bold text-primary-orange mb-8">TweetHub</h1>
        
        {/* Loading Animation */}
        <div className="relative inline-block mb-8">
          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-primary-moonstone opacity-20 animate-ping"></div>
          
          {/* Spinning Circle */}
          <div className="w-24 h-24 rounded-full border-4 border-gray-700 border-t-primary-orange animate-spin"></div>
        </div>
        
        {/* Loading Text */}
        <div className="space-y-2">
          <p className="text-2xl font-semibold text-white">Loading...</p>
          <p className="text-primary-moonstone text-lg">Please wait while we prepare your experience</p>
        </div>
        
        {/* Loading Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          <div className="w-3 h-3 bg-primary-orange rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-primary-orange rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          <div className="w-3 h-3 bg-primary-orange rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-80 mx-auto mt-8 bg-gray-700 rounded-full h-2 overflow-hidden">
          <div className="bg-gradient-to-r from-primary-orange to-primary-moonstone h-full rounded-full animate-pulse" style={{width: '60%'}}></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
