import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Register() {
  const [formData, setFormData] = useState({
    f_name: '',
    l_name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    dob: '',
    contact_no: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    setLoading(true);

    try {
      const { confirmPassword, ...registerData } = formData;
      await register(registerData);
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-primary-jet min-h-screen flex items-center justify-center py-12">
      <div className="w-full max-w-2xl px-6">
        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-primary-orange mb-2">TweetHub</h1>
          <p className="text-primary-moonstone text-lg">Join the conversation today</p>
        </div>

        {/* Register Card */}
        <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Create Account</h2>
          
          {error && (
            <div className="mb-4 p-3 bg-red-900 border border-red-700 rounded-lg text-red-200 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="f_name" className="block text-sm font-medium text-primary-moonstone mb-2">First Name</label>
                <input 
                  type="text" 
                  id="f_name" 
                  name="f_name"
                  value={formData.f_name}
                  onChange={handleChange}
                  placeholder="First name"
                  className="w-full px-4 py-3 bg-primary-jet border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent transition"
                  required
                />
              </div>
              <div>
                <label htmlFor="l_name" className="block text-sm font-medium text-primary-moonstone mb-2">Last Name</label>
                <input 
                  type="text" 
                  id="l_name" 
                  name="l_name"
                  value={formData.l_name}
                  onChange={handleChange}
                  placeholder="Last name"
                  className="w-full px-4 py-3 bg-primary-jet border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent transition"
                  required
                />
              </div>
            </div>

            {/* Email and Username */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary-moonstone mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-primary-jet border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent transition"
                  required
                />
              </div>
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-primary-moonstone mb-2">Username</label>
                <input 
                  type="text" 
                  id="username" 
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Choose a username"
                  className="w-full px-4 py-3 bg-primary-jet border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent transition"
                  required
                />
              </div>
            </div>

            {/* DOB and Contact */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="dob" className="block text-sm font-medium text-primary-moonstone mb-2">Date of Birth</label>
                <input 
                  type="date" 
                  id="dob" 
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-primary-jet border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent transition"
                  required
                />
              </div>
              <div>
                <label htmlFor="contact_no" className="block text-sm font-medium text-primary-moonstone mb-2">Contact Number</label>
                <input 
                  type="tel" 
                  id="contact_no" 
                  name="contact_no"
                  value={formData.contact_no}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="w-full px-4 py-3 bg-primary-jet border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent transition"
                  required
                />
              </div>
            </div>

            {/* Password Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-primary-moonstone mb-2">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  className="w-full px-4 py-3 bg-primary-jet border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent transition"
                  required
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-primary-moonstone mb-2">Confirm Password</label>
                <input 
                  type="password" 
                  id="confirmPassword" 
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="w-full px-4 py-3 bg-primary-jet border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent transition"
                  required
                />
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-start">
              <input 
                type="checkbox" 
                id="terms" 
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className="w-4 h-4 mt-1 text-primary-orange bg-primary-jet border-gray-600 rounded focus:ring-primary-orange focus:ring-2" 
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-400">
                I agree to the <a href="#" className="text-primary-orange hover:text-orange-400">Terms and Conditions</a> and <a href="#" className="text-primary-orange hover:text-orange-400">Privacy Policy</a>
              </label>
            </div>

            {/* Register Button */}
            <button 
              type="submit"
              disabled={loading || !agreedToTerms}
              className="w-full bg-primary-orange hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating Account...' : !agreedToTerms ? 'Please Accept Terms' : 'Create Account'}
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
            <Link to="/login" className="text-primary-orange hover:text-orange-400 font-semibold transition ml-1">Sign In</Link>
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
