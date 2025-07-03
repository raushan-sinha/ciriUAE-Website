
import React, { useEffect, useRef } from 'react';
import './Marketing.css';
import { Link } from 'react-router-dom';

const Marketing = () => {
    const marketingRef = useRef(null);
    const sectionsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('marketing-animate-in');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        sectionsRef.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const addToRefs = (el) => {
        if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el);
        }
    };

    const marketingServices = [
        "Define clear marketing goals and KPIs",
        "Identify and target high-value customer segments",
        "Improve your brand positioning and messaging",
        "Enhance your online and offline brand presence",
        "Boost engagement across digital channels",
        "Increase conversions and sales through optimized campaigns"
    ];

    return (
        <div className="marketing-container" id="marketing-section" ref={marketingRef}>
            {/* Hero Section */}
            <section className="marketing-hero" ref={addToRefs}>
                <div className="marketing-hero-content">
                    <h1 className="marketing-hero-title">Marketing Strategy</h1>
                    <div className="marketing-hero-subtitle">
                        Empowering brands, attracting audiences, delivering growth
                    </div>
                </div>
                <div className="marketing-hero-bg"></div>
            </section>

            {/* Main Content Grid */}
            <div className="marketing-content-wrapper">
                {/* Introduction Section */}
                <section className="marketing-intro" ref={addToRefs}>
                    <div className="marketing-intro-grid">
                        <div className="marketing-intro-text">
                            <h2 className="marketing-section-title">Comprehensive Marketing Excellence</h2>
                            <p className="marketing-intro-description">
                                At CIRIUAE, we specialize in crafting comprehensive marketing strategies that empower brands,
                                attract the right audience, and deliver long-term growth. In today's competitive landscape,
                                a strong marketing foundation is essential — not just to survive but to lead.
                            </p>
                        </div>
                        <div className="marketing-visual-element">
                            <div className="marketing-floating-card">
                                <div className="marketing-card-icon">📈</div>
                                <h3>Strategic Growth</h3>
                                <p>Data-driven approaches for measurable results</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Approach Section */}
                <section className="marketing-approach" ref={addToRefs}>
                    <div className="marketing-approach-container">
                        <h2 className="marketing-section-title">Our Strategic Approach</h2>
                        <div className="marketing-approach-grid">
                            <div className="marketing-approach-card">
                                <div className="marketing-card-number">01</div>
                                <h3>Deep Understanding</h3>
                                <p>We start by understanding your business from the ground up — your mission, values, target market, competitors, and growth potential.</p>
                            </div>
                            <div className="marketing-approach-card">
                                <div className="marketing-card-number">02</div>
                                <h3>Custom Roadmap</h3>
                                <p>Using insights, we develop a custom marketing roadmap that covers every stage of the customer journey, from awareness to retention.</p>
                            </div>
                            <div className="marketing-approach-card">
                                <div className="marketing-card-number">03</div>
                                <h3>Integrated Techniques</h3>
                                <p>Our team combines traditional and digital marketing techniques to ensure your brand speaks the right message at the right time.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="marketing-services" ref={addToRefs}>
                    <div className="marketing-services-container">
                        <h2 className="marketing-section-title">How We Help You Succeed</h2>
                        <div className="marketing-services-grid">
                            {marketingServices.map((service, index) => (
                                <div key={index} className="marketing-service-item" style={{ animationDelay: `${index * 0.1}s` }}>
                                    <div className="marketing-service-icon">✓</div>
                                    <p className="marketing-service-text">{service}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Capabilities Section */}
                <section className="marketing-capabilities" ref={addToRefs}>
                    <div className="marketing-capabilities-container">
                        <h2 className="marketing-section-title">Full-Spectrum Marketing Solutions</h2>
                        <div className="marketing-capabilities-flex">
                            <div className="marketing-capabilities-text">
                                <p>
                                    Whether it's launching a new product, expanding into new regions, or rebranding your business —
                                    we have the tools and expertise to make it successful. From SEO and content marketing to email campaigns,
                                    paid advertising, and social media management, every tactic we use is data-driven and performance-focused.
                                </p>
                            </div>
                            <div className="marketing-capabilities-visual">
                                <div className="marketing-capability-tags">
                                    <span className="marketing-tag">SEO</span>
                                    <span className="marketing-tag">Content Marketing</span>
                                    <span className="marketing-tag">Email Campaigns</span>
                                    <span className="marketing-tag">Paid Advertising</span>
                                    <span className="marketing-tag">Social Media</span>
                                    <span className="marketing-tag">Analytics</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Commitment Section */}
                <section className="marketing-commitment" ref={addToRefs}>
                    <div className="marketing-commitment-container">
                        <div className="marketing-commitment-content">
                            <h2 className="marketing-section-title">Our Commitment to Excellence</h2>
                            <div className="marketing-commitment-grid">
                                <div className="marketing-commitment-item">
                                    <h3>Continuous Improvement</h3>
                                    <p>Marketing is not a one-time effort — it's an ongoing process of testing, learning, and evolving. We monitor key performance metrics and refine strategies for maximum ROI.</p>
                                </div>
                                <div className="marketing-commitment-item">
                                    <h3>Collaborative Partnership</h3>
                                    <p>We work as an extension of your team, sharing knowledge and empowering your internal teams to understand the strategy behind the success.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="marketing-cta" ref={addToRefs}>
                    <div className="marketing-cta-container">
                        <div className="marketing-cta-content">
                            <h2 className="marketing-cta-title">Gain Your Competitive Edge</h2>
                            <p className="marketing-cta-text">
                                Whether you're a startup looking for traction or an established business planning aggressive expansion,
                                we build strategies that scale with you. With CIRIUAE's proven marketing strategy services,
                                you gain more than visibility — you gain a competitive edge.
                            </p>
                            <Link to="/contact">
                                <button className="marketing-cta-button">
                                    Start Your Marketing Journey
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Marketing;
