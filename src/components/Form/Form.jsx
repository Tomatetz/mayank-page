import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Form as BootstrapForm } from 'react-bootstrap';
import { FormHeader, FormStyled, Label } from './form.styled';
import axios from 'axios';

export const Form = ({ closeModal }) => {
  const [formValues, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { data } = await axios.post(`${process.env.REACT_APP_MY_HEROKU_URL}/api/contact-forms`, {
      data: formValues,
    });
    if (data.data) {
      closeModal();
    }
  };
  return (
    <FormStyled onSubmit={handleSubmitForm}>
      <FormHeader>Contact Mayank</FormHeader>
      <div className="mb-5">Let's talk!</div>
      <BootstrapForm.Group className="mb-4" controlId="name">
        <Label>Name*</Label>
        <BootstrapForm.Control
          placeholder=""
          required
          onChange={({ target: { value: name } }) => setForm({ ...formValues, name })}
        />
      </BootstrapForm.Group>
      <BootstrapForm.Group className="mb-4" controlId="email">
        <Label>Email*</Label>
        <BootstrapForm.Control
          type="email"
          placeholder=""
          required
          onChange={({ target: { value: email } }) => setForm({ ...formValues, email })}
        />
      </BootstrapForm.Group>
      <BootstrapForm.Group className="mb-4" controlId="message">
        <Label>Message*</Label>
        <BootstrapForm.Control
          as="textarea"
          style={{ height: '100px' }}
          placeholder=""
          required
          onChange={({ target: { value: message } }) => setForm({ ...formValues, message })}
        />
      </BootstrapForm.Group>
      <Button variant="primary" type="submit" style={{ width: '100%', fontWeight: 500 }}>
        Submit
      </Button>
    </FormStyled>
  );
};
