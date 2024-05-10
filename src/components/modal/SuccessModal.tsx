// SuccessModal.tsx
import React, { useEffect } from "react";

interface SuccessModalProps {
  title: string;
  message: string;
  isVisible: boolean;
  duration: number;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  title,
  message,
  isVisible,
  duration,
  onClose,
}) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white text-black p-6 rounded shadow-lg text-center">
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default SuccessModal;
