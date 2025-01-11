import React, { useState } from 'react';
import axios from 'axios';
import './Form.css'; // Import the CSS file for styling

const Form = ({ addUser }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    age: '',
    gender: '',
    address: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users', formData);
      addUser(response.data);
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="fullName">Full Name</label>
        <input type="text" id="fullName" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required minLength="3" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="age">Age</label>
        <input type="number" id="age" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required min="18" />
      </div>
      <div className="form-group">
        <label htmlFor="gender">Gender</label>
        <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="address">Address</label>
        <textarea id="address" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required minLength="10"></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;