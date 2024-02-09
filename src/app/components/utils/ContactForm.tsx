import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Form, Button, Modal } from 'react-bootstrap';
import emailjs from 'emailjs-com';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [showModal, setShowModal] = useState(false);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const templateParams = {
        name: data.name,
        email: data.email,
        message: data.message,
      };

      await emailjs.send(
        'service_7sdf16h',
        'template_14r718o',
        templateParams,
        'user_IA86SbDUjhLZNfcLSCt8p'
      );

      console.log('Email sent successfully!');
      handleShowModal();
      reset();
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <Form onSubmit={handleSubmit(onSubmit)} data-bs-theme="dark">
      <Form.Group controlId="formName" className="py-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && <Form.Text className="text-danger">{errors.name.message}</Form.Text>}
      </Form.Group>

      <Form.Group controlId="formEmail" className="py-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter your email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.email && <Form.Text className="text-danger">{errors.email.message}</Form.Text>}
      </Form.Group>
      {errors.email && <p>{errors.email.message}</p>}

      <Form.Group controlId="formMessage" className="py-3">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          {...register('message', { required: 'Message is required' })}
        />
        {errors.message && <Form.Text className="text-danger">{errors.message.message}</Form.Text>}
      </Form.Group>
      {errors.message && <p>{errors.message.message}</p>}

      <Button variant="outline-primary px-5 mt-3" type="submit">
        Submit
      </Button>

      <Modal show={showModal} onHide={handleCloseModal} centered data-bs-theme="dark">
      <Modal.Header closeButton>
        <Modal.Title>Email Sent Successfully!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Thank you for reaching out. I have received your message and will get back to you as soon as possible.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
      </Modal.Footer>
      </Modal>
    </Form>

  );
};

export default ContactForm;
