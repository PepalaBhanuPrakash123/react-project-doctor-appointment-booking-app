import { Mail, MapPin, Phone } from 'lucide-react';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setSubmitted(true);
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
            <section id="contact" className='min-h-screen bg-gray-50 pt-0 py-32 px-4 sm:px-6 lg:px-8 relative -mt-12'>
                <div className='container mx-auto px-4'>
                    <div className='grid md:grid-cols-2 gap-8'>
                        {/* Contact Form */}
                        <div className='bg-white rounded-lg shadow-md p-8'>
                            <h2 className='text-3xl text-[#00bfff] font-bold mb-8'>Contact Us</h2>
                            <form onSubmit={onSubmit}>
                                <div className='mb-4'>
                                    <label className='block text-black mb-2'>Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        onChange={handleChange}
                                        className='w-full px-3 py-2 border rounded-md bg-white text-black' />
                                </div>
                                <div className='mb-4'>
                                    <label className='block text-black mb-2'>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        onChange={handleChange}
                                        className='w-full px-3 py-2 border rounded-md bg-white text-black' />
                                </div>
                                <div className='mb-4'>
                                    <label className='block text-black mb-2'>Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        onChange={handleChange}
                                        className='w-full px-3 py-2 border rounded-md bg-white text-black' />
                                </div>
                                <div className='mb-4'>
                                    <label className='block text-black mb-2'>Message</label>
                                    <textarea
                                        name="message"
                                        required
                                        onChange={handleChange}
                                        className='w-full px-3 py-2 border rounded-md bg-white text-black' />
                                </div>
                                <button type='submit'
                                    className='w-full bg-blue-400 text-white py-3 rounded-full hover:bg-[#00a5cc] transition'>
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div className='bg-white text-[#00bfff] rounded-lg shadow-md p-8'>
                            <h2 className='text-3xl font-bold mb-8'>Hospital Information</h2>
                            <div className='space-y-4'>
                                <div className='flex items-center'>
                                    <MapPin className='text-black mr-4' size={32} />
                                    <p className='text-black'>Jubille Hills, Hyderabad</p>
                                </div>
                                <div className='flex items-center'>
                                    <Phone className='text-black mr-4' size={32} />
                                    <p className='text-black'>+91 6303524256</p>
                                </div>
                                <div className='flex items-center'>
                                    <Mail className='text-black mr-4' size={32} />
                                    <p className='text-black'>contact@newlifehealthcare.com</p>
                                </div>
                                <div className='mt-8 bg-gray-200 h-64 flex items-center justify-center rounded-lg overflow-hidden'>
                                    <iframe
                                        title="Google Maps Location"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15230.867346364834!2d78.3937083!3d17.4153318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb976634652a37%3A0xeb778fba80ddd5bf!2sApollo%20Hospitals%20Jubilee%20Hills%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1708439000000"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy">
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-white py-12 border-t">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
                    <h3 className="text-2xl font-bold text-[#00bfff]">New Life Healthcare</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div>
                            <h4 className="font-semibold mb-2 text-black">About</h4>
                            <ul className="text-gray-600 space-y-1">
                                <li className="hover:text-black">About New Life</li>
                                <li className="hover:text-black">How it works</li>
                                <li className="hover:text-black">Careers</li>
                                <li className="hover:text-black">Press</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2 text-black">Support</h4>
                            <ul className="text-gray-600 space-y-1">
                                <li className="hover:text-black">Help Center</li>
                                <li className="hover:text-black">Contact us</li>
                                <li className="hover:text-black">Privacy policy</li>
                                <li className="hover:text-black">Terms of service</li>
                                <li className="hover:text-black">Trust and safety</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2 text-black">Get the app</h4>
                            <ul className="text-gray-600 space-y-1">
                                <li className="hover:text-black">New Life for Android</li>
                                <li className="hover:text-black">New Life for iOS</li>
                                <li className="hover:text-black">Mobile site</li>
                            </ul>
                    <div className="mt-4">
                        <a href="https://www.apple.com/eg/app-store/" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://flightbookings-xi.vercel.app/images/app-store.png"
                                alt="Google Play"
                                className="w-32 mb-2"
                            />
                        </a>
                        <a href="https://play.google.com/store/games?device=windows" target="_blank" rel="noopener noreferrer">
                            <img
                                src="https://flightbookings-xi.vercel.app/images/google-play.png"
                                alt="App Store"
                                className="w-32"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div >
            <div className="text-center text-gray-500 text-sm mt-8">
                <hr className="border-t border-gray-300 my-4" />
                © 2025 New Life Healthcare
            </div>
            </footer >
        </>
    );
};

export default Contact;

