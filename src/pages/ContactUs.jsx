import { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      // Here you would typically send the data to a backend API
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-info-section">
            <div className="contact-header">
              <span className="contact-header-icon">📞</span>
              <h1>Get in Touch</h1>
              <p>
                We'd love to hear from you! Send us a message and we'll respond
                as soon as possible.
              </p>
            </div>

            <div className="info-cards">
              <div className="info-card">
                <div className="info-icon">📍</div>
                <h3>Visit Us</h3>
                <p>
                  123 Digital Avenue
                  <br />
                  Tech City, TC 12345
                  <br />
                  United States
                </p>
              </div>

              <div className="info-card">
                <div className="info-icon">📧</div>
                <h3>Email Us</h3>
                <p>
                  support@dynamiccatalog.com
                  <br />
                  sales@dynamiccatalog.com
                </p>
              </div>

              <div className="info-card">
                <div className="info-icon">📞</div>
                <h3>Call Us</h3>
                <p>
                  +1 (555) 123-4567
                  <br />
                  Mon-Fri, 9am-6pm EST
                </p>
              </div>
            </div>

            <div className="business-hours">
              <h3>Business Hours</h3>
              <div className="hours-list">
                <div className="hour-item">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="hour-item">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="hour-item">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <div className="form-card">
              <h2>Send us a Message</h2>
              {submitted && (
                <div className="success-message">
                  ✓ Thank you for your message! We'll get back to you soon.
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={errors.name ? "error" : ""}
                  />
                  {errors.name && (
                    <span className="error-message">{errors.name}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className={errors.email ? "error" : ""}
                  />
                  {errors.email && (
                    <span className="error-message">{errors.email}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this regarding?"
                    className={errors.subject ? "error" : ""}
                  />
                  {errors.subject && (
                    <span className="error-message">{errors.subject}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please provide details about your inquiry..."
                    className={errors.message ? "error" : ""}
                  ></textarea>
                  {errors.message && (
                    <span className="error-message">{errors.message}</span>
                  )}
                </div>

                <button type="submit" className="submit-btn">
                  Send Message ✉️
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
