import { useState } from "react"
import { toast } from "react-toastify"
import axios from "axios"
import './styles/contact.css'

export type ContactType = {
  name: string
  email: string
  message: string
}

const BASE_URL = import.meta.env.VITE_BASE_URL

function Contact() {
  const [formData, setFormData] = useState<ContactType>({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await axios.post(`${BASE_URL}/contact/`, formData)
      toast.success("Message sent successfully! 🎉")
      setFormData({ name: "", email: "", message: "" })
    } catch (err) {
      toast.error("Failed to send message. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <p className="contact-subtitle">
        Have a question or want to work together? Drop me a message!
      </p>
      <div className="contact-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <textarea
              rows={5}
              placeholder="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="form-input form-textarea"
            />
          </div>
          <button 
            type="submit" 
            className="submit-btn"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact