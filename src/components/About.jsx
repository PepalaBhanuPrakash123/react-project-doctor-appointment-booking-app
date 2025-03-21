import { Stethoscope } from 'lucide-react';
import React from 'react';
import '../index.css'

const testimonials = [
    {
        name: "Rohan",
        location: "Hyderabad",
        date: "Nov 2025",
        text: "The hospital staff was supportive and professional. The clean and organized atmosphere made me feel comfortable. The doctor explained everything clearly and provided excellent care. I truly appreciate the attention and kindness I received throughout my treatment."
    },
    {
        name: "Meenakshi",
        location: "Bangalore",
        date: "Jan 2025",
        text: "The nurses were friendly, and the staff ensured a smooth process. The hospital had a peaceful and welcoming environment. The doctor was patient, knowledgeable, and reassuring. I highly recommend this hospital for its exceptional service and care."
    },
    {
        name: "Sanjay",
        location: "Chennai",
        date: "Feb 2025",
        text: "The staff was kind and well-trained, ensuring a comfortable experience. The hospital was clean and calming. The doctor was professional and attentive, answering all my questions. I felt confident in my treatment and highly recommend this hospital."
    },
    {
        name: "Ram",
        location: "Mumbai",
        date: "Mar 2025",
        text: "The care I received was exceptional. The doctors were thorough, and the staff was supportive and attentive. The hospital’s clean environment made my stay comfortable. Every procedure was handled professionally, and their kindness stood out. I truly appreciate the compassionate care and dedication to patient well-being."
    },
    {
        name: "Priya",
        location: "Delhi",
        date: "Apr 2025",
        text: "The hospital has advanced medical facilities and a highly professional staff. My experience was smooth and comfortable, with excellent care from consultation to treatment. I highly recommend this hospital for anyone seeking quality healthcare and top-notch medical services."
    },
    {
        name: "Ankit",
        location: "Kolkata",
        date: "May 2025",
        text: "From the moment I arrived, I was welcomed with kindness and care. The hospital's comforting environment eased my worries, and the doctors provided exceptional treatment. Their professionalism and compassion made my experience truly reassuring and positive."
    }
];

