import "bootstrap/dist/css/bootstrap.min.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_g8c7soc",
        "template_1djdr8x",
        form.current,
        "ViQ-UHtFDV_B_vDFq"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent");
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message");
        }
      );
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Contact Us</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="to_name"
            className="form-control"
            id="name"
            placeholder="Enter Your Name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="from_name"
            className="form-control"
            id="email"
            placeholder="Enter Your Email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            name="message"
            className="form-control"
            id="message"
            rows="5"
            placeholder="Enter Your Message"
            required
          />
        </div>
        <button type="submit" value="Send" className="btn btn-primary">
          Send Message
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}
