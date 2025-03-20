import React from 'react';

const doctorsList = [
    {
        name: "Dr. Bhanu Prakash",
        specialization: "Cardiologist",
        experience: "15 years",
        availability: "Mon-Wed, 9am-5pm",
        image: "https://img.freepik.com/premium-photo/healthcare-medical-staff-concept-portrait-smiling-male-doctor-posing-with-folded-arms-grey-studio-background-free-space-professional-general-practitioner_396607-89084.jpg"
    },
    {
        name: "Dr. Yasaswini",
        specialization: "Neurosurgeon",
        experience: "12 years",
        availability: "Thu-Sat, 10am-6pm",
        image: "https://static.vecteezy.com/system/resources/previews/035/326/727/large_2x/ai-generated-a-female-doctor-in-uniform-standing-with-folded-arms-and-stethoscope-free-photo.jpg"
    },
    {
        name: "Dr. Pryashini",
        specialization: "Gynecologist",
        experience: "10 years",
        availability: "Tue-Fri, 8am-4pm",
        image: "https://static.vecteezy.com/system/resources/previews/028/287/555/large_2x/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg"
    },
    {
        name: "Dr. Tarak",
        specialization: "Orthopedic Surgeon",
        experience: "8 years",
        availability: "Mon-Sat, 11am-7pm",
        image: "https://img.freepik.com/premium-photo/young-indian-male-doctor-with-little-smile_973056-9.jpg"
    },
    {
        name: "Dr. Niharika",
        specialization: "Dermatologist",
        experience: "9 years",
        availability: "Wed-Sun, 10am-5pm",
        image: "https://img.freepik.com/premium-photo/pleased-young-female-doctor-wearing-medical-robe_521733-9643.jpg"
    },
    {
        name: "Dr. Anjali",
        specialization: "Pediatrician",
        experience: "7 years",
        availability: "Mon-Fri, 9am-3pm",
        image: "https://img.freepik.com/premium-photo/young-female-doctor-white-coat-green-background_1009902-5933.jpg"
    }
];

const Doctors = () => {
    return (
        <section id="doctor" className="min-vh-100 py-5 px-4 mt-0">
            <div className="container" >
            <h1 className="text-dark fw-bold text-center mb-4 display-4">Our Doctors</h1>
                <div className="row g-4">
                    {doctorsList.map((doctor, index) => (
                        <div key={index} className="col-md-4" >
                            <div className="card shadow-sm text-center p-3" style={{ backgroundColor: "#f0f0f0" }}>
                                <img 
                                    src={doctor.image} 
                                    alt={doctor.name} 
                                    className="card-img-top rounded" 
                                    style={{ height: '220px', objectFit: 'cover' }}
                                />
                                <div className="card-body" style={{ backgroundColor: "#f0f0f0" }}>
                                    <h5 className="card-title fw-semibold">{doctor.name}</h5>
                                    <p className="text-muted mb-1">{doctor.specialization}</p>
                                    <p className="text-secondary mb-1">Experience: {doctor.experience}</p>
                                    <p className="text-secondary mb-3">Availability: {doctor.availability}</p>
                                    <a href="#appointment" className="btn btn-primary w-100">Book Appointment</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Doctors;

