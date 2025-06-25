import React, { useState } from 'react';
import './doctors.css';

const allDoctors = [
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
  },
  // 👇 Additional doctors for "See More"
  {
    name: "Dr. Ramesh Gupta",
    specialization: "Endocrinologist",
    experience: "11 years",
    availability: "Tue-Sat, 9am-4pm",
    image: "https://t4.ftcdn.net/jpg/03/20/52/31/360_F_320523164_tx7Rdd7I2XDTvvKfz2oRuRpKOPE5z0ni.jpg"
  },
  {
    name: "Dr. Swathi Iyer",
    specialization: "Oncologist",
    experience: "14 years",
    availability: "Mon-Wed, 10am-6pm",
    image: "https://t3.ftcdn.net/jpg/03/13/77/82/360_F_313778250_Y0o5can6MA490Nt7G6p03Zfu5fKmWCIv.jpg"
  },
  {
    name: "Dr. Mahesh Kumar",
    specialization: "Pulmonologist",
    experience: "13 years",
    availability: "Mon-Fri, 10am-4pm",
    image: "https://img.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-standing-hospital-corridor_171337-5056.jpg"
  },
  {
    name: "Dr. Sneha Reddy",
    specialization: "Psychiatrist",
    experience: "9 years",
    availability: "Wed-Sun, 12pm-7pm",
    image: "https://t4.ftcdn.net/jpg/02/20/30/45/360_F_220304581_3BRbk3UhoYrcVlt72fdBcVRHBtHAKuvD.jpg"
  }
];

export default function Doctors() {
  const [showAll, setShowAll] = useState(false);
  const visibleDoctors = showAll ? allDoctors : allDoctors.slice(0, 6);

  return (
    <section className="doctor-section">
      <h2 className=" h3 fw-bold text-center mb-4 text-dark display-4">Specalist Doctors</h2>

      <div className="doctor-grid">
        {visibleDoctors.map((doc, index) => (
         <div className="doctor-card" key={index}>
  <img src={doc.image} alt={doc.name} className="doctor-img" />
  <div className="doctor-info">
    <h3 className="doctor-name">{doc.name}</h3>
    <p className="doctor-specialization">{doc.specialization}</p>
    <p className="doctor-experience">Experience: {doc.experience}</p>
    <p className="doctor-availability">Available: {doc.availability}</p>
    <a href="#appointment" className="btn-book-appointment">Book Appointment</a>
  </div>
</div>

        ))}
      </div>

      <div className="btn-container" style={{ marginTop: '30px', textAlign: 'center' }}>
  <button
    className="see-more-btn"
    onClick={() => setShowAll(prev => !prev)}
  >
    {showAll ? 'Show Less' : 'See More Doctors'}
  </button>
</div>

    </section>
  );
}