const About = () => {
    return (
        <section className='min-vh-100 pt-5 pb-5 px-3 sm:px-4 lg:px-5 position-relative mt-0'>
            <div className='container px-4'>
                <div
                    className='w-100 bg-cover bg-center rounded p-4 d-flex align-items-center justify-content-center'
                    style={{
                        backgroundImage: "url('https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JvdXAlMjBvZiUyMGRvY3RvcnN8ZW58MHx8MHx8fDA%3D')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundAttachment: "fixed",
                        width: "100%",
                        minHeight: "100vh",
                        marginTop: "-50px"
                    }}
                >

                    <div className='text-center d-flex flex-column align-items-center justify-content-center'>
                        <h1 className="display-4 fw-bold text-dark mb-4 animate__animated animate__fadeInUp">
                            Your Health Our Priority
                        </h1>
                        <p className="fs-4 text-dark mb-3 animate__animated animate__fadeIn animate__delay-1s">
                            Comprehensive Healthcare Services with Compassion
                        </p>

                        <div className='d-inline-block mb-4'>
                            <div className="d-flex align-items-center justify-content-center gap-2 rounded-pill px-4 py-2 shadow-lg" style={{ backdropFilter: 'blur(10px)' }}>
                                <span className="position-relative d-flex" style={{ height: '12px', width: '12px' }}>
                                    <span className="position-absolute w-100 h-100 rounded-circle bg-dark opacity-75 pulse-animation"></span>
                                    <span className="position-relative rounded-circle w-100 h-100 bg-primary"></span>
                                </span>
                                <span className="fw-bold" style={{ background: 'linear-gradient(to right, #3b82f6, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                    24/7 Support Available
                                </span>
                            </div>

                        </div>
                        <a href='#appointment' className='font-bold btn btn-primary px-5 py-3 rounded-pill text-white fs-4 mt-3'>
                            Book Appointment
                        </a>

                    </div>
                </div>

                <section className="row mt-5">
                    <div className="container">
                        <div className="row g-4">
                            {[
                                { title: "General Checkup", desc: "Comprehensive health evaluations", img: <Stethoscope size={48} className="text-dark" /> },
                                { title: "Specialist Care", desc: "Expert doctors across specialties", img: <img src="https://cdn-icons-png.flaticon.com/256/1021/1021799.png" alt="Specialist Care" width={55} /> },
                                { title: "Emergency Service", desc: "24/7 emergency medical service", img: <img src="https://png.pngtree.com/png-clipart/20230417/original/pngtree-emergency-services-line-icon-png-image_9063811.png" alt="Emergency" width={61} /> },
                                { title: "Health Screening", desc: "Preventive checkups for early detection", img: <img src="https://cdn-icons-png.flaticon.com/512/4773/4773146.png" alt="Health Screening" width={55} /> },
                                { title: "Pediatric Care", desc: "Dedicated healthcare for children", img: <img src="https://png.pngtree.com/png-vector/20220724/ourmid/pngtree-pediatrics-icon-infant-symbol-baby-vector-png-image_38127780.png" alt="Pediatric Care" width={70} /> },
                                { title: "Mental Health Services", desc: "Support and counseling for well-being", img: <img src="https://cdn-icons-png.flaticon.com/512/1111/1111512.png" alt="Mental Health" width={50} /> }
                            ].map((service, index) => (
                                <div key={index} className="col-md-4">
                                    <div className="p-4 rounded shadow text-center d-flex flex-column align-items-center"
                                        style={{ background: "linear-gradient(180deg, rgba(184, 218, 228, 0.16),  rgba(184, 218, 228, 0.4))", minHeight: "220px" }}>
                                        <div className="mb-3">{service.img}</div>
                                        <h3 className="h5 fw-bold text-dark mb-2">{service.title}</h3>
                                        <p className="text-dark">{service.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </div>

            <section id="about" className="mt-5">
                <h2 className="h3 fw-bold text-center mb-4 text-dark display-4">Explore More Information</h2>
                <div className="row">
                    {[
                        {
                            title: "Hospital Staff",
                            description: "The staff at New Life Health Care is a team of highly skilled professionals, including doctors, nurses, and support personnel, dedicated to providing compassionate, patient-centered care with expertise and commitment.",
                            image: "https://images.squarespace-cdn.com/content/v1/57a6a44d2994ca6cbb9460b6/1629599061796-YGINKYJNO8JVNWVP5ZBK/IMG_1290.jpeg?format=1500w"
                        },
                        {
                            title: "Medical Research & Innovation",
                            description: "New Life Health Care is equipped with state-of-the-art medical technology and advanced diagnostic tools, ensuring precise treatment and effective care.",
                            image: "https://sciencebusiness.net/sites/default/files/styles/article/public/2021-06/bigstock-Scientist-Using-Digital-Tablet-413231959.jpg?itok=iVHDhRcl"
                        },
                        {
                            title: "Overview of Hospital",
                            description: "New Life Health Care is a network of healthcare facilities offering expert medical care across multiple specialties, providing accessible, high-quality, and compassionate services.",
                            image: "https://images.squarespace-cdn.com/content/v1/585d2dd6f5e2319c203c74a4/1655779784716-DYHGG5UDVJM2NSW9MBV2/20220617192056.jpg"
                        },
                        {
                            title: "Emergency Services",
                            description: "Our hospital provides 24/7 emergency services with specialized trauma care and quick response teams ensuring timely and expert medical attention.",
                            image: "https://media.istockphoto.com/id/2191183979/photo/diverse-emergency-medical-team-rushing-down-a-hospital-corridor-carefully-pushing-a-stretcher.jpg?s=2048x2048&w=is&k=20&c=CsRxH9FrizPePZvldWSM7vPpV1-zdEDbvm8rb2MghJc="
                        },
                        {
                            title: "Patient Care",
                            description: "We prioritize patient comfort with high-quality healthcare, modern facilities, and a compassionate approach to ensure a positive healing experience.",
                            image: "https://www.shutterstock.com/image-photo/healthcare-documents-medical-team-doctors-600nw-2376137623.jpg"
                        },
                        {
                            title: "Advanced Surgery Unit",
                            description: "Equipped with cutting-edge technology, our surgery unit handles complex procedures with precision, ensuring safety and the best outcomes for patients.",
                            image: "https://static.vecteezy.com/system/resources/thumbnails/046/702/388/small/modern-medical-technology-concept-surgery-operating-room-with-advanced-equipment-in-hospital-photo.jpg"
                        }
                    ].map((place, index) => (
                        <div key={index} className="col-md-4 mb-4 d-flex">
                            <div
                                className="rounded shadow overflow-hidden hover-shadow-lg transition-shadow w-100 d-flex flex-column"
                                style={{ background: "linear-gradient(180deg, rgba(184, 218, 228, 0.16), rgba(161, 233, 255, 0.4))" }}
                            >
                                <img src={place.image} alt={place.title} className="w-100" style={{ height: "12rem", objectFit: "cover" }} />
                                <div className="p-3 flex-grow-1 d-flex flex-column">
                                    <h3 className="h5 fw-bold text-dark mb-2">{place.title}</h3>
                                    <p className="text-muted flex-grow-1">{place.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            <Testimonials />
        </section>
    );
};

const Testimonials = () => {
    return (
        <section className="container py-5">
            <h1 className="text-center fw-bold mb-4 display-4">Patients Testimonials</h1>
            <div className="row">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div
                            className="p-4 rounded shadow text-dark text-center border border-dark d-flex flex-column justify-content-between h-100"
                            style={{
                                minHeight: "280px", // Ensures equal height
                                background: "linear-gradient(180deg, rgba(184, 218, 228, 0.16), rgba(184, 218, 228, 0.4))",
                                fontStyle: "italic",
                                transition: "transform 0.3s ease-in-out",
                                borderRadius: "12px",
                                borderWidth: "2px",
                                borderStyle: "solid",
                                borderColor: "black" // Dark color for the border
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                        >
                            <p className="flex-grow-1">"{testimonial.text}"</p>
                            <div>
                                <h5 className="fw-bold mt-3">{testimonial.name}</h5>
                                <p className="mb-1">{testimonial.location}</p>
                                <small>{testimonial.date}</small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    );
};

export default About;


