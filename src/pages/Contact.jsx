import './Contact.css'

function Contact() {
    return (
        <>
            {/* Contact Section */}
            <section className="contact-section">
                <div className="container">
                    <div className="contact-header">
                        <h1>Contact Us</h1>
                        <h2>Let's Get Started</h2>
                        <p>Take the first step, and contact us to discuss your marketing and business goals. Send us a message,
                            and we will get back to you soon.</p>
                    </div>

                    <div className="contact-content">
                        {/* Contact Information  */}
                        <div className="contact-info">
                            <div className="company-details">
                                <h3>CIRI UAE</h3>
                                <div className="detail-item">
                                    <strong>Address:</strong>
                                    <span>Free Zone - Ajman - United Arab Emirates</span>
                                </div>
                                <div className="detail-item">
                                    <strong>Phone:</strong>
                                    <span>0971524308085</span>
                                </div>
                                <div className="detail-item">
                                    <strong>Email:</strong>
                                    <span>INQUIRY@CIRIUAE.COM</span>
                                </div>
                            </div>

                            <div className="hours-section">
                                <h4>Hours</h4>
                                <p><strong>Open today</strong></p>
                                <p>09:00 am – 05:00 pm</p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form">
                            <h3>Get an Estimate</h3>
                            <form>
                                <div className="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" id="name" name="name" required />
                                </div>

                                <div className="form-group">
                                    <label for="email">Email*</label>
                                    <input type="email" id="email" name="email" required />
                                </div>

                                <div className="form-group">
                                    <label for="message">Message</label>
                                    <textarea id="message" name="message"
                                        placeholder="Tell us about your project..."></textarea>
                                </div>

                                <div className="form-group">
                                    <label>Attach Files</label>
                                    <div className="file-upload">
                                        <input type="file" id="files" name="files" multiple />
                                        <label for="files" className="file-upload-label">
                                            Click to attach files or drag and drop<br />
                                            <small>Attachments (0)</small>
                                        </label>
                                    </div>
                                </div>

                                <div className="recaptcha-notice">
                                    This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service
                                    apply.
                                </div>

                                <div className="form-actions">
                                    <button type="submit" className="btn btn-primary">Send</button>
                                    <button type="reset" className="btn btn-secondary">Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Regional Presence Section */}
            <section className="regional-section">
                <div className="container">
                    <div className="regional-header">
                        <h2>Our Regional Presence</h2>
                    </div>

                    <div className="regional-grid">
                        <div className="regional-card">
                            <h3>United Arab Emirates</h3>
                            <p>We're based in the UAE and serve clients across the region.</p>
                        </div>

                        <div className="regional-card">
                            <h3>Middle East</h3>
                            <p>We have a strong presence in the Middle East.</p>
                        </div>

                        <div className="regional-card">
                            <h3>North Africa</h3>
                            <p>We have a strong presence in North Africa.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact