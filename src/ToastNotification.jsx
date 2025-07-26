import React, { useEffect } from 'react';
import './ToastNotification.css';

const ToastNotification = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000); // Hide after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="toast-notification">
      {message}
    </div>
  );
};

export default ToastNotification;