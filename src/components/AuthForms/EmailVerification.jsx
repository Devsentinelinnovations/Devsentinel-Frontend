import React, { useState } from "react";
import Popup from "../InApp/Popup"; // Ensure the path is correct

function EmailVerification() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleNextClick = () => {
    setIsPopupOpen(true); // Show popup when clicking "Next"
  };

  return (
    <div className="bg-[#d9e5f8]">
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white shadow-blue-200 shadow-xl py-4 font-lexend mx-4 md:mx-0 lg:mx-0 rounded-2xl px-14">
          <div className="font-lexend">
            <h2 className="text-center font-extrabold text-xl mt-4 text-[#4B6789]">
              Verify Email
            </h2>
            <p className="text-center mt-2 text-gray-700">
              Enter your email address, we’ll send a direct link to you.
            </p>
          </div>

          {/* Email Field */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 mt-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              required
            />
          </div>

          <div className="mt-8 mb-4">
            <button
              className="bg-[#0147C1] transition-transform transform hover:scale-105 hover:bg-blue-500 text-white rounded-xl px-4 py-2 w-full"
              onClick={handleNextClick}
            >
              Next
            </button>
          </div>

          {/* Popup Component */}
          <Popup
            isOpen={isPopupOpen}
            onClose={() => setIsPopupOpen(false)}
            message="A verification link has been sent to your email."
          />
        </div>
      </div>
    </div>
  );
}

export default EmailVerification;
