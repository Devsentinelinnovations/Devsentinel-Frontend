import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
import LandingPage from "../pages/LandingPage";
import Dashboard from "../pages/Dashboard";
import Layout from "../components/dashboard/Layout";
import Course from "../pages/Course";
import Messages from "../pages/Messages";
import Notifications from "../pages/Notifications";
import Profile from "../pages/Profile";
import Library from "../pages/Library";
import EmailVerification from "../components/AuthForms/EmailVerification";
import ResetPassword from "../components/AuthForms/ResetPassword";
import ForgotPassword from "../components/AuthForms/ForgotPassword";
import OTP from "../components/InApp/OTP";
function RouterPath() {
  return (
    <Router>
      <Routes>
        <Route index element={<LandingPage/>}/>
        <Route path="/landing" element={<LandingPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-email" element={<EmailVerification />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/otp" element={<OTP/>} />     
        {/* dashboard routes */}
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="course" element={<Course/>} />
          <Route path="message" element={<Messages />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="library" element={<Library />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default RouterPath;
