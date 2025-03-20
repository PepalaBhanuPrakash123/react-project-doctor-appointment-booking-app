import { Link } from "react-router-dom";

const AuthNavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/10 shadow-lg p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-white">New Life Healthcare</h1>

        {/* Auth Buttons */}
        <div className="space-x-4">
          <Link 
            to="/login" 
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
            style={{ textDecoration: "none" }}
            >
            Login
          </Link>
          <Link 
            to="/signup" 
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            style={{ textDecoration: "none" }}>
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default AuthNavBar;
