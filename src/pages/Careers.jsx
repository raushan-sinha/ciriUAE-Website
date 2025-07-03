import './Careers.css'

function Careers() {
    return (
        <>
            <div class="container">
                <section class="hero-section">
                    <h1>We're Hiring!</h1>
                    <h2>Join Our Team</h2>
                    <p>At CiriUAE, we're passionate about helping businesses grow and thrive. We're always looking for talented
                        individuals to join our team and contribute to our mission. Check out our current job openings and apply
                        today!</p>
                    <a href="#application-form" class="cta-button">Apply Now</a>
                </section>

                <section class="form-section" id="application-form">
                    <form class="form-container" action="#" method="POST" enctype="multipart/form-data">
                        <div class="form-row">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" id="name" name="name" required />
                            </div>
                            <div class="form-group">
                                <label for="phone">Phone</label>
                                <input type="tel" id="phone" name="phone" />
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="email">Email*</label>
                            <input type="email" id="email" name="email" required />
                        </div>

                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea id="message" name="message"
                                placeholder="Tell us about yourself and why you'd like to join our team..."></textarea>
                        </div>

                        <div class="form-group">
                            <label for="resume">Attach Resume</label>
                            <div class="file-upload">
                                <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" multiple />
                                <label for="resume" class="file-upload-label">
                                    📎 Click to upload or drag files here
                                </label>
                            </div>
                            <div class="attachments-info">Attachments (0)</div>
                        </div>

                        <button type="submit" class="submit-btn">Submit Application</button>

                        <div class="recaptcha-notice">
                            This site is protected by reCAPTCHA and the Google
                            <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a> and
                            <a href="https://policies.google.com/terms" target="_blank">Terms of Service</a> apply.
                        </div>
                    </form>
                </section>
            </div>
        </>
    );
}

export default Careers