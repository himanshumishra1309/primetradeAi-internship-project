function ConfirmationModal() {
  return (
    <div>
      {/* Demo Page for showing modals */}
      <div className="bg-primary-jet min-h-screen p-8">
        <div className="max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl font-bold text-primary-orange mb-4">Confirmation Modals</h1>
          <p className="text-primary-moonstone text-lg mb-6">Dynamic reusable confirmation popups</p>
        </div>

        {/* Delete Confirmation Modal */}
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full mx-4 border border-gray-700">
            {/* Modal Header */}
            <div className="p-6 border-b border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-red-900">
                    <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Delete Tweet</h3>
                </div>
                <button className="text-gray-400 hover:text-white transition">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Are you sure you want to delete this tweet? This action cannot be undone.
              </p>
              <div className="bg-primary-jet rounded-lg p-4 border-l-4 border-red-500">
                <p className="text-sm text-gray-400">
                  ⚠️ This will permanently remove the tweet from your profile and all followers' feeds.
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-gray-700 flex justify-end space-x-3">
              <button className="px-6 py-2.5 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition">
                Cancel
              </button>
              <button className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition transform hover:scale-105">
                Delete Tweet
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Confirmation Modal Example (Hidden by default) */}
      <div className="hidden fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
        <div className="bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full mx-4 border border-gray-700">
          <div className="p-6 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-900">
                  <svg className="w-7 h-7 text-primary-moonstone" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Edit Tweet</h3>
              </div>
              <button className="text-gray-400 hover:text-white transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Do you want to edit this tweet? You can modify the content before saving.
            </p>
          </div>
          <div className="p-6 border-t border-gray-700 flex justify-end space-x-3">
            <button className="px-6 py-2.5 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition">
              Cancel
            </button>
            <button className="px-6 py-2.5 bg-primary-moonstone hover:bg-blue-600 text-white font-semibold rounded-lg transition transform hover:scale-105">
              Edit Tweet
            </button>
          </div>
        </div>
      </div>

      {/* Share Confirmation Modal Example (Hidden by default) */}
      <div className="hidden fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
        <div className="bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full mx-4 border border-gray-700">
          <div className="p-6 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-green-900">
                  <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Share Tweet</h3>
              </div>
              <button className="text-gray-400 hover:text-white transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Share this tweet with your followers or copy the link to share elsewhere.
            </p>
          </div>
          <div className="p-6 border-t border-gray-700 flex justify-end space-x-3">
            <button className="px-6 py-2.5 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition">
              Cancel
            </button>
            <button className="px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition transform hover:scale-105">
              Share Now
            </button>
          </div>
        </div>
      </div>

      {/* Logout Confirmation Modal Example (Hidden by default) */}
      <div className="hidden fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
        <div className="bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full mx-4 border border-gray-700">
          <div className="p-6 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-orange-900">
                  <svg className="w-7 h-7 text-primary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Logout</h3>
              </div>
              <button className="text-gray-400 hover:text-white transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Are you sure you want to logout? You will need to login again to access your account.
            </p>
            <div className="bg-primary-jet rounded-lg p-4 border-l-4 border-primary-orange">
              <p className="text-sm text-gray-400">
                💡 Make sure you have saved any unsaved changes before logging out.
              </p>
            </div>
          </div>
          <div className="p-6 border-t border-gray-700 flex justify-end space-x-3">
            <button className="px-6 py-2.5 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition">
              Cancel
            </button>
            <button className="px-6 py-2.5 bg-primary-orange hover:bg-orange-600 text-white font-semibold rounded-lg transition transform hover:scale-105">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;
