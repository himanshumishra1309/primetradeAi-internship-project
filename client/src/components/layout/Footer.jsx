const Footer = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="inline-block mb-4">
              <span className="text-2xl font-bold text-primary-orange">TweetHub</span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Share your thoughts with the world. Connect, engage, and build your community on TweetHub - 
              where every voice matters.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary-orange transition-colors duration-200 group">
                <span className="text-primary-orange group-hover:text-white font-bold">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary-orange transition-colors duration-200 group">
                <span className="text-primary-orange group-hover:text-white font-bold">in</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary-orange transition-colors duration-200 group">
                <span className="text-primary-orange group-hover:text-white font-bold">X</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-primary-moonstone font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-primary-orange transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="/tweets" className="text-gray-400 hover:text-primary-orange transition-colors duration-200">
                  Explore Tweets
                </a>
              </li>
              <li>
                <a href="/dashboard" className="text-gray-400 hover:text-primary-orange transition-colors duration-200">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/profile" className="text-gray-400 hover:text-primary-orange transition-colors duration-200">
                  Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-primary-moonstone font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-orange transition-colors duration-200">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-orange transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-orange transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary-orange transition-colors duration-200">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 TweetHub. All rights reserved. Share your thoughts with the world.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
