import React from "react";

interface InformativeModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

const InformativeModal: React.FC<InformativeModalProps> = ({
  isOpen,
  onClose,
  message,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 text-black">
      <div className="bg-white p-4 w-80 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Atenção!</h2>
        <p>{message}</p>
        <div className="mt-4">
          <button
            onClick={onClose}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

export default InformativeModal;
