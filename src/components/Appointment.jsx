import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    doctor: '',
    date: '',
    reason: ''
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
        text: "Appointment Booked Successfully",
        icon: "success"
      });
    }
  };

  return (
    <section id="appointment" className="min-vh-100 pt-0 py-5 px-3">
      <div className="container">
        <div className="col-md-6 mx-auto rounded shadow p-4" style={{ backgroundColor: "#FAFAFA" }} >
          <h2 className="text-primary fw-bold text-center mb-4">Book Appointment</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label text-dark">Full Name</label>
              <input
                type="text"
                name="name"
                required
                onChange={handleChange}
                placeholder="Enter your full name"
                className="form-control bg-light text-dark"
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-dark">Email</label>
              <input
                type="email"
                name="email"
                required
                onChange={handleChange}
                placeholder="Enter your email"
                className="form-control bg-light text-dark"
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-dark">Phone</label>
              <input
                type="tel"
                name="phone"
                required
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="form-control bg-light text-dark"
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-dark">Select Doctor</label>
              <select
                name="doctor"
                required
                onChange={handleChange}
                className="form-select bg-white text-dark"
              >
                <option value="">Select a Doctor</option>
                <option>Dr. Bhanu Prakash - Cardiology</option>
                <option>Dr. Yasaswini - Neurosurgeon</option>
                <option>Dr. Pryashini - Gynecologist</option>
                <option>Dr. Tarak - Orthopedic Surgeon</option>
                <option>Dr. Niharika - Dermatologist</option>
                <option>Dr. Maneesha - Pediatrician</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label text-dark">Date</label>
              <input
                type="date"
                name="date"
                required
                onChange={handleChange}
                className="form-control bg-white text-dark"
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-dark">Reason for Visit</label>
              <textarea
                name="reason"
                required
                onChange={handleChange}
                placeholder="Enter your reason"
                className="form-control bg-white text-dark"
              />
            </div>
            <button
              type="submit"
              className="w-100 btn btn-primary py-2 rounded-pill fw-bold"
            >
              Confirm Appointment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Appointment;

