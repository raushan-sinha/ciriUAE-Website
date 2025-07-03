import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <h2>Let's Get Started</h2>
        <p>Take the first step, and contact us to discuss your marketing and business goals. Send us a message, and we will get back to you soon.</p>
      </div>

      <div className="contact-boxes">
        <div className="contact-info">
          <h3>CIRI UAE</h3>
          <p><strong>Address:</strong><br /> Free Zone - Ajman - United Arab Emirates</p>
          <p><strong>Phone:</strong><br /> 0971524308085</p>
          <p><strong>Email:</strong><br /> INQUIRY@CIRIUAE.COM</p>
          <p><strong>Hours:</strong><br /> Open today<br /> 09:00 am – 05:00 pm</p>
        </div>

        <div className="contact-form">
          <h3>Get an Estimate</h3>
          <form>
            <input type="text" placeholder="Name" className="contact-input" />
            <input type="email" placeholder="Email*" className="contact-input" required />
            <textarea placeholder="Message\nTell us about your project..." className="contact-textarea"></textarea>

            <label className="contact-file">
              Attach Files
              <input type="file" multiple />
            </label>
            <p className="file-note">Click to attach files or drag and drop</p>
            <p className="attachment-note">Attachments (0)</p>

            <p className="recaptcha-note">
              This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
            </p>

            <div className="contact-buttons">
              <button type="submit" className="btn-send">Send</button>
              <button type="reset" className="btn-cancel">Cancel</button>
            </div>
          </form>
        </div>
      </div>

      <div className="contact-region">
        <h3>Our Regional Presence</h3>
        <ul>
          <li><strong>United Arab Emirates:</strong> We're based in the UAE and serve clients across the region.</li>
          <li><strong>Middle East:</strong> We have a strong presence in the Middle East.</li>
          <li><strong>North Africa:</strong> We have a strong presence in North Africa.</li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
