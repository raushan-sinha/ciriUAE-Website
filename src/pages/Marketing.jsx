import './Marketing.css'

function Marketing() {
    return (
        <>
            <section className="hero" id="home">
                <div className="container" style="display: contents;">
                    <div className="hero-content">
                        <h1>Marketing Strategy</h1>
                        <p>At CiriUAE, we specialize in crafting comprehensive marketing strategies that empower brands, attract
                            the right audience, and deliver long-term growth. In today's competitive landscape, a strong
                            marketing foundation is essential — not just to survive but to lead. Our strategic marketing
                            services are designed to elevate your brand's visibility, align with your business goals, and drive
                            measurable results.</p>

                        <p>We start by understanding your business from the ground up — your mission, values, target market,
                            competitors, and growth potential. Using this insight, we develop a custom marketing roadmap that
                            covers every stage of the customer journey, from awareness to retention. Our team combines
                            traditional and digital marketing techniques to ensure your brand speaks the right message at the
                            right time to the right audience.</p>

                        <p>Whether it's launching a new product, expanding into new regions, or rebranding your business — we
                            have the tools and expertise to make it successful. From SEO and content marketing to email
                            campaigns, paid advertising, and social media management, every tactic we use is data-driven and
                            performance-focused.</p>

                        <div className="benefits">
                            <h3>We help you:</h3>
                            <ul>
                                <li>Define clear marketing goals and KPIs</li>
                                <li>Identify and target high-value customer segments</li>
                                <li>Improve your brand positioning and messaging</li>
                                <li>Enhance your online and offline brand presence</li>
                                <li>Boost engagement across digital channels</li>
                                <li>Increase conversions and sales through optimized campaigns</li>
                            </ul>
                        </div>
                    </div>

                    <div className="hero-image">
                        <img src="https://scontent.fixr3-2.fna.fbcdn.net/v/t1.15752-9/513555398_1271193194515518_8218028332796328777_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_ohc=jeGxRc584CkQ7kNvwH9T9Hx&_nc_oc=AdkxPEXvP4Mhb-a3uht9VWHsOifTS7IzB7nailDPDB0MUAN83-_iNdSOERSig3t7EHpSq3P43Kmz0fcpuZMeorRo&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fixr3-2.fna&oh=03_Q7cD2gE7Tv1hTeKSbR1VzjrNaWivGmKhXHSa9m16_0NkstpZ3g&oe=6884E9B0" alt="Marketing Strategy Visualization - 4K Quality" />
                    </div>
                </div>
            </section>

            <section className="services" id="services">
                <div className="container">
                    <h2>Our Marketing Services</h2>
                    <div className="services-grid">
                        <div className="service-card">
                            <h3>Digital Marketing</h3>
                            <p>Comprehensive digital strategies including SEO, PPC, social media marketing, and content creation
                                to maximize your online presence and drive qualified traffic to your business.</p>
                        </div>
                        <div className="service-card">
                            <h3>Brand Strategy</h3>
                            <p>Develop a compelling brand identity that resonates with your target audience. We create brand
                                positioning, messaging frameworks, and visual identity systems that differentiate you from
                                competitors.</p>
                        </div>
                        <div className="service-card">
                            <h3>Market Research</h3>
                            <p>In-depth analysis of your market, competitors, and customer behavior. We provide actionable
                                insights that inform strategic decisions and identify growth opportunities.</p>
                        </div>
                        <div className="service-card">
                            <h3>Campaign Management</h3>
                            <p>End-to-end campaign execution across multiple channels. From planning and creative development to
                                implementation and optimization, we ensure maximum ROI for your marketing investments.</p>
                        </div>
                        <div className="service-card">
                            <h3>Analytics & Reporting</h3>
                            <p>Data-driven insights and comprehensive reporting that track performance, measure success, and
                                identify areas for improvement. We turn data into actionable strategies.</p>
                        </div>
                        <div className="service-card">
                            <h3>Growth Hacking</h3>
                            <p>Innovative growth strategies that combine creativity, analytical thinking, and social metrics to
                                rapidly scale your business and achieve sustainable growth.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="process" id="process">
                <div className="container">
                    <h2>Our Strategic Process</h2>
                    <div className="process-steps">
                        <div className="step">
                            <div className="step-number">1</div>
                            <h3>Discovery & Analysis</h3>
                            <p>We dive deep into your business, market, and competition to understand your unique challenges and
                                opportunities.</p>
                        </div>
                        <div className="step">
                            <div className="step-number">2</div>
                            <h3>Strategy Development</h3>
                            <p>Based on our findings, we create a comprehensive marketing strategy tailored to your specific
                                goals and budget.</p>
                        </div>
                        <div className="step">
                            <div className="step-number">3</div>
                            <h3>Implementation</h3>
                            <p>We execute the strategy across all relevant channels, ensuring consistent messaging and optimal
                                performance.</p>
                        </div>
                        <div className="step">
                            <div className="step-number">4</div>
                            <h3>Monitor & Optimize</h3>
                            <p>Continuous monitoring and optimization ensure your campaigns deliver maximum results and adapt to
                                market changes.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta" id="contact">
                <div className="container">
                    <h2>Ready to Transform Your Marketing?</h2>
                    <p>What sets us apart is our commitment to continuous improvement. Marketing is not a one-time effort — it's
                        an ongoing process of testing, learning, and evolving. We monitor key performance metrics, analyze
                        campaign data, and refine strategies to ensure maximum return on investment.</p>
                    <p>With CiriUAE's proven marketing strategy services, you gain more than visibility — you gain a competitive
                        edge.</p>
                    <a href="#" className="cta-button" id="careers-infoBtn">Get Started Today</a>
                </div>
            </section>
            <main />

            <footer>
                <div className="container">
                    <p>&copy; 2025 CiriUAE. All rights reserved. Empowering brands through strategic marketing excellence.</p>
                </div>
            </footer>
        </>
    );
}