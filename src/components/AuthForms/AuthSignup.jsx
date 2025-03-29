import React,{useState} from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import axios from "axios";  // Import axios

function AuthSignup() {
  const [message, setMessage] = useState("");
  const [postData, setPostData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  }); 

  const handleChange = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    // console.log(last_name);  
    try {
      const response = await axios.post("https://cors-anywhere.herokuapp.com/https://devsenti-dev.onrender.com/api/user/register/",postData);
      if (response.ok) {
        const result = await response.json();
        setMessage(`Post Created! ID: ${result.id}`);
      } else {
        setMessage("Failed to create post.");
      }
    } catch (error) {
      setMessage("Error submitting data.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen w-full bg-white  flex items-center justify-center p-4">
      <div className="mx-auto max-w-md w-full bg-white ">
        {/* Logo Section */}
        <div className="flex justify-center">
          <img src={assets.logo} alt="Logo" className="h-12 sm:h-12 md:h-14 w-auto" />
        </div>

        {/* Welcome Text */}
        <h1 className="mt-4 sm:mt-6 text-center text-2xl font-semibold text-brightblue">
          Create Account!
        </h1>

        {/* Form Section */}
        <div className="mt-6">
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name Fields */}
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First name
                </label>
                <input onChange={handleChange}
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last name
                </label>
                <input onChange={handleChange}
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                />
              </div>
            </div>

            {/* Username Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input onChange={handleChange}
                type="text"
                name="username"
                placeholder="Choose a username"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input onChange={handleChange}
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                required
              />
            </div>

            {/* Password Fields */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input onChange={handleChange}
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <Link to={'/verify-email'}>
              <button
                type="submit"
                className="w-full bg-textBlue text-white py-2.5 rounded-md hover:bg-blue-500 transition-all font-medium mt-6"
              >
                Create account
              </button>
            </Link>
          </form>
        </div>

        {/* Other Login Methods */}
        <div className="mt-6">
          <div className="text-center text-sm text-gray-600 mb-4">
            or register with
          </div>
          <button className="w-full flex items-center justify-center px-4 py-2 border-2 border-blue-500 text-darkblue rounded-md transition-all hover:bg-blue-200">
            <img src={assets.google} alt="google" className="w-5 h-5 mr-2" />
            Google
          </button>
        </div>

        {/* Sign-in Link */}
        <div className="mt-6 text-center text-sm">
          <span className="text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-textBlue hover:underline font-medium"
            >
              Sign in
            </Link>
          </span>
        </div>

        {/* Terms and Conditions */}
        <div className="mt-4 text-center text-xs text-gray-500">
          By creating an account you agree to our Terms of Service. 
          You will receive occasional emails relating to your account.
        </div>
      </div>
    </div>
  );
}

export default AuthSignup;