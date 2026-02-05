import { useState, useEffect } from 'react';

const EditTweetModal = ({ isOpen, onClose, onSave, tweet }) => {
  const [content, setContent] = useState('');
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    if (tweet) {
      setContent(tweet.content);
      setCharCount(tweet.content.length);
    }
  }, [tweet]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleContentChange = (e) => {
    const value = e.target.value;
    if (value.length <= 280) {
      setContent(value);
      setCharCount(value.length);
    }
  };

  const handleSave = () => {
    if (content.trim() && content.length <= 280) {
      onSave(content);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full mx-4 border border-gray-700" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
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
            <button onClick={onClose} className="text-gray-400 hover:text-white transition">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          <textarea
            value={content}
            onChange={handleContentChange}
            placeholder="What's on your mind?"
            rows="6"
            className="w-full px-4 py-3 bg-primary-jet border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent resize-none transition"
          ></textarea>
          <div className="mt-3">
            <span className={`text-sm ${charCount > 280 ? 'text-red-500' : charCount > 260 ? 'text-yellow-500' : 'text-gray-400'}`}>
              {charCount} / 280
            </span>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-gray-700 flex justify-end space-x-3">
          <button 
            onClick={onClose}
            className="px-6 py-2.5 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition"
          >
            Cancel
          </button>
          <button 
            onClick={handleSave}
            disabled={!content.trim() || charCount > 280}
            className="px-6 py-2.5 bg-primary-orange hover:bg-orange-600 text-white font-semibold rounded-lg transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTweetModal;
