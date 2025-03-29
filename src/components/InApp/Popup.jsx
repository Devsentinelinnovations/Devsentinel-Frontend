import React from "react";
import { Link } from "react-router-dom";

function Popup({ isOpen, onClose, message }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#d9e5f8] ">
      <div className="bg-white p-6 rounded-md shadow-lg text-center">
        <p className="text-lg">{message}</p>
        <Link to="/login">
            <button
              className="mt-4 px-4 py-2 bg-[#0147C1] text-white rounded-xl hover:bg-blue-500 transition-all"
              onClick={onClose}
            >
              Close
            </button>
        </Link>
      </div>
    </div>
  );
}

export default Popup;
