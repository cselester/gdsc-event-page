import React, { useState } from "react";
import "./RegistrationForm.css";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    college: "",
    challenge: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const googleFormURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSdAI-zZPYfAZ3wBUgRSNHK8pd_5Y_DvhGtzvvgMVelnE_YiHQ/formResponse"; 
    // ⚠️ Replace with your Google Form action URL

    const formBody = new FormData();
    formBody.append("entry.636355841", formData.name);      // Name
    formBody.append("entry.1658151126", formData.email);     // Email
    formBody.append("entry.170172915", formData.college);    // College
    formBody.append("entry.335793570", formData.challenge);  // Challenge dropdown

    fetch(googleFormURL, {
      method: "POST",
      mode: "no-cors",
      body: formBody,
    })
      .then(() => setSubmitted(true))
      .catch((err) => console.error("Error submitting form", err));
  };

  return (
    <section className="register">
      <h2>Register for the Event 🎉</h2>
      {submitted ? (
        <p>✅ Thanks for registering! See you at the event 🚀</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="college"
            placeholder="Your College/Organization"
            value={formData.college}
            onChange={handleChange}
            required
          />

          {/* Dropdown for Challenges */}
          <select
            name="challenge"
            value={formData.challenge}
            onChange={handleChange}
            required
          >
            <option value="">-- Select a Challenge --</option>
            <option value="AI for Good">AI for Good</option>
            <option value="Sustainable Development">Sustainable Development</option>
            <option value="Open Source Contribution">Open Source Contribution</option>
          </select>

          <button type="submit">Register</button>
        </form>
      )}
    </section>
  );
}

export default Register;
