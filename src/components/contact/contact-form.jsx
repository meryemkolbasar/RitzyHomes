import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import ButtonSpinner from "../common/button-spinner";
import { createMessage } from "../../api/contact-service";
import { swalAlert } from "../../helpers/swal";
import "./contact-form.scss";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    name: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    lastname: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    message: Yup.string().required("Required"),
  });

  const onSubmit = async (values) => {
    setLoading(true);
    try {
      await createMessage(values);
      formik.resetForm();
      swalAlert("Your message has been sent", "success");
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  function onChange(value) {
    console.log("Captha value:", value);
  }

  return (
    <Form noValidate onSubmit={formik.handleSubmit} className="contact-form">
      <h4>Have a question? Get in touch!</h4>
      <Row className="mt-2 g-2" >
        <Col xs={9} md={8} >
          <Form.Group as={Col} id="name">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              aria-label="First Name"
              aria-describedby="name"
              {...formik.getFieldProps("name")}
              isInvalid={formik.touched.name && formik.errors.name}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.name}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col xs={9} md={8}>
          <Form.Group as={Col} id="lastname">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              aria-label="Last Name"
              aria-describedby="lastname"
              {...formik.getFieldProps("lastname")}
              isInvalid={formik.touched.lastname && formik.errors.lastname}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.lastname}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col xs={9} md={8}>
          <Form.Group as={Col} id="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              aria-label="Email"
              aria-describedby="email"
              {...formik.getFieldProps("email")}
              isInvalid={formik.touched.email && formik.errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.email}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col xs={9} md={8}>
          <Form.Group as={Col} id="message">
            <Form.Label>Message</Form.Label>
            <Form.Control
              required
              as="textarea"
              aria-label="Message"
              aria-describedby="message"
              {...formik.getFieldProps("message")}
              isInvalid={formik.touched.message && formik.errors.message}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.message}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <div style={{marginTop:"15px"}} className="recaptcha" >
      <ReCAPTCHA
        sitekey="6LczH0spAAAAAHdU6lYnlkx8jKxHCxH0PMGtWf1W"
        onChange={onChange}
      />
      </div>
      <Button
        type="submit"
        disabled={!(formik.dirty && formik.isValid) || loading}
        className="mt-3"
      
      >
        {loading && <ButtonSpinner />}
        Send
      </Button>
    </Form>
  );
};

export default ContactForm;