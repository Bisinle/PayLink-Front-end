import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import Faqs from './Faqs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Helppage.css';

const Helppage = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstname: '',
    Lastname: '',
    details: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://your-server-url.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      // Handle a successful response (e.g., show a success message)
      alert('Message sent successfully!');
      // Clear the form after successful submission
      setFormData({
        email: '',
        firstname: '',
        Lastname: '',
        details: '',
      });
    } catch (error) {
      // Handle an error (e.g., show an error message)
      alert('Error sending the message. Please try again later.');
    }
  };

  return (
    <div className="py-5">
      <Container>
      <h1 className="mb-4 font-weight-bold">Contact Us</h1>
        <p>
          Welcome to our Contact Us page! If you have any questions, suggestions, or feedback, we'd love to hear from you.
          Our team is dedicated to providing the best possible experience for our users, and your input is invaluable in helping us improve.
          Please feel free to fill out the form below with your details and message. We'll get back to you as soon as possible.
          Thank you for being a part of our community. We appreciate your support and look forward to connecting with you!
        </p>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="name@example.com" value={formData.email} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" name="firstname" placeholder="First Name" value={formData.firstname} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" name="Lastname" placeholder="Last Name" value={formData.Lastname} onChange={handleInputChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Details</Form.Label>
            <Form.Control as="textarea" name="details" rows={3} value={formData.details} onChange={handleInputChange} />
          </Form.Group>
          <button type="submit" className="btn btn-secondary btn-primary-hover" style={{ display: 'block' }}>
            Send Message
          </button>
        </Form>
        <h2 className="mt-5">FAQs</h2>
        <Faqs />
      </Container>
    </div>
  );
};

export default Helppage;
