import { Link } from 'react-router-dom';
import './CaseStudies.css';

function CaseStudies() {
    return (
        <>
            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <h1>Case Studies</h1>
                        <p>Real Success. Real Impact. Real Results.</p>
                        <p>At CiriUAE, we don't just promise results—we deliver them. Explore real-life case studies that
                            showcase how we've helped clients across industries streamline operations, boost revenue, and
                            achieve long-term growth through customized strategies and smart execution.</p>

                        <div className="hero-stats">
                            <div className="stat-item">
                                <span className="stat-number">150+</span>
                                <span className="stat-label">Successful Projects</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">98%</span>
                                <span className="stat-label">Client Satisfaction</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">45%</span>
                                <span className="stat-label">Average ROI Increase</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies Section  */}
            <section className="case-studies">
                <div className="container">
                    <div className="section-title">
                        <h2>Success Stories That Speak Volumes</h2>
                        <p>Discover how we've transformed businesses across various industries with innovative solutions and
                            strategic implementations.</p>
                    </div>

                    <div className="cases-grid">
                        {/* Healthcare Case Study */}
                        <div className="case-item">
                            <div className="case-content">
                                <div className="case-image">
                                    <img src="https://media.istockphoto.com/id/2200416451/photo/home-health-care-patient.webp?a=1&b=1&s=612x612&w=0&k=20&c=eOnzDs3cLBQkmdMI59Esa9rypxF5ERcIuwG03ZG2zFo=" alt="Healthcare Automation" />
                                </div>
                                <div className="case-text">
                                    <span className="case-category">Healthcare</span>
                                    <h3 className="case-title">Operational Efficiency Revolution</h3>
                                    <p className="case-description">
                                        We helped a regional healthcare provider automate its scheduling and reporting system,
                                        transforming their entire operational workflow. Our comprehensive solution integrated
                                        patient management, staff scheduling, and real-time reporting into a unified platform,
                                        dramatically reducing administrative burden and improving patient care quality.
                                    </p>
                                    <div className="case-metrics">
                                        <div className="metric">
                                            <div className="metric-value">40%</div>
                                            <div className="metric-label">Reduced Manual Workload</div>
                                        </div>
                                        <div className="metric">
                                            <div className="metric-value">35%</div>
                                            <div className="metric-label">Faster Patient Turnaround</div>
                                        </div>
                                        <div className="metric">
                                            <div className="metric-value">$2.3M</div>
                                            <div className="metric-label">Annual Cost Savings</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Retail Case Study */}
                        <div className="case-item">
                            <div className="case-content">
                                <div className="case-image">
                                    <img src="https://media.istockphoto.com/id/1449490038/photo/online-shopping-and-e-commerce-technology-concept-shopper-using-computer-laptop-to-input.webp?a=1&b=1&s=612x612&w=0&k=20&c=UV8-hsrRpcoh3lhM-bqJixmZW6Fskg88aBjp-b151Mc=" alt="E-commerce Growth" />
                                </div>
                                <div className="case-text">
                                    <span className="case-category">Retail</span>
                                    <h3 className="case-title">E-commerce Revenue Explosion</h3>
                                    <p className="case-description">
                                        Our retail client experienced unprecedented growth after we completely revamped their
                                        e-commerce strategy. We implemented personalized marketing campaigns, optimized their
                                        online store for conversions, and integrated advanced analytics to track customer
                                        behavior and preferences in real-time.
                                    </p>
                                    <div className="case-metrics">
                                        <div className="metric">
                                            <div className="metric-value">60%</div>
                                            <div className="metric-label">Online Sales Increase</div>
                                        </div>
                                        <div className="metric">
                                            <div className="metric-value">3 Months</div>
                                            <div className="metric-label">Time to Results</div>
                                        </div>
                                        <div className="metric">
                                            <div className="metric-value">85%</div>
                                            <div className="metric-label">Customer Retention Rate</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Manufacturing Case Study  */}
                        <div className="case-item">
                            <div className="case-content">
                                <div className="case-image">
                                    <img src="https://media.istockphoto.com/id/1320950393/photo/cars-on-production-line-in-factory.webp?a=1&b=1&s=612x612&w=0&k=20&c=jKhlvqXn4N2t0lGOT9V5csglNLJDLZ7Aq_CecR-dn0Q=" alt="Smart Manufacturing" />
                                </div>
                                <div className="case-text">
                                    <span className="case-category">Manufacturing</span>
                                    <h3 className="case-title">Industry 4.0 Transformation</h3>
                                    <p className="case-description">
                                        A manufacturing client embraced Industry 4.0 with our smart automation solutions,
                                        revolutionizing their production processes. We implemented IoT sensors, predictive
                                        maintenance systems, and AI-driven quality control, resulting in significant cost
                                        reductions and productivity improvements.
                                    </p>
                                    <div className="case-metrics">
                                        <div className="metric">
                                            <div className="metric-value">25%</div>
                                            <div className="metric-label">Energy Cost Reduction</div>
                                        </div>
                                        <div className="metric">
                                            <div className="metric-value">30%</div>
                                            <div className="metric-label">Output Increase</div>
                                        </div>
                                        <div className="metric">
                                            <div className="metric-value">90%</div>
                                            <div className="metric-label">Defect Reduction</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Financial Services Case Study */}
                        <div className="case-item">
                            <div className="case-content">
                                <div className="case-image">
                                    <img src="https://plus.unsplash.com/premium_photo-1661301075857-63868ae88c00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmFua2luZ3xlbnwwfHwwfHx8MA%3D%3D" alt="Financial Technology" />
                                </div>
                                <div className="case-text">
                                    <span className="case-category">Financial Services</span>
                                    <h3 className="case-title">Digital Banking Revolution</h3>
                                    <p className="case-description">
                                        We helped a traditional bank transition to digital-first operations by implementing a
                                        comprehensive financial solution. Our platform included mobile banking, AI-powered fraud
                                        detection, and automated loan processing, significantly improving customer experience
                                        and operational efficiency.
                                    </p>
                                    <div className="case-metrics">
                                        <div className="metric">
                                            <div className="metric-value">75%</div>
                                            <div className="metric-label">Faster Loan Processing</div>
                                        </div>
                                        <div className="metric">
                                            <div className="metric-value">50%</div>
                                            <div className="metric-label">Reduced Fraud Cases</div>
                                        </div>
                                        <div className="metric">
                                            <div className="metric-value">95%</div>
                                            <div className="metric-label">Customer Satisfaction</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section  */}
            <section className="testimonials">
                <div className="container">
                    <div className="section-title">
                        <h2>What Our Clients Say</h2>
                        <p>Don't just take our word for it. Here's what industry leaders have to say about our transformative
                            solutions.</p>
                    </div>

                    <div className="testimonials-grid">
                        <div className="testimonial">
                            <p className="testimonial-text">
                                "CiriUAE completely transformed our digital strategy. The results were beyond expectations.
                                Their team's expertise and dedication to our success was evident from day one."
                            </p>
                            <div className="testimonial-author">
                                <div className="author-avatar">SM</div>
                                <div className="author-info">
                                    <h4>Sarah Mitchell</h4>
                                    <p>CEO, Retail Brand</p>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial">
                            <p className="testimonial-text">
                                "Their customized approach helped us overcome long-standing operational bottlenecks. The ROI was
                                immediate and continues to grow month after month."
                            </p>
                            <div className="testimonial-author">
                                <div className="author-avatar">JR</div>
                                <div className="author-info">
                                    <h4>James Rodriguez</h4>
                                    <p>Director, Manufacturing Company</p>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial">
                            <p className="testimonial-text">
                                "The automation solutions provided by CiriUAE have revolutionized our patient care processes.
                                We've never been more efficient or effective."
                            </p>
                            <div className="testimonial-author">
                                <div className="author-avatar">DL</div>
                                <div className="author-info">
                                    <h4>Dr. Lisa Chen</h4>
                                    <p>Chief Medical Officer, Regional Healthcare</p>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial">
                            <p className="testimonial-text">
                                "Working with CiriUAE was a game-changer for our digital transformation. Their innovative
                                solutions and strategic insights delivered exceptional results."
                            </p>
                            <div className="testimonial-author">
                                <div className="author-avatar">MK</div>
                                <div className="author-info">
                                    <h4>Michael Kumar</h4>
                                    <p>CTO, Financial Services</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta">
                <div className="container">
                    <div className="cta-content">
                        <h2>📈 Your Success Story Starts Here</h2>
                        <p>
                            Ready to join our growing list of success stories? Let us help you drive real change and achieve
                            measurable results. Get in touch to explore how we can create a customized solution for your
                            business challenges.
                        </p>
                        <div className="cta-buttons">
                            <Link to="/contact">
                                <a href="#" className="btn btn-primary">Start Your Transformation</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CaseStudies