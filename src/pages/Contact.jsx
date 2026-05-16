import { useState } from "react";

function Contact({ selectedCourse }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: selectedCourse || "",
    date: "",
    message: "",
  });

  const [confirmation, setConfirmation] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.course === "" ||
      formData.date === ""
    ) {
      setConfirmation("Please fill in all required fields.");
      return;
    }

    setConfirmation(
      `Thank you, ${formData.name}! Your booking request for ${formData.course} has been received.`
    );

    setFormData({
      name: "",
      email: "",
      course: selectedCourse || "",
      date: "",
      message: "",
    });
  }

  return (
    <main>
      <section className="contact-hero">
        <div className="about-content">
          <h1>CONTACT INFORMATION</h1>
        </div>
      </section>

      <section className="contact-content contact-center">
        <h2 className="contact-email">freedivingworld@gmail.com</h2>

        <ul className="contact-list">
          <li>Freediving World</li>
          <li>Ali Al Seblani & Mohamad Jaafoury</li>
          <li>Tripoli/ Lebanon</li>
          <li>Phone: +76 123 456</li>
        </ul>
      </section>

      <section className="contact-content">
        <h2 className="center-title">Booking & Payment</h2>

        <p>
          1. To book a course, send an email to{" "}
          <strong>aliseblani@gmail.com</strong>{" "}
          <strong>mohamadjaafoury@gmail.com</strong>
        </p>

        <p>2. You will receive confirmation and payment details.</p>

        <p>3. Payment options:</p>

        <ul>
          <li>
            <strong>PayPal:</strong> freedivingworld@gmail.com
          </li>
          <li>
            <strong>Bank Transfer:</strong> Available on request
          </li>
          <li>
            <strong>Cash:</strong> On arrival
          </li>
        </ul>
      </section>

      <section className="contact-content">
        <h2 className="center-title">Booking Request Form</h2>

        <form className="booking-form" onSubmit={handleSubmit}>
          <label>
            Full Name *
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
          </label>

          <label>
            Email *
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </label>

          <label>
            Choose Course *
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
            >
              <option value="">Select a course</option>
              <option value="Beginner Freediving - AIDA 1">
                Beginner Freediving - AIDA 1
              </option>
              <option value="Advanced Freediving - AIDA 2">
                Advanced Freediving - AIDA 2
              </option>
              <option value="Master Freediving - AIDA 4">
                Master Freediving - AIDA 4
              </option>
            </select>
          </label>

          <label>
            Preferred Date *
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </label>

          <label>
            Message
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here"
            ></textarea>
          </label>

          <button type="submit">Submit Booking Request</button>
        </form>

        {confirmation && <p className="confirmation">{confirmation}</p>}
      </section>
    </main>
  );
}

export default Contact;