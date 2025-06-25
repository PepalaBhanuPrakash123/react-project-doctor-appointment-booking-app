import { Mail, MapPin, Phone } from 'lucide-react';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterAppDownload from './FooterAppDownload';
import { Stethoscope } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setFormData({ name: '', email: '', phone: '', message: '' });

        const formData = new FormData(event.target);
        formData.append("access_key", "a40e39ba-c327-4647-b6d6-8ed53ba5cf56");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            Swal.fire({
                title: "Success",
                text: "Message sent Successfully",
                icon: "success"
            });
        }
    };

    return (
        <>
        
            <section id="contact" className="min-vh-100  py-5 px-4">
                <div className="container">
                    <div className="row g-4">
                        {/* Contact Form */}
                        <div className="col-md-6">
                            <div className=" rounded shadow p-4 h-100" style={{ backgroundColor: "#FAFAFA" }}>
                                <h2 className="text-primary fw-bold mb-4">Contact Us</h2>
                                <form onSubmit={onSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label text-dark">Full Name</label>
                                        <input type="text" name="name" required onChange={handleChange} className="form-control" placeholder='Enter your full name' />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label text-dark">Email</label>
                                        <input type="email" name="email" required onChange={handleChange} className="form-control" placeholder='Enter your email' />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label text-dark">Phone</label>
                                        <input type="tel" name="phone" required onChange={handleChange} className="form-control" placeholder='Enter your phone number' />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label text-dark">Message</label>
                                        <textarea name="message" required onChange={handleChange} className="form-control" rows="4" placeholder='Enter any message'></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100">Send Message</button>
                                </form>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="col-md-6">
                            <div className=" rounded shadow p-4 h-100 d-flex flex-column" style={{ backgroundColor: "#FAFAFA" }}>
                                <h2 className="text-primary fw-bold mb-4">Hospital Information</h2>
                                <div className="mb-3 d-flex align-items-center">
                                    <MapPin className="text-dark me-2" size={32} />
                                    <p className="text-dark mb-0">Greams Lane, Nellore - 524001</p>
                                </div>
                                <div className="mb-3 d-flex align-items-center">
                                    <Phone className="text-dark me-2" size={32} />
                                    <p className="text-dark mb-0">+91 6305772064</p>
                                </div>
                                <div className="mb-3 d-flex align-items-center">
                                    <Mail className="text-dark me-2" size={32} />
                                    <p className="text-dark mb-0">contact@newlifehealthcare.com</p>
                                </div>
                                <div className="d-flex justify-content-center align-items-center rounded overflow-hidden" style={{ minHeight: '400px', width: '100%' }}>
                                  <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d667451.36766151!2d79.55386909304548!3d14.215632456524784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4c8cca0e958771%3A0xd3036c2025161f55!2sNellore%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1750846261111!5m2!1sen!2sin"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Nellore Location Map"
/>
      </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Download App Section - Popup effect */}
            <FooterAppDownload />

            {/* Footer Section */}
            <footer className="py-5 border-top" style={{ background: "linear-gradient(180deg, rgba(184, 218, 228, 0.16), rgba(246, 246, 246, 0.99))" }}>
                <div className="container ">
                    <div className="row justify-content-center">
                        {/* Brand Name */}

                        {/* Footer Grid */}
                        <div className="col-md-9">
                            <div className="row">
                                {/* About Section */}
                                <div className="col-md-3">
                                    <h5 className="fw-semibold mb-3">About</h5>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="https://www.example.com/about" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                About New Life
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.example.com/blogs" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                Blogs
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://in.indeed.com/q-ai-jobs-for-doctor-jobs.html?utm_source=chatgpt.com&vjk=ea2e3948fb8ea40a" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                Careers
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.example.com/press" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                Press
                                            </a>
                                        </li>
                                    </ul>

                                </div>

                                {/* Support Section */}
                                <div className="col-md-3">
                                    <h5 className="fw-semibold mb-3">Support</h5>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="https://www.example.com/help-center" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                Help Center
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.example.com/contact" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                Contact Us
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.example.com/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                Privacy Policy
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.example.com/terms-of-service" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                Terms of Service
                                            </a>
                                        </li>
                                    </ul>

                                </div>

                                {/* Get the App Section */}
                                <div className="col-md-3">
                                    <h5 className="fw-semibold mb-3">Social</h5>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                Facebook
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                Twitter
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                YouTube
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                Instagram
                                            </a>
                                        </li>
                                    </ul>

                                </div>


                                {/* Code of Ethics */}
                                <div className="col-md-3">
                                    <h5 className="fw-bold mb-3">Code of Ethics</h5>
                                    <p className="small">
                                        CRCC has adopted a Code of Professional Ethics for its Certified Rehabilitation Counselors.{' '}
                                        <a href="#" style={{ fontWeight: 'bold', textDecoration: 'none' }}>Learn More</a>
                                    </p>
                                </div>

                                <div className="d-flex justify-content-center align-items-center vh-200">
                                        <Stethoscope className='text-primary me-2' size={32} />
                                    <h3 className="h1 fw-bold text-primary">New Life Health Care</h3>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright & Policies */}
                <div className="text-center text-muted py-3 border-top" style={{ background: " rgba(128, 224, 254, 0.16)", marginBottom: "-50px" }}>
                    <div className="d-flex justify-content-center align-items-center flex-wrap gap-4">
                        <p className="mb-0 small">&copy; 2025 New Life Healthcare</p>
                        <a href="#" className="text-muted small text-decoration-none">Terms</a>
                        <a href="#" className="text-muted small text-decoration-none">Privacy</a>
                        <a href="#" className="text-muted small text-decoration-none">Sitemap</a>
                        <div className="d-flex gap-3">
                            <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                                <img src="https://images.freeimages.com/image/large-previews/b2e/x-twitter-black-isolated-logo-5694253.png"
                                    alt="Twitter" width="30" height="30" />
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <img src="https://static.vecteezy.com/system/resources/thumbnails/018/930/460/small/instagram-logo-instagram-icon-transparent-free-png.png"
                                    alt="Instagram" width="30" height="30" />
                            </a>
                            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                <img src="https://static.vecteezy.com/system/resources/thumbnails/053/408/038/small/facebook-icon-with-round-line-and-transparent-background-free-png.png"
                                    alt="Facebook" width="30" height="30" />
                            </a>
                        </div>
                    </div>
                </div>


            </footer>
        </>
    );
};

export default Contact;

