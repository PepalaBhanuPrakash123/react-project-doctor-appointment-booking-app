import { Stethoscope } from 'lucide-react';
import React from 'react';

const About = () => {
    return (
        <section className='min-h-screen bg-gray-50 pt-20 py-32 px-4 sm:px-6 lg:px-8 relative'>
            <div className='container mx-auto px-4'>
                {/* Hero Section with Background Image */}
                <div
                    className='w-full bg-cover bg-center rounded-lg p-8'
                    style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JvdXAlMjBvZiUyMGRvY3RvcnN8ZW58MHx8MHx8fDA%3D')" }}
                >
                    <div className='text-center flex flex-col items-center justify-center'>
                        <h1 className='text-5xl font-bold text-black mb-6 animate-fade-in'>
                            Your Health Our Priority
                        </h1>
                        <p className='text-xl text-black mb-8 animate-fade-in delay-1'>
                            Comprehensive Healthcare Services with Compassion
                        </p>
                        {/* 24/7 Section */}
                        <div className='inline-block mb-8'>
                            <div className='flex items-center justify-center space-x-2 rounded-full px-6 py-3 shadow-lg backdrop-blur-xl'>
                                <span className='relative flex h-3 w-3'>
                                    <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-black-400 opacity-75'></span>
                                    <span className='relative inline-flex rounded-full h-3 w-3 bg-blue-500'></span>
                                </span>
                                <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-grotesk text-base font-semibold'>
                                    24/7 Support Available
                                </span>
                            </div>
                        </div>
                        <a href='#appointment' className='bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-[#00bfff]-700 transition text-lg mt-4'>
                            Book Appointment
                        </a>
                    </div>
                </div>

                {/* Services section */}
                <section className='grid md:grid-cols-3 gap-6 mt-12'>
                    {["General Checkup", "Specialist Care", "Emergency Support"].map((service, index) => (
                        <div key={index} className='bg-white p-6 rounded-lg shadow-md text-center'>
                            <Stethoscope className='mx-auto text-black mb-4' size={48} />
                            <h3 className='text-xl font-semibold text-black mb-3'>{service}</h3>
                            <p className='text-black'>
                                {service === "General Checkup" && "Comprehensive health evaluations"}
                                {service === "Specialist Care" && "Expert doctors across specialties"}
                                {service === "Emergency Support" && "24/7 emergency medical service"}
                            </p>
                        </div>
                    ))}
                </section>

                {/* Unique Places to Stay Section */}
                <section id="about" className='mt-12'>
                    <h2 className='text-3xl font-bold text-center mb-10 text-black'>Explore More Information</h2>
                    <div className='grid md:grid-cols-3 gap-6'>
                        {[
                            {
                                title: "Hospital Staff",
                                description: "The staff at New Life Health Care is a team of highly skilled professionals, including doctors, nurses, and support personnel, dedicated to providing compassionate, patient-centered care with expertise and commitment.",
                                image: "https://images.squarespace-cdn.com/content/v1/57a6a44d2994ca6cbb9460b6/1629599061796-YGINKYJNO8JVNWVP5ZBK/IMG_1290.jpeg?format=1500w"
                            },
                            {
                                title: "Inside Equipments",
                                description: "New Life Health Care is equipped with state-of-the-art medical technology and advanced diagnostic tools, ensuring precise treatment and effective care. The facility is designed to support various specialties and enhance patient outcomes.",
                                image: "https://myblogpod.com/wp-content/uploads/2024/01/logo_make_11_06_2023_377-scaled.jpg"
                            },
                            {
                                title: "Overview of Hospital",
                                description: "New Life Health Care is a network of healthcare facilities offering expert medical care across multiple specialties, providing accessible, high-quality, and compassionate services to patients at various locations, ensuring convenience and reliability.",
                                image: "https://images.squarespace-cdn.com/content/v1/585d2dd6f5e2319c203c74a4/1655779784716-DYHGG5UDVJM2NSW9MBV2/20220617192056.jpg"
                            }
                        ].map((place, index) => (
                            <div key={index} className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300'>
                                <img src={place.image} alt={place.title} className='w-full h-48 object-cover' />
                                <div className='p-6'>
                                    <h3 className='text-xl font-semibold text-black mb-3'>{place.title}</h3>
                                    <p className='text-gray-600'>{place.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className='bg-white p-10 rounded-lg shadow-lg mt-12'>
                    <h2 className='text-3xl font-bold text-center mb-10 text-black'>Patient Testimonials</h2>
                    <div className='flex justify-center gap-4 flex-wrap'>
                        {[
                            {
                                name: "Praveen",
                                location: "Hyderabad",
                                date: "Nov 2025",
                                text: "The hospital staff was supportive and professional. The clean and organized atmosphere made me feel comfortable. The doctor explained everything clearly and provided excellent care. I truly appreciate the attention and kindness I received throughout my treatment."
                            },
                            {
                                name: "Niharika",
                                location: "Banglore",
                                date: "Jan 2025",
                                text: "The nurses were friendly, and the staff ensured a smooth process. The hospital had a peaceful and welcoming environment. The doctor was patient, knowledgeable, and reassuring. I highly recommend this hospital for its exceptional service and care."
                            },
                            {
                                name: "Naveen",
                                location: "Chennai",
                                date: "Feb 2025",
                                text: "The staff was kind and well-trained, ensuring a comfortable experience. The hospital was clean and calming. The doctor was professional and attentive, answering all my questions. I felt confident in my treatment and highly recommend this hospital."
                            }
                        ].map((testimonial, index) => (
                            <div key={index} className='bg-gray-100 p-4 w-64 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105'>
                                <p className='italic text-black mb-3 text-sm'>"{testimonial.text}"</p>
                                <p className='font-semibold text-black text-base'>- {testimonial.name}</p>
                                <p className='text-xs text-gray-600'>{testimonial.location} | {testimonial.date}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </section>
    );
};

export default About;
