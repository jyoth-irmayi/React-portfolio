"use client"

import { useState } from "react"
import { Send, Mail, Phone, MapPin } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
  
    try {
      const response = await fetch("https://formspree.io/f/xeogjgwp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      })
  
      if (response.ok) {
        console.log("Message sent!")
        setSubmitSuccess(true)
        setFormData({ name: "", email: "", message: "" })
      } else {
        alert("Failed to send message. Please try again.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("An error occurred while sending the message.")
    }
  
    setIsSubmitting(false)
    setTimeout(() => setSubmitSuccess(false), 5000)
  }
  

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-title">
          <h2>Get In Touch</h2>
          <div className="divider"></div>
          <p>Have a project in mind or want to discuss potential opportunities? Feel free to reach out!</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-card card">
              <div className="contact-icon">
                <Mail />
              </div>
              <div className="contact-details">
                <h4>Email</h4>
                <a href="mailto:jyothirmayi@example.com">jyothirmayirani289@gmail.com</a>
              </div>
            </div>

            <div className="contact-card card">
              <div className="contact-icon">
                <Phone />
              </div>
              <div className="contact-details">
                <h4>Phone</h4>
                <a href="tel:+1234567890">+91 9037201659</a>
              </div>
            </div>

            <div className="contact-card card">
              <div className="contact-icon">
                <MapPin />
              </div>
              <div className="contact-details">
                <h4>Location</h4> 
                <p>Kochi, Ernakulam</p>
              </div>
            </div>

            <div className="social-links">
              <h3>Follow Me</h3>
              <div className="social-icons">
                <a
                  href="https://github.com/jyoth-irmayi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/rani-jyothirmayi-3755b6344/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send Me a Message</h3>
            <div className="card">
              <form onSubmit={handleSubmit} className="p-6">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Your email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="Your message"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary form-submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <span>
                      <Send size={16} className="mr-2" /> Send Message
                    </span>
                  )}
                </button>
                {submitSuccess && (
                  <div className="form-success">
                    Your message has been sent successfully! I'll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
