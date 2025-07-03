import './Financial.css'
import { Link } from 'react-router-dom';

function Financial() {
    return (
        <>
            <main>
                <section id="services" className="services">
                    <div className="container">
                        <h2 className="section-title">Our Financial Modeling Solutions</h2>
                        <div className="services-grid">
                            <div className="service-card">
                                <div className="service-icon">📈</div>
                                <h3>Revenue Forecasting</h3>
                                <p>Predict income streams across products, services, or markets</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">💰</div>
                                <h3>Expense Planning</h3>
                                <p>Understand fixed vs variable costs, optimize operational efficiency</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">💧</div>
                                <h3>Cash Flow Projections</h3>
                                <p>Manage liquidity and ensure financial stability</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">⚖️</div>
                                <h3>Break-even Analysis</h3>
                                <p>Identify the point of profitability under different conditions</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">🎯</div>
                                <h3>Scenario Planning</h3>
                                <p>Model best-case, worst-case, and most likely financial outcomes</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">💎</div>
                                <h3>Valuation Models</h3>
                                <p>Determine business value for investment, M&A, or fundraising</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">📊</div>
                                <h3>Budgeting & Planning</h3>
                                <p>Set financial targets aligned with business goals</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="value-proposition">
                    <div className="container">
                        <div className="value-content">
                            <h2>More Than Just Spreadsheets</h2>
                            <p>Our models are not just spreadsheets—they're decision-making tools. Built with accuracy,
                                transparency, and scalability in mind, each model is easy to update, audit, and adapt. We work
                                closely with your leadership team to ensure all inputs reflect realistic assumptions, and
                                outputs drive actionable insights.</p>
                            <p>We also bring deep industry knowledge to every project. Our team understands market dynamics,
                                investor expectations, and financial regulations—ensuring your model meets the highest
                                professional standards. Whether it's for internal planning, stakeholder presentations, or
                                investor pitches, our models give you the financial clarity you need.</p>
                        </div>
                    </div>
                </section>

                <section id="benefits" className="benefits">
                    <div className="container">
                        <h2 className="section-title">Additional Benefits</h2>
                        <div className="benefits-grid">
                            <div className="benefit-item">
                                <div className="benefit-icon">📱</div>
                                <h3>Custom Dashboards & Visualizations</h3>
                                <p>For easy understanding of KPIs and projections</p>
                            </div>
                            <div className="benefit-item">
                                <div className="benefit-icon">🔍</div>
                                <h3>Sensitivity Analysis</h3>
                                <p>Measure the impact of key variables on your bottom line</p>
                            </div>
                            <div className="benefit-item">
                                <div className="benefit-icon">🏥</div>
                                <h3>Financial Health Checks</h3>
                                <p>Identify risks, inefficiencies, and improvement areas</p>
                            </div>
                            <div className="benefit-item">
                                <div className="benefit-icon">🎤</div>
                                <h3>Investor-Ready Presentations</h3>
                                <p>Simplified outputs for external funding conversations</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="closing">
                    <div className="container">
                        <div className="closing-content">
                            <h2>Make Decisions with Clarity</h2>
                            <p>At CiriUAE, we believe that every financial decision should be backed by solid logic, real data,
                                and a forward-thinking mindset. Our financial modeling solutions are designed to guide strategic
                                planning, support investor confidence, and accelerate growth.</p>
                            <div className="closing-tagline">
                                <p><strong>Make decisions with clarity. Plan with confidence. Grow with certainty.</strong></p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer id="contact" className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-brand">
                            <h3>CiriUAE</h3>
                            <p>Financial Modeling Excellence</p>
                        </div>
                        <div className="footer-contact">
                            <p>Ready to transform your financial planning?</p>
                            <Link to="/contact">
                                <button className="contact-button" id="contactBtn">Contact Us</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Financial