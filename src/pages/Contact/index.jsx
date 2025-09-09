import React, { useRef, useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
    subject: "",
  });
  const form = useRef();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(e);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form, "form");
    emailjs
      .sendForm(
        "service_teov6u6",
        "template_jl7s4mq",
        document.getElementById("contact-form"),
        {
          publicKey: "8VWY22zzdrQnPqSQb",
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );

    setFormData({
      from_name: "",
      from_email: "",
      message: "",
      subject: "",
    });
  };

  return (
    <Row className="contact-container g-0 py-5  " id="Contact">
      <div className="w-100 p-5 ">
        <div className="d-flex ">
          <div className="divider-1 me-3">
            {" "}
            <span></span>
          </div>
          <h3 className="heading-1">Contact</h3>
        </div>
        <div className="contact-me  ">Get in Touch</div>
      </div>

      <Row className="pb-5">
        <Col sm={6} className=" d-flex align-items-center p-5 pt-0">
          <div className="w-100">
            <Form onSubmit={handleSubmit} ref={form} id="contact-form">
              <FormGroup>
                <Label for="from_name" hidden>
                  Password
                </Label>
                <Input
                  id="from_name"
                  name="from_name"
                  placeholder="Name"
                  type="text"
                  onChange={handleChange}
                  className="py-2"
                  value={formData.from_name}
                  required
                />
              </FormGroup>{" "}
              <FormGroup>
                <Label for="reply_to" hidden>
                  Email
                </Label>
                <Input
                  id="reply_to"
                  name="reply_to"
                  placeholder="Email"
                  type="email"
                  onChange={handleChange}
                  className="py-2"
                  value={formData.email}
                  required
                />
              </FormGroup>{" "}
              <FormGroup>
                <Label for="subject" hidden>
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  onChange={handleChange}
                  type="text"
                  row="1"
                  className="py-2"
                  value={formData.subject}
                  required
                />
              </FormGroup>{" "}
              <FormGroup>
                <Label for="message" hidden>
                  Message
                </Label>
                <Input
                  id="message"
                  name="message"
                  placeholder="Message"
                  type="textarea"
                  className="py-2"
                  rows="5"
                  onChange={handleChange}
                  value={formData.message}
                  required
                />
              </FormGroup>{" "}
              <Button size="lg" className="w-100">
                Submit Message
              </Button>
            </Form>
          </div>
        </Col>
        <Col
          sm={6}
          className=" d-flex align-items-center justify-content-center p-5 pt-0"
        >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.031882354169!2d75.85268217349476!3d22.689857028665916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fdae159b826d%3A0x5d596a7e01662567!2sHolkar%20apartment%20A%26B!5e0!3m2!1sen!2sin!4v1753791578711!5m2!1sen!2sin"
            width="600"
            height="370"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="my-map"
          ></iframe>
        </Col>
      </Row>
    </Row>
  );
};

export default Contact;
