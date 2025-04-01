import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function ResetPassword() {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const [alertType, setAlertType] = useState(""); // "error" or "success"
  
    const navigate = useNavigate(); 
  
    useEffect(() => {
      
      if (alertMessage) {
        const timer = setTimeout(() => {
          setAlertMessage("");
        }, 3000);
  
        return () => clearTimeout(timer); // Cleanup timeout
      }
    }, [alertMessage]);
  
    const handleResetPassword = (e) => {
      e.preventDefault();
  
      if (newPassword !== confirmPassword) {
        setAlertMessage("Passwords do not match!");
        setAlertType("error");
        return;
      }
  
      setAlertMessage("Password changed successfully! Redirecting to login...");
      setAlertType("success");
  
      // Redirect to login after 3 seconds
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    };

  return (
    <div className="bg-[#d9e5f8]">
        <div className="flex flex-col items-center justify-center min-h-screen ">
          <div className="bg-white shadow-blue-200 shadow-xl py-4 font-lexend mx-2 md:mx-0 lg:mx-0 rounded-2xl px-18">
            <h2 className="text-center font-extrabold text-xl mt-4 text-[#4B6789]">Reset Password</h2>
            {/* Alert Message */}
            {alertMessage && (
              <div
                className={`mt-4 p-2 text-center rounded-md ${
                  alertType === "error" ? "bg-red-500 text-white" : "bg-green-500 text-white"
                }`}
              >
                {alertMessage}
              </div>
            )}
            {/* Password Reset Form */}
            <form onSubmit={handleResetPassword} className="flex flex-col mt-2">
              <input
                type="password"
                placeholder="New Password"
                className="w-full px-3 py-2 mt-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-3 py-2 mt-4 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-[#0147C1] transition-transform transform mt-4 hover:scale-105 hover:bg-blue-500 text-white rounded-xl px-4 py-2 w-full"
              >
                Reset Password
              </button>
            </form>
          </div>
        </div>
    </div>
  );
}

export default ResetPassword;
