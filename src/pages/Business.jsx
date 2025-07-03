import './Business.css'

function Business() {
    return (
        <>
            {/* Main Content  */}
            <main className="main-content">
             {/* Introduction Section */}
                <section className="intro-section">
                    <div className="container">
                        <h2>Strategic Business Development</h2>
                        <p>
                        At CiriUAE, we create strategic business development plans that focus on long-term success and
                            sustainable growth. Whether you're launching a new venture, expanding into new markets, or scaling
                            operations, our goal is to position your business for consistent, measurable advancement.
                            We begin by analyzing your current business model, understanding your core strengths, market trends,
                            and competitive landscape. Our strategic planning is rooted in real data and clear objectives —
                            helping you identify opportunities, reduce risks, and build a strong foundation for growth.
                        </p>
                    </div>
                </section>

                {/* Services Grid - */}
                <section id="services" className="services-section">
                    <div className="container">
                        <h2>Our Development Areas</h2>
                        <div className="services-grid">
                            <div className="service-card">
                                <div className="service-icon">🌍</div>
                                <h3>Market Expansion</h3>
                                <p>Explore new geographies, industries, and customer segments to broaden your market reach.</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">🤝</div>
                                <h3>Partnerships & Alliances</h3>
                                <p>Identify strategic collaborations and distribution channels for mutual growth.</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">📈</div>
                                <h3>Sales Enablement</h3>
                                <p>Streamline processes, tools, and training to drive sales performance and efficiency.</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">💰</div>
                                <h3>Revenue Diversification</h3>
                                <p>Discover new streams of income to increase financial stability and reduce risk.</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">⚙️</div>
                                <h3>Process Optimization</h3>
                                <p>Enhance internal efficiency to support scalability and operational excellence.</p>
                            </div>
                            <div className="service-card">
                                <div className="service-icon">👥</div>
                                <h3>Client Relationship Building</h3>
                                <p>Foster stronger engagement and long-term client value through strategic relationship
                                    management.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/*  Approach Section */}
                <section id="approach" className="approach-section">
                    <div className="container">
                        <div className="approach-content">
                            <div className="approach-text">
                                <h2>Our Strategic Approach</h2>
                                <p>
                                    We align our strategy with your unique vision. Whether you're a startup or an enterprise, we
                                    tailor solutions that solve real-world challenges, leverage your strengths, and unlock
                                    untapped potential.
                                </p>
                                <p>
                                    By creating actionable plans and setting clear KPIs, we ensure that your development efforts
                                    are guided, focused, and consistently progressing.
                                </p>
                                <div className="approach-features">
                                    <div className="feature">
                                        <h4>🎯 Opportunity Mapping</h4>
                                        <p>Identifying growth areas based on emerging trends and market analysis.</p>
                                    </div>
                                    <div className="feature">
                                        <h4>👤 Customer Development</h4>
                                        <p>Understanding customer needs for better product-market fit and satisfaction.</p>
                                    </div>
                                    <div className="feature">
                                        <h4>📊 Strategic Forecasting</h4>
                                        <p>Planning for growth based on realistic timelines and available resources.</p>
                                    </div>
                                    <div className="feature">
                                        <h4>💡 Business Model Innovation</h4>
                                        <p>Refining or reinventing your approach to deliver greater value to customers.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="approach-image">
                                <img src="https://scontent.fixr3-3.fna.fbcdn.net/v/t1.15752-9/512092323_4035906443348838_5283563465298485238_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_ohc=I5tAKXce2eoQ7kNvwF9v9OI&_nc_oc=AdlF46RXhTSvX03m1cPqDV0sxNzZdWxuvCq5J3TUyp9_uNBCd2Z46bUURR4SV5ZwUt_YgW5C49phcFeLAhBFGKiT&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fixr3-3.fna&oh=03_Q7cD2gHMA0ecnhBs6-RDATBc9RjCqcSab_Ynf2NRUaXY2U9i_g&oe=6884F657" alt="Strategic Approach" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="why-choose-section">
                    <div className="container">
                        <h2>Why Choose CiriUAE?</h2>
                        <div className="benefits-grid">
                            <div className="benefit-card">
                                <h3>Adaptive & Resilient</h3>
                                <p>Our business development strategies are designed to be adaptive and resilient. As market
                                    conditions shift, we help you stay ahead of the curve.</p>
                            </div>
                            <div className="benefit-card">
                                <h3>Proactive Mindset</h3>
                                <p>We don't just react to change — we help you lead it. Building a future-ready business that is
                                    agile, competitive, and equipped to thrive.</p>
                            </div>
                            <div className="benefit-card">
                                <h3>Growth Partnership</h3>
                                <p>We don't just offer advice — we become your growth partner. We guide implementation, measure
                                    outcomes, and continuously refine strategies.</p>
                            </div>
                            <div className="benefit-card">
                                <h3>Data-Driven Results</h3>
                                <p>Our strategic planning is rooted in real data and clear objectives, ensuring measurable and
                                    sustainable business advancement.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            {/* Footer */}
            <footer id="contact" className="footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="footer-section">
                            <h3>CiriUAE</h3>
                            <p>Strategic business development for sustainable growth and long-term success.</p>
                        </div>
                        <div className="footer-section">
                            <h4>Services</h4>
                            <ul>
                                <li>Market Expansion</li>
                                <li>Strategic Partnerships</li>
                                <li>Sales Enablement</li>
                                <li>Process Optimization</li>
                            </ul>
                        </div>
                        <div className="footer-section">
                            <h4>Contact</h4>
                            <p>Email: info@CiriUAE.com</p>
                            <p>Phone: +971 XX XXX XXXX</p>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2025 CiriUAE. All rights reserved.</p>
                    </div>
                </div>
            </footer>

        </>
    );
}

export default Business