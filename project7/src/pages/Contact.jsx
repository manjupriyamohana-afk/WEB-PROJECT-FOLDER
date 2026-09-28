// ================================
// src/pages/Contact.jsx
// ================================

function Contact() {
  return (
    <div className="contact-page">
      <div className="section-heading">
        <p>LET'S CONNECT</p>
        <h1>Contact Me</h1>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Let's Connect</h2>

          <p>
            I am always interested in learning, collaborating, and
            discussing technology and new ideas.
          </p>

          <div className="contact-item">
            <span>✉</span>
            <div>
              <h3>Email</h3>
              <p>manjupriya@example.com</p>
            </div>
          </div>

          <div className="contact-item">
            <span>📍</span>
            <div>
              <h3>Location</h3>
              <p>Tamil Nadu, India</p>
            </div>
          </div>

          <div className="contact-item">
            <span>💻</span>
            <div>
              <h3>Interests</h3>
              <p>AI • Data Science • Python</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button>Send Message</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;