import { useEffect } from 'react';

const ConfirmDialog = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title, 
  message, 
  confirmText = 'Confirm', 
  cancelText = 'Cancel',
  type = 'danger' // danger, warning, info
}) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const typeStyles = {
    danger: {
      icon: 'bg-red-900',
      iconColor: 'text-red-500',
      button: 'bg-red-600 hover:bg-red-700',
      border: 'border-red-500'
    },
    warning: {
      icon: 'bg-yellow-900',
      iconColor: 'text-yellow-500',
      button: 'bg-yellow-600 hover:bg-yellow-700',
      border: 'border-yellow-500'
    },
    info: {
      icon: 'bg-blue-900',
      iconColor: 'text-primary-moonstone',
      button: 'bg-primary-moonstone hover:bg-blue-600',
      border: 'border-primary-moonstone'
    }
  };

  const style = typeStyles[type];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full mx-4 border border-gray-700" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${style.icon}`}>
                {type === 'danger' && (
                  <svg className={`w-7 h-7 ${style.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
                )}
                {type === 'warning' && (
                  <svg className={`w-7 h-7 ${style.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                  </svg>
                )}
                {type === 'info' && (
                  <svg className={`w-7 h-7 ${style.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                )}
              </div>
              <h3 className="text-2xl font-bold text-white">{title}</h3>
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
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            {message}
          </p>
          {type === 'danger' && (
            <div className={`bg-primary-jet rounded-lg p-4 border-l-4 ${style.border}`}>
              <p className="text-sm text-gray-400">
                ⚠️ This action cannot be undone.
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-gray-700 flex justify-end space-x-3">
          <button 
            onClick={onClose}
            className="px-6 py-2.5 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition"
          >
            {cancelText}
          </button>
          <button 
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className={`px-6 py-2.5 ${style.button} text-white font-semibold rounded-lg transition transform hover:scale-105`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
