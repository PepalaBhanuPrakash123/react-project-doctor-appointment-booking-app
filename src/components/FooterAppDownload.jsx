import React, { useState } from "react";
import "./footer-app-download.css";

export default function FooterAppDownload() {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSendSMS = () => {
    if (phone.length >= 7) setSubmitted(true);
    // Insert actual SMS logic here.
  };

  return (
    <div className="footer-app-download-section">
      <div className="footer-app-download-inner">
        {/* Left Side: Phone and popup video call effect */}
        <div className="footer-app-download-visual">
          <div className="footer-app-download-phone">
            <img
              src="https://www.practostatic.com/consumer-home/desktop/images/1597423628/footer-img.png"
              alt="Doctor video call"
              className="footer-app-download-phone-img"
            />
          </div>
        </div>
        
        {/* Right Side: Text, input, and buttons */}
        <div className="footer-app-download-content">
          <h2 className="footer-app-download-title">Download the New Life Health Care app</h2>
          <p className="footer-app-download-desc">
            Access video consultation with India’s top doctors on the New Life Health Care app.<br />
            Connect with doctors online, available 24/7, from the comfort of your home.
          </p>
          <div className="footer-app-download-stores">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-app-download-storebtn"
            >
              <img src="https://www.citypng.com/public/uploads/preview/png-white-google-play-playstore-logo-symbol-icon-701751694975101x9gjphvewf.png" alt="Google Play" />
              Google Play
            </a>
            <a
              href="https://apps.apple.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-app-download-storebtn"
            >
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQesa2rF2WhrA7Sl3iIoznL-gFpA0y0GB-tQ&s" alt="App Store" />
              App Store
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}