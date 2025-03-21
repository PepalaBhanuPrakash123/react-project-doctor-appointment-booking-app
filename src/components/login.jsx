import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import toastify CSS
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase.config";
import "./Login.css"; // Importing the CSS file
import { Stethoscope } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false); // State for Terms & Conditions checkbox
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  async function login(e) {
    e.preventDefault();
    if (!agree) {
      toast.error("You must agree to the Terms & Conditions!");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login Successful!");
      navigate("/home");
    } catch (error) {
      console.error("Login Error:", error);
      toast.error(error.message);
    }
  }

  // Google Login Function
  async function handleGoogleLogin() {
    try {
      await signInWithPopup(auth, provider);
      toast.success("Logged in with Google!");
      navigate("/home");
    } catch (error) {
      console.error("Google Login Error:", error);
      toast.error(error.message);
    }
  }

  return (
    <div className="login-container">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="glass-card">
        <a href="#" className='flex justify-center items-center text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent hover:text-[#00bfff] bg-clip-text' style={{ textDecoration: "none" }}>
          <Stethoscope className='text-[#004080] mr-2 size={32}' />
          <span className='text-2xl font-bold text-[#004080]'>
            New Life Healthcare
          </span>
        </a>

        <h2 className="text-center mb-3">Login</h2>
        <form onSubmit={login}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
            {/* Forgot Password Link */}
            <p className="text-end">
              <Link to="/forgot-password" className="text-decoration-none text-primary">
                Forgot Password?
              </Link>
            </p>
          </div>

          {/* Terms & Conditions Checkbox */}
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="termsCheck"
              checked={agree}
              onChange={() => setAgree(!agree)}
            />
            <label className="form-check-label" htmlFor="termsCheck">
              I agree to the <Link to="/terms" className="text-primary" style={{ textDecoration: "none" }}>Terms & Conditions</Link>
            </label>
          </div>

          <button type="submit" className="btn btn-success w-100" disabled={!agree}>
            Login
          </button>
        </form>

        {/* Google Login Button */}
        <div className="text-center mt-3">
          <p>OR</p>
          <button className="btn btn-danger w-100" onClick={handleGoogleLogin}>
            <i className="fab fa-google me-2"></i> Login with Google
          </button>
        </div>

        <p className="text-center mt-3">
          Don't have an account? <Link to="/signup" style={{ textDecoration: "none" }}>Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

