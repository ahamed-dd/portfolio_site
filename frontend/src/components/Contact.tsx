import { useState } from "react"
import { toast } from "react-toastify"
import { Form, Button } from "react-bootstrap"
import axios from "axios"

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

    try {
      await axios.post(`${BASE_URL}/contact/`, formData)
      toast.success("Email sent successfully")
      setFormData({ name: "", email: "", message: "" })
    } catch (err) {
      toast.error("Internal server error")
    }
  }

  return (
    <div>
    <h2>Contact</h2>
    <Form onSubmit={handleSubmit}>
      <Form.Control
        placeholder="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <Form.Control
        placeholder="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <Form.Control
        placeholder="Message"
        as="textarea"
        name="message"
        value={formData.message}
        onChange={handleChange}
      />
      <Button type="submit">Send</Button>
    </Form>
    </div>
  )
}

export default Contact
