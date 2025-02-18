import React from "react";
import { assets } from "../../assets/assets";
import AuthSignup from "../../components/AuthForms/AuthSignup";

const Signup = () => {
  // const handleSignup = (e, formData) => {
  //   e.preventDefault();

  //   if (formData.password !== formData.confirmPassword) {
  //     alert("Passwords do not match!");
  //     return;
  //   }

  //   console.log("Signing up:", formData);
  //   // API call for signup
  // };
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Side Image (Hidden on small screens) */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center bg-gray-100 p-6">
        <img
          src= {assets.illustration2} 
          alt="Signup Illustration"
          className="w-full max-w-md"
        />
      </div>

      {/* Right Side Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <AuthSignup />
      </div>
    </div>
  );
};

export default Signup;
