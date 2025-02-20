import React, { useState } from 'react'
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
    <section id="appointment" className='min-h-screen bg-gray-50 pt-0 py-32 px-4 sm:px-6 lg:px-8 relative -mt-6'>
      <div className='container mx-auto px-4'>
        <div className='max-w-md mx-auto bg-white rounded-lg shadow-md p-8'>
          <h2 className='text-3xl text-blue-500 font-bold text-center mb-8'>Book Appointment</h2>
          <form onSubmit={onSubmit}>
            <div className='mb-4'>
              <label className='block text-black mb-2'>Full Name</label>
              <input
                type="text"
                name="name"
                required
                onChange={handleChange}
                placeholder="Enter your full name"
                className='w-full px-3 py-2 border rounded-md bg-gray-200 text-black' />
            </div>
            <div className='mb-4'>
              <label className='block text-black mb-2'>Email</label>
              <input
                type="email"
                name="email"
                required
                onChange={handleChange}
                placeholder="Enter your email"
                className='w-full px-3 py-2 border rounded-md bg-gray-200 text-black' />
            </div>
            <div className='mb-4'>
              <label className='block text-black mb-2'>Phone</label>
              <input
                type="tel"
                name="phone"
                required
                onChange={handleChange}
                placeholder="Enter your phone number"
                className='w-full px-3 py-2 border rounded-md bg-gray-200 text-black' />
            </div>

            <div className='mb-4'>
              <label className='block text-black mb-2'>Select Doctor</label>
              <select
                name="doctor"
                required
                onChange={handleChange}
                className='w-full px-3 py-2 border rounded-md bg-white text-black'>
                <option value="">Select a Doctor</option>
                <option>Dr. Bhanu Prakash - Neurosurgeon</option>
                <option>Dr. Yasaswini - cardiology</option>
                <option>Dr. Shilpa - Gynecologists</option>
              </select>
            </div>
            <div className='mb-4'>
              <label className='block text-black mb-2'>Date</label>
              <input
                type="date"
                name="date"
                required
                onChange={handleChange}
                className='w-full px-3 py-2 border rounded-md bg-white text-black' />
            </div>
            <div className='mb-4'>
              <label className='block text-black mb-2'>Reason for Visit</label>
              <textarea
                name="reason"
                required
                onChange={handleChange}
                placeholder="Enter your reason"
                className='w-full px-3 py-2 border rounded-md bg-white text-black' />
            </div>
            <button type='submit'
              className='w-full bg-blue-500 text-white py-3 rounded-full hover:bg-gray-300 hover:text-blue-500 transition'>
              Confirm Appointment
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Appointment;
