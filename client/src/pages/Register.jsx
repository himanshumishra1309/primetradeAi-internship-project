function Register() {
  return (
    <div className="bg-primary-jet min-h-screen flex items-center justify-center py-12">
      <div className="w-full max-w-md px-6">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-primary-orange mb-2">TweetHub</h1>
          <p className="text-primary-moonstone text-lg">Join the conversation today</p>
        </div>

        {/* Register Card */}
        <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Create Account</h2>
          
          <form className="space-y-4">
            {/* Full Name */}
            <div>
              <label htmlFor="fullname" className="block text-sm font-medium text-primary-moonstone mb-2">Full Name</label>
              <input 
                type="text" 
                id="fullname" 
                name="fullname"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 bg-primary-jet border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent transition"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-primary-moonstone mb-2">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-primary-jet border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent transition"
                required
              />
            </div>

            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-primary-moonstone mb-2">Username</label>
              <input 
                type="text" 
                id="username" 
                name="username"
                placeholder="Choose a username"
                className="w-full px-4 py-3 bg-primary-jet border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent transition"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-primary-moonstone mb-2">Password</label>
              <input 
                type="password" 
                id="password" 
                name="password"
                placeholder="Create a password"
                className="w-full px-4 py-3 bg-primary-jet border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent transition"
                required
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-primary-moonstone mb-2">Confirm Password</label>
              <input 
                type="password" 
                id="confirmPassword" 
                name="confirmPassword"
                placeholder="Confirm your password"
                className="w-full px-4 py-3 bg-primary-jet border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent transition"
                required
              />
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start">
              <input type="checkbox" id="terms" className="w-4 h-4 mt-1 text-primary-orange bg-primary-jet border-gray-600 rounded focus:ring-primary-orange focus:ring-2" required />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-400">
                I agree to the <a href="#" className="text-primary-orange hover:text-orange-400">Terms and Conditions</a> and <a href="#" className="text-primary-orange hover:text-orange-400">Privacy Policy</a>
              </label>
            </div>

            {/* Register Button */}
            <button 
              type="submit"
              className="w-full bg-primary-orange hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-[1.02] shadow-lg"
            >
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-gray-800 text-gray-500">OR</span>
            </div>
          </div>

          {/* Login Link */}
          <p className="text-center text-gray-400">
            Already have an account? 
            <a href="#" className="text-primary-orange hover:text-orange-400 font-semibold transition ml-1">Sign In</a>
          </p>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-600 text-sm mt-6">
          © 2026 TweetHub. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Register;
