import { assets } from "../../assets/assets";
import React from "react";
import AuthLogin from "../../components/AuthForms/AuthLogin";

const Login = () => {
  // const handleLogin = (e, formData) => {
  //   e.preventDefault();
  //   console.log("Logging in:", formData);
  //   // API call for login
  // };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Side Image (Hidden on small screens) */}
      <div className="hidden md:flex md:w-1/2 items-center justify-center bg-gray-100 p-6">
        <img
          src={assets.illustration}
          alt="Login Illustration"
          className="w-full max-w-md"
        />
      </div>

      {/* Right Side Form */}
      <div className="w-full md:w-1/2 flex ">
        <AuthLogin />
      </div>
    </div>
  );
};

export default Login;
