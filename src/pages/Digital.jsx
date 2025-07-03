import './Digital.css'
import { Link } from 'react-router-dom';

function Digital() {
    return (
        <>
            <main>
                <section class="intro">
                    <div class="container">
                        <div class="intro-content">
                            <h2>Strategic Digital Growth</h2>
                            <p>At CiriUAE, we craft cutting-edge digital marketing plans designed to grow your online presence,
                                attract qualified leads, and drive measurable business results. In today's digital-first world,
                                having a well-structured strategy is critical to staying competitive, relevant, and successful.
                            </p>
                            <p>Our digital marketing plans are tailored to your unique goals, industry, and audience. We don't
                                believe in guesswork — we rely on data, market insights, and performance metrics to create
                                smart, scalable campaigns that deliver real impact.</p>
                        </div>
                    </div>
                </section>

                <section id="services" class="services">
                    <div class="container">
                        <h2 class="section-title">Our Comprehensive Services</h2>
                        <div class="services-grid">
                            <div class="service-card">
                                <div class="service-icon">🔍</div>
                                <h3>Search Engine Optimization (SEO)</h3>
                                <p>Improve your website's visibility and organic search rankings</p>
                            </div>
                            <div class="service-card">
                                <div class="service-icon">💰</div>
                                <h3>Pay-Per-Click Advertising (PPC)</h3>
                                <p>Generate instant traffic with targeted, cost-effective ad campaigns</p>
                            </div>
                            <div class="service-card">
                                <div class="service-icon">📱</div>
                                <h3>Social Media Marketing</h3>
                                <p>Build brand awareness, engage your audience, and grow loyal communities</p>
                            </div>
                            <div class="service-card">
                                <div class="service-icon">✍️</div>
                                <h3>Content Marketing</h3>
                                <p>Create valuable, relevant content that educates and converts</p>
                            </div>
                            <div class="service-card">
                                <div class="service-icon">📧</div>
                                <h3>Email Marketing</h3>
                                <p>Nurture leads and maintain strong customer relationships</p>
                            </div>
                            <div class="service-card">
                                <div class="service-icon">🌐</div>
                                <h3>Website Optimization</h3>
                                <p>Ensure your site delivers fast, responsive, and conversion-focused user experiences</p>
                            </div>
                            <div class="service-card">
                                <div class="service-icon">📊</div>
                                <h3>Analytics & Reporting</h3>
                                <p>Track, measure, and improve your campaigns for continuous growth</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="competitive-edge">
                    <div class="container">
                        <h2 class="section-title">Stay Ahead of the Competition</h2>
                        <div class="edge-grid">
                            <div class="edge-card">
                                <h3>Competitor Analysis</h3>
                                <p>Learn from your market and differentiate effectively</p>
                            </div>
                            <div class="edge-card">
                                <h3>Trend Forecasting</h3>
                                <p>Leverage emerging digital trends to gain a competitive edge</p>
                            </div>
                            <div class="edge-card">
                                <h3>Marketing Automation</h3>
                                <p>Save time and increase efficiency with intelligent automation tools</p>
                            </div>
                            <div class="edge-card">
                                <h3>A/B Testing & Optimization</h3>
                                <p>Continuously test and improve campaigns for better results</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="cta-section">
                    <div class="container">
                        <div class="cta-content">
                            <h2>Ready to Transform Your Digital Presence?</h2>
                            <p>At CiriUAE, we believe digital success doesn't come from tactics alone — it comes from a smart,
                                data-backed plan that's executed with precision.</p>
                            <p class="cta-highlight">Let us build a digital marketing strategy that puts your brand in front of
                                the right people — at the right time — on the right platforms.</p>
                            <Link to="/contact">
                                <button class="cta-button primary large" id="journeyBtn">Start Your Digital Journey</button>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <footer class="footer">
                <div class="container">
                    <div class="footer-content">
                        <div class="footer-brand">
                            <h3>CiriUAE</h3>
                            <p>Crafting digital excellence</p>
                        </div>
                    </div>
                    <div class="footer-bottom">
                        <p>&copy; 2025 CiriUAE. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Digital