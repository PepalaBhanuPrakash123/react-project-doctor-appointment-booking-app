import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../firebase.config";
import "./Signup.css"; 
import { Stethoscope } from 'lucide-react';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  async function signup(event) {
    event.preventDefault();
    if (!agreeTerms) {
      toast.error("You must agree to the Terms & Conditions.");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Account Created Successfully");
      navigate("/login"); 
      setEmail("");
      setPassword("");
      setAgreeTerms(false);
    } catch (error) {
      toast.error(error.message);
    }
  }

  // Google Login Function
  const SignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      
      if (user) {
        toast.success("Logged in with Google!");
        navigate("/login");  // Navigate to login page
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="glassmorphism-card p-4 shadow-lg">
        <a href="#" className='flex justify-center items-center text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent hover:text-[#00bfff] bg-clip-text' style={{textDecoration:"none"}}>
          <Stethoscope className='text-[#004080] mr-2 size={32}' />
          <span className='text-2xl font-bold text-[#004080]'>
            New Life Healthcare
          </span>
        </a>
        <h2 className="text-center mb-3 text-white">Sign Up</h2>
        <form onSubmit={signup}>
          <div className="mb-3">
            <label className="form-label text-white">Email</label>
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
            <label className="form-label text-white">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="new-password"
            />
          </div>

          <div className="form-check mb-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="terms"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
            />
            <label className="form-check-label text-white" htmlFor="terms">
              I agree to the <Link to="/terms" className="text-primary" style={{textDecoration:"none"}}>Terms & Conditions</Link>
            </label>
          </div>

          <button type="submit" className="btn btn-success w-100" disabled={!agreeTerms}>
            Sign Up
          </button>
        </form>

        <div className="text-center mt-3">
          <p className="text-white">OR</p>
          <button className="btn btn-danger w-100" onClick={SignInWithGoogle} disabled={!agreeTerms}>
            <i className="fab fa-google me-2"></i> Signup with Google
          </button>
        </div>

        <p className="text-center mt-3 text-white">
          Already have an account? <Link to="/login" className="text-primary" style={{ textDecoration: "none" }}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
