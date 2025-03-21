import { Mail, MapPin, Phone } from 'lucide-react';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';

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
                                    <p className="text-dark mb-0">Greams Lane, Chennai - 600006</p>
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
                                        title="Apollo Hospital Chennai Location"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.2265016017386!2d80.2134287!3d13.0631824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52666accdfbb59%3A0x2e0d1b10a5e06d2f!2sApollo%20Hospital%20Greams%20Lane%20Chennai!5e0!3m2!1sen!2sin!4v1711050912395"
                                        width="100%"
                                        height="400px"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade">
                                    </iframe>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="py-5 border-top" style={{ background: "linear-gradient(180deg, rgba(184, 218, 228, 0.16), rgba(184, 218, 228, 0.4))" }}>
                <div className="container">
                    <div className="row justify-content-between">
                        {/* Brand Name */}
                        <div className="col-md-3">
                            <h3 className="h5 fw-bold text-primary">New Life Healthcare</h3>
                        </div>

                        {/* Footer Grid */}
                        <div className="col-md-9">
                            <div className="row">
                                {/* About Section */}
                                <div className="col-md-3">
                                    <h5 className="fw-semibold mb-3">About</h5>
                                    <ul className="list-unstyled">
                                        <li>About New Life</li>
                                        <li>How it Works</li>
                                        <li>Careers</li>
                                        <li>Press</li>
                                    </ul>
                                </div>

                                {/* Support Section */}
                                <div className="col-md-3">
                                    <h5 className="fw-semibold mb-3">Support</h5>
                                    <ul className="list-unstyled">
                                        <li>Help Center</li>
                                        <li>Contact Us</li>
                                        <li>Privacy Policy</li>
                                        <li>Terms of Service</li>
                                    </ul>
                                </div>

                                {/* Get the App Section */}
                                <div className="col-md-3">
                                    <h5 className="fw-semibold mb-3">Get the App</h5>
                                    <ul className="list-unstyled">
                                        <li>New life care for android</li>
                                        <li>New life care for ios</li>
                                        <li>Mobile site</li>

                                        <li>
                                            <a href="https://www.apple.com/eg/app-store/" target="_blank" rel="noopener noreferrer">
                                                <img src="https://flightbookings-xi.vercel.app/images/app-store.png"
                                                    alt="Download on the App Store"
                                                    style={{ width: "150px", height: "50px", marginTop: "10px" }} />
                                            </a>
                                        </li>
                                        <li className="mt-2">
                                            <a href="https://play.google.com/store/games?device=windows" target="_blank" rel="noopener noreferrer">
                                                <img src="https://flightbookings-xi.vercel.app/images/google-play.png"
                                                    alt="Get it on Google Play"
                                                    style={{ width: "150px", height: "50px" }} />
                                            </a>
                                        </li>
                                    </ul>
                                </div>


                                {/* Code of Ethics */}
                                <div className="col-md-3">
                                    <h5 className="fw-semibold mb-3">Code of Ethics</h5>
                                    <p className="small">
                                        CRCC has adopted a Code of Professional Ethics for its Certified Rehabilitation Counselors.
                                        <a href="#"> Learn More</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright & Policies */}
                <div className="text-center text-muted py-3 border-top"  style={{ background: " rgba(128, 224, 254, 0.16)", marginBottom:"-50px"}}>
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

