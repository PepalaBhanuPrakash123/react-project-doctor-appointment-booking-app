import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase.config";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ForgotPassword.css"; // Import custom styles

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent! Check your inbox.");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="forgot-password-container d-flex justify-content-center align-items-center">
      <div className="forgot-password-card text-center">
        <h3 className="mb-3 fade-in">Forgot Password</h3>
        <p className="text-muted fade-in">
          Enter your email, and we'll send you a password reset link.
        </p>
        <form onSubmit={handleResetPassword} className="fade-in">
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 animated-button">
            Reset Password
          </button>
        </form>
        <div className="mt-3 fade-in">
          <Link to="/login" className="text-decoration-none back-to-login">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
