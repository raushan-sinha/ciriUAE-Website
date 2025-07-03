import './Faqs.css'

function Faqs() {
    return (
        <>
            <main class="container">
                {/* Introduction Section */}
                <section class="intro-section">
                    <h1 class="main-title">Frequently Asked Questions</h1>
                    <p class="intro-text">
                        Welcome to CiriUAE's FAQ section. Here you'll find answers to the most common questions about our
                        business solutions, services, and how we can help your organization achieve sustainable growth. If you
                        don't find what you're looking for, feel free to contact us directly.
                    </p>
                </section>

                {/* FAQ Section */}
                <section class="faq-section">
                    <div class="faq-container">

                        <div class="faq-item">
                            <input type="checkbox" id="faq1" class="faq-toggle" />
                            <label for="faq1" class="faq-question">
                                <h3>What is CiriUAE?</h3>
                                <span class="faq-icon">+</span>
                            </label>
                            <div class="faq-answer">
                                <p>CiriUAE is a business solutions provider offering tailored services in marketing strategy,
                                    business development, financial modeling, and digital transformation. We help organizations
                                    grow sustainably by delivering strategic support and actionable insights.</p>
                            </div>
                        </div>

                        <div class="faq-item">
                            <input type="checkbox" id="faq2" class="faq-toggle" />
                            <label for="faq2" class="faq-question">
                                <h3>What industries do you serve?</h3>
                                <span class="faq-icon">+</span>
                            </label>
                            <div class="faq-answer">
                                <p>We work with businesses across a wide range of sectors including retail, logistics,
                                    healthcare, technology, manufacturing, and professional services. Our strategies are
                                    customized to meet the specific needs of each industry.</p>
                            </div>
                        </div>

                        <div class="faq-item">
                            <input type="checkbox" id="faq3" class="faq-toggle" />
                            <label for="faq3" class="faq-question">
                                <h3>What services does CiriUAE offer?</h3>
                                <span class="faq-icon">+</span>
                            </label>
                            <div class="faq-answer">
                                <p>Our core services include:</p>
                                <ul>
                                    <li>Marketing Strategy</li>
                                    <li>Business Development Strategy</li>
                                    <li>Financial Modeling</li>
                                    <li>Digital Marketing Plan</li>
                                    <li>Strategic Consulting</li>
                                    <li>Market Expansion Support</li>
                                    <li>Customized Business Resources & Tools</li>
                                </ul>
                            </div>
                        </div>

                        <div class="faq-item">
                            <input type="checkbox" id="faq4" class="faq-toggle" />
                            <label for="faq4" class="faq-question">
                                <h3>Do you offer customized solutions?</h3>
                                <span class="faq-icon">+</span>
                            </label>
                            <div class="faq-answer">
                                <p>Yes. We believe every business is unique, so all our strategies, models, and solutions are
                                    tailored to your goals, industry, and current challenges. No one-size-fits-all approach.</p>
                            </div>
                        </div>

                        <div class="faq-item">
                            <input type="checkbox" id="faq5" class="faq-toggle" />
                            <label for="faq5" class="faq-question">
                                <h3>How can I get started with your services?</h3>
                                <span class="faq-icon">+</span>
                            </label>
                            <div class="faq-answer">
                                <p>Getting started is easy. Contact us through our website or email us directly at
                                    info@CiriUAE.com. We'll schedule a free consultation to understand your business and
                                    recommend the best path forward.</p>
                            </div>
                        </div>

                        <div class="faq-item">
                            <input type="checkbox" id="faq6" class="faq-toggle" />
                            <label for="faq6" class="faq-question">
                                <h3>Is CiriUAE available for international clients?</h3>
                                <span class="faq-icon">+</span>
                            </label>
                            <div class="faq-answer">
                                <p>Yes. While we are headquartered in the UAE, we serve clients across the Middle East, Asia,
                                    Europe, and other global regions through both virtual and on-site consulting engagements.
                                </p>
                            </div>
                        </div>

                        <div class="faq-item">
                            <input type="checkbox" id="faq7" class="faq-toggle" />
                            <label for="faq7" class="faq-question">
                                <h3>Do you help startups and small businesses?</h3>
                                <span class="faq-icon">+</span>
                            </label>
                            <div class="faq-answer">
                                <p>Absolutely. We work with startups, SMEs, and large enterprises. Our services are scalable and
                                    affordable, designed to support early-stage companies as well as established businesses.</p>
                            </div>
                        </div>

                        <div class="faq-item">
                            <input type="checkbox" id="faq8" class="faq-toggle" />
                            <label for="faq8" class="faq-question">
                                <h3>Can I access downloadable resources or tools from CiriUAE?</h3>
                                <span class="faq-icon">+</span>
                            </label>
                            <div class="faq-answer">
                                <p>Yes. Visit our Resources section to access whitepapers, e-books, templates, webinars, and
                                    case studies — all available to help you make better business decisions.</p>
                            </div>
                        </div>

                        <div class="faq-item">
                            <input type="checkbox" id="faq9" class="faq-toggle" />
                            <label for="faq9" class="faq-question">
                                <h3>What makes CiriUAE different from other consulting firms?</h3>
                                <span class="faq-icon">+</span>
                            </label>
                            <div class="faq-answer">
                                <p>Our blend of strategic insight, practical execution, industry experience, and client-centric
                                    approach sets us apart. We don't just advise — we collaborate, implement, and deliver
                                    measurable growth.</p>
                            </div>
                        </div>

                        <div class="faq-item">
                            <input type="checkbox" id="faq10" class="faq-toggle" />
                            <label for="faq10" class="faq-question">
                                <h3>How do you ensure confidentiality and data security?</h3>
                                <span class="faq-icon">+</span>
                            </label>
                            <div class="faq-answer">
                                <p>We follow strict data protection protocols and confidentiality agreements to ensure your
                                    business information remains secure. Your trust is our top priority.</p>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </>
    );
}

export default Faqs