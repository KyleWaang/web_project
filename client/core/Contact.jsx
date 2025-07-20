import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact() {
  // Navigation hook from React Router to redirect user
  const navigate = useNavigate()

  // State to track form input fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    message: ''
  })

  // Update form state when input fields change
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault() // Prevent page reload

    // Log the captured form data (for now)
    console.log('Contact form submitted:', contactForm)

    // Redirect to the Home Page after submission
    navigate('/')
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Contact Us</h1>

      <p>We're here to help you make the most of your MapleStory journey. Whether you have a question, feedback, or need technical support, reach out to us through any of the following channels:</p>

      <h2>Customer Support Portal</h2>
      <p>Visit our Help Center for FAQs, live chat, and ticket submission:</p>
      <p><a href="https://playersupport.nexon.com/hc/en-us">https://playersupport.nexon.com/hc/en-us</a></p>

      <h2>Official Social Media</h2>
      <p>Stay up to date with announcements, events, and community highlights:</p>
      <p>Facebook: <a href="https://www.facebook.com/maplestory">https://www.facebook.com/maplestory</a></p>
      <p>Twitter: <a href="https://twitter.com/maplestory">https://twitter.com/maplestory</a></p>
      <p>Instagram: <a href="https://www.instagram.com/maplestory/">https://www.instagram.com/maplestory/</a></p>

      <h2>Email</h2>
      <p>For business inquiries or press, please contact us at:</p>
      <p><a href="mailto:msu_contact@nexon.co.kr">msu_contact@nexon.co.kr</a></p>

      <p>We value your feedback and strive to provide the best possible gaming experience. Thank you for being part of the MapleStory community—see you in Maple World!</p>
    </div>
  )
}