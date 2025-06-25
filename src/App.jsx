import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";
import Home from  "./components/Home";
import ForgotPassword from "./components/forgotpassword";
import Articles from "./components/Articles"; // ✅ exact path



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Signup />} />
        <Route path="*" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword/>}/>
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </Router>
  );
}

export default App;


