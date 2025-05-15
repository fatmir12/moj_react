import React, { useState } from 'react';


const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Ime je obavezno.";
    if (!formData.email || !formData.email.includes('@')) newErrors.email = "Ispravan email je obavezan.";
    if (!formData.message) newErrors.message = "Poruka je obavezna.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    // Pohrani podatke
    await fetch('http://localhost:3001/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    alert("Poruka uspješno poslana!");
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  };

  return (
    <div className="form-container contact-container">
      <h2 className="section-title">Kontaktirajte nas</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          placeholder="Vaše ime"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        {errors.name && <p className="error-text">{errors.name}</p>}

        <input
          className="form-input"
          type="email"
          placeholder="Email adresa"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && <p className="error-text">{errors.email}</p>}

        <textarea
          className="form-input"
          placeholder="Vaša poruka"
          rows="5"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
        {errors.message && <p className="error-text">{errors.message}</p>}

        <button type="submit" className="cta-btn">Pošalji</button>
      </form>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.768951263299!2d18.40932071587505!3d43.856258979113934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c90eb782e53f%3A0x3c13c62a6b1de7b9!2sSarajevo!5e0!3m2!1sen!2sba!4v1686233608900!5m2!1sen!2sba"
          loading="lazy"
          allowFullScreen=""
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
