"use client"

import React, { useState } from 'react';
import axios from 'axios';
import { MdEmail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';

const Page = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3002/contact', {
        name,
        email,
        message,
      });

      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
      <div style={{ flex: 1, padding:"10px" }}>
        <h1>Contact</h1>
        <form onSubmit={handleSubmit} style={{ maxWidth: '300px' }}>
          <div>
            <label htmlFor="name" style={{ fontSize: '16px', marginBottom: '8px', display: 'block' }}>Name:</label>
            <input type="text" name="name" value={name} onChange={handleName}  style={{ width: '100%', padding: '8px', border: '1px solid #666', borderRadius: '4px' }} />
          </div>
          <br />
          <div>
            <label htmlFor="email" style={{ fontSize: '16px', marginBottom: '8px', display: 'block' }}>Email:</label>
            <input type="text" name="email" value={email} onChange={handleEmail}  style={{ width: '100%', padding: '8px', border: '1px solid #666', borderRadius: '4px' }} />
          </div>
          <br />
          <div>
            <textarea
              name="message"
              value={message}
              onChange={handleMessage}
              style={{ height: '100px', width: '100%', border: '2px solid gray' }}
              placeholder="Type your message..."
            ></textarea>
          </div>
          <br />
          <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', padding: '8px 16px', border: 'none', cursor: 'pointer' }}>
            Send
          </button>
        </form>
      </div>
      <div style={{ flex: 1, padding:"10px" }}>
        <h1>Contact Info</h1>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
            <MdEmail style={{ marginRight: '8px' }} />
            <h4>kabbo2022650@gmail.com</h4>
          </li>
          <li style={{ marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
            <FaPhone style={{ marginRight: '8px' }} />
            <h4>+8801984451280</h4>
          </li>
          <li style={{ display: 'flex', alignItems: 'center' }}>
            <FaLocationDot style={{ marginRight: '8px' }} />
            <h4>Pubail, Gazipur, Dhaka, Bangladesh</h4>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Page;

