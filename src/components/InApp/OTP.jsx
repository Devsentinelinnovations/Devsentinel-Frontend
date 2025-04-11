import React, { useRef, useState } from "react";

function OTP() {
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const inputs = Array(5).fill(0).map(() => useRef(null));

  const handleChange = (e, idx) => {
    const val = e.target.value;
    if (!/^\d*$/.test(val)) return;

    const newOtp = [...otp];
    newOtp[idx] = val;
    setOtp(newOtp);

    if (val && idx < 4) {
      inputs[idx + 1].current.focus();
    }
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === "Backspace" && !otp[idx] && idx > 0) {
      inputs[idx - 1].current.focus();
    }
  };

  const handleNextClick = () => {
    const enteredOtp = otp.join("");
    if (enteredOtp.length < 5) {
      alert("Please enter all 5 digits of the OTP.");
      return;
    }
    alert("Successfully verified OTP");
    setTimeout(() => {
      alert("Redirecting to login page...");
    }, 3000);
    setTimeout(() => {
      window.location.href = "/login";
    }, 3000);
  };

  return (
    <div className="bg-[#d9e5f8]">
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white shadow-blue-200 shadow-xl py-4 font-lexend mx-4 md:mx-0 lg:mx-0 rounded-2xl px-14">
          <h2 className="text-center font-extrabold text-xl mt-4 text-[#4B6789]">
            Enter your 5 digits OTP 
          </h2>
          <p className="text-center mt-2 text-gray-700">
            We sent an OTP to you, kindly verify it.
          </p>

          <div className="flex gap-2 text-center justify-center mt-4">
            {inputs.map((ref, idx) => (
              <input
                key={idx}
                ref={ref}
                value={otp[idx]}
                maxLength={1}
                onChange={(e) => handleChange(e, idx)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                className="w-10 h-12 text-center text-xl border border-gray-300 rounded"
                type="text"
              />
            ))}
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
        </div>
      </div>
    </div>
  );
}

export default OTP;
