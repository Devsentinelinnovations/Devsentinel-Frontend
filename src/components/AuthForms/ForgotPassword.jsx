import React, { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState(""); // Added state for email

  const handleNextClick = () => {
    if (!email) {
      alert("Please enter your email.");
      return;
    }
    // Here you can handle the logic for sending the OTP to the email   
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
              Enter a valid email address, We’ll send an OTP to you.
            </p>
          </div>

          {/* Email Field */}
          <div>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-3 py-2 mt-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              required
            />
          </div>

          <div className="mt-8 mb-4">
            <button
             type="submit"
              className="bg-[#0147C1] transition-transform transform hover:scale-105 hover:bg-blue-500 text-white rounded-xl px-4 py-2 w-full"
              onClick={handleNextClick}
            >
              Continue
            </button>
          </div>

          {/* Popup Component */}
          {/* <Popup
            isOpen={isPopupOpen}
            onClose={() => setIsPopupOpen(false)}
            message="An OTP has been sent to your email."
          /> */}
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
