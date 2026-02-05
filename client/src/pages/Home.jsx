function Home() {
  return (
    <div className="bg-primary-jet min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-orange to-primary-moonstone py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Welcome to TweetHub
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
            Share your thoughts, connect with others, and join the conversation. 
            Express yourself in 280 characters or less.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/register">
              <button className="px-8 py-4 bg-white text-primary-orange font-bold text-lg rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg transform hover:scale-105">
                Get Started
              </button>
            </a>
            <a href="/tweets">
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-primary-orange transition-all duration-200 shadow-lg">
                Explore Tweets
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            Why Choose TweetHub?
          </h2>
          <p className="text-primary-moonstone text-center mb-12 text-lg">
            Everything you need to share your voice with the world
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-primary-orange transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-primary-orange bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Express Yourself</h3>
              <p className="text-gray-400 leading-relaxed">
                Share your thoughts, ideas, and moments with a global audience. 
                Make your voice heard in 280 characters.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-primary-moonstone transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-primary-moonstone bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-moonstone" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Build Community</h3>
              <p className="text-gray-400 leading-relaxed">
                Connect with like-minded individuals, follow interesting people, 
                and grow your network organically.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-primary-orange transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-primary-orange bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
              <p className="text-gray-400 leading-relaxed">
                Discover trending topics, real-time updates, and stay connected 
                with what matters most to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Tweets Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-2">
                Join the Conversation
              </h2>
              <p className="text-primary-moonstone text-lg">
                Connect with people sharing their thoughts
              </p>
            </div>
            <a href="/tweets">
              <button className="px-6 py-3 bg-primary-orange hover:bg-orange-600 text-white font-semibold rounded-lg transition-all duration-200 flex items-center space-x-2">
                <span>Explore Tweets</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </button>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature Card 1 */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-primary-orange transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-primary-orange bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Real-Time Updates</h3>
              <p className="text-gray-400">
                Stay connected with instant notifications and live tweet feeds from people you follow
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-primary-moonstone transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-primary-moonstone bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-moonstone" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Engage & Interact</h3>
              <p className="text-gray-400">
                Like, share, and comment on tweets to build meaningful connections with the community
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:border-primary-orange transition-all duration-300 text-center">
              <div className="w-16 h-16 bg-primary-orange bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Safe & Secure</h3>
              <p className="text-gray-400">
                Your data is protected with enterprise-grade security and privacy controls
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join the Conversation?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Create your account today and start sharing your thoughts with the world
          </p>
          <a href="/register">
            <button className="px-10 py-4 bg-primary-orange hover:bg-orange-600 text-white font-bold text-lg rounded-lg transition-all duration-200 shadow-lg transform hover:scale-105">
              Sign Up Now - It's Free!
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
