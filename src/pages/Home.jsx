import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'
import './Home.css'
import { FaXTwitter, FaWhatsapp, FaLinkedin, FaEnvelope } from 'react-icons/fa6'
import { TbSocial } from "react-icons/tb";
function Home() {
  //todo: Social Media links -
  const socialMediaLinks = [
    {
      icon: <FaXTwitter />,
      url: 'https://x.com/CiriUAE',
      title: 'Follow us on X',
      color: '#fff',
      fontSize: '30px'
    },
    {
      icon: <FaWhatsapp />,
      url: 'https://wa.me/971501234567',
      title: 'Chat on WhatsApp',
      color: '#25d366',
      fontSize: '30px'
    },
    {
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/company/ciri-uae',
      title: 'Follow us on LinkedIn',
      color: '#0077b5',
      fontSize: '30px'
    },
    {
      icon: <FaEnvelope />,
      url: 'mailto:INQUIRY@CIRIUAE.COM',
      title: 'Send us an email',
      color: '#ea4335',
      fontSize: '30px'
    }
  ]

  return (
    <>
      <Navbar />

      {/* Home Section */}
      <section id="home" className="section intro-section-home">
        <div className="container">
          <div className="flex-container">
            <div className="video-box">
              <div className="mobile-slider">
                <video src="https://videos.pexels.com/video-files/3864917/3864917-uhd_2560_1440_30fps.mp4" loop muted autoPlay playsInline className="section-video"></video>
              </div>
            </div>
            <div className="content-box">
              <h1 className="main-title-home">Welcome to CiriUAE</h1>
              <p className="intro-text">
                Your trusted partner in management consulting excellence. We provide comprehensive business solutions,
                strategic guidance, and innovative approaches to help your organization achieve sustainable growth and
                competitive advantage in today's dynamic market landscape.
              </p>
              <div className="value-proposition-home">
                <h3>Our Value Proposition</h3>
                <ul>
                  <li>Expert strategic consulting services</li>
                  <li>Tailored solutions for your industry</li>
                  <li>Proven track record of success</li>
                  <li>Innovative business methodologies</li>
                </ul>
              </div>
              <button className="cta-button-home">Get Started Today</button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: About Us */}
      <section id="about" className="section about-section">
        <div className="container">
          <div className="flex-container reverse">
            <div className="image-box">
              <div className="mobile-slider">
                <img src="https://scontent.fpat3-1.fna.fbcdn.net/v/t1.15752-9/511994088_689389990579515_7388488743904703002_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=YYYsIkyngk8Q7kNvwFAZhzb&_nc_oc=AdkFGqls-blAUoyJ5FnmsQEjwXhWdYVq7bHYza8V5L2GQwSp9BMXiRhcsMtPLBu_a4o&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fpat3-1.fna&oh=03_Q7cD2gG7eu4-ActGE1rpywr2uEeIQ1bfJIokz88bKSvPSbmacQ&oe=688B7EAD" alt="About CiriUAE" className="section-image" />
              </div>
            </div>
            <div className="content-box">
              <h2 className="section-title">About Us</h2>
              <p className="section-text">
                CiriUAE was founded with the vision of transforming businesses through strategic consulting and
                innovative solutions. Our mission is to empower organizations with the tools and strategies they need to
                thrive in competitive markets.
              </p>

              <div className="about-content-grid">
                <div className="about-content-item">
                  <h4>Our Expertise</h4>
                  <p>
                    With CIRI UAE, our main vision is to empower businesses through comprehensive business management
                    solutions. Complementing this core focus, we also specialize in digital marketing strategies and
                    investment strategy, all designed to help businesses improve their online visibility, attract more
                    traffic to their website, and convert leads into customers. Our team of experts has years of
                    experience in SEO, PPC, social media marketing, and content creation.
                  </p>
                </div>

                <div className="about-content-item">
                  <h4>Our Mission</h4>
                  <p>
                    At CIRI UAE we aim to transform brands through innovative marketing strategies. Our mission is to
                    connect your brand with the audience it deserves, ensuring that your unique story is effectively
                    communicated.
                  </p>
                </div>

                <div className="about-content-item">
                  <h4>Our Team</h4>
                  <p>
                    Our passionate professionals bring deep expertise in business development, marketing, and strategic
                    planning. We believe in your success.
                  </p>
                </div>

                <div className="about-content-item">
                  <h4>Our Philosophy</h4>
                  <p>
                    We believe that the key to successful marketing is to focus on the needs of the customer. By
                    understanding their pain points and desires, we can create targeted campaigns that resonate with
                    them and drive results for our clients, together with our investment strategy for expansion to best
                    serve those evolving needs.
                  </p>
                </div>

                <div className="about-content-item">
                  <h4>Our Process</h4>
                  <p>
                    Our process is designed to deliver results. We start by conducting a thorough analysis of our
                    client's business and industry, followed by a comprehensive strategy development phase. From there,
                    we execute and optimize our campaigns for maximum impact.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Services */}
      <section id="services" className="section services-section-home">
        <div className="container">
          <h2 className="section-title center">Our Services</h2>
          <p className="services-intro">
            We provide comprehensive business solutions tailored to your specific needs. Our expert team delivers strategic guidance and innovative approaches to help your organization achieve sustainable growth and competitive advantage.
          </p>

          <div className="services-content-grid-new">
            <div className="service-content-card">
              <div className="service-icon">
                <img src="https://scontent.fpat2-1.fna.fbcdn.net/v/t1.15752-9/509303090_764737512885971_2968192881401211672_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x1280&ctp=s480x480&_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_ohc=JEdqRz4jtOQQ7kNvwE8iwW1&_nc_oc=Adnj2uOccEbIDQKrhIgspOsdVBVK7wuW2bOcvFnbNFrTzBNZJTT1gwCm13TlxFpWg4M&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=scontent.fpat2-1.fna&oh=03_Q7cD2gEI1zhwM1qVmzijpk_8jdkagHPft4FFw8iQ8gWXAU8qkg&oe=688C582D" alt="Marketing Strategy Icon" className="service-image" />
                <div className="emoji-overlay">📈</div>
              </div>
              <h3>Marketing Strategy</h3>
              <p className="service-description">
                We craft data-driven, market-specific marketing strategies that align with your brand vision and business goals. Our approach involves in-depth market analysis, competitive positioning, customer profiling, and campaign planning to boost visibility, engagement, and conversions across key markets.
              </p>
            </div>

            <div className="service-content-card">
              <div className="service-icon">
                <img src="https://scontent.fpat2-2.fna.fbcdn.net/v/t1.15752-9/512681648_1316336106516302_3684395483662138063_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_ohc=89LryC7-qDYQ7kNvwF2Hcom&_nc_oc=Adnz2xOkJukUR2QUNL3VaKwV6xso23_EJWQVx2HwCvpBcaa2NWi9fp2uSV76dfs7RAQ&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=scontent.fpat2-2.fna&oh=03_Q7cD2gH7NUT8QjW2BnkKd6KM2LFLCq1FhSsJnPJT1V9yrT_Pkg&oe=688C657A" alt="New Business Territory Icon" className="service-image" />
                <div className="emoji-overlay">🌍</div>
              </div>
              <h3>New Business Territory Services</h3>
              <p className="service-description">
                CiriUAE assists businesses in exploring and entering new territories with confidence. We provide end-to-end support in market entry strategy, regulatory compliance, competitive landscape evaluation, localization plans, and go-to-market execution.
              </p>
            </div>

            <div className="service-content-card">
              <div className="service-icon">
                <img src="https://scontent.fpat2-7.fna.fbcdn.net/v/t1.15752-9/511040692_697924176417903_6490408146052389315_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=oXsPTT2AobwQ7kNvwEKpMPQ&_nc_oc=AdlsUmE-Yh-afPgchfEBQnhrxY6-bzYAD3weaWpOJiDMbfepS_63Pf4W9cZwnkuKsYo&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=scontent.fpat2-7.fna&oh=03_Q7cD2gGpyAqfBJy2_HI9J7lHxnKd-MjhKw1ctyTta-BXktjLRw&oe=688C4BEE" alt="Business Development Icon" className="service-image" />
                <div className="emoji-overlay">🚀</div>
              </div>
              <h3>Business Development Strategy</h3>
              <p className="service-description">
                Our team develops customized business development blueprints that identify growth areas, strategic leads, partnership opportunities, and expansion tactics to scale businesses sustainably in new and existing markets.
              </p>
            </div>

            <div className="service-content-card">
              <div className="service-icon">
                <img src="https://scontent.fpat2-7.fna.fbcdn.net/v/t1.15752-9/513665286_736129518786332_6974681536189359121_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=DnWBjm5Bky4Q7kNvwFz9V6e&_nc_oc=Adn9byMTcJhUplhuP4QaVPblfHtRrOkGaUcgd6W3UC7BP2aX0wVofrcl4nd5cAXVxEg&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=scontent.fpat2-7.fna&oh=03_Q7cD2gE1IYCZopc32uwSrA88lQvxFJzdgqdktPYH8D2r6e-CgA&oe=688C6D0C" alt="Project Management Icon" className="service-image" />
                <div className="emoji-overlay">📋</div>
              </div>
              <h3>Project Management</h3>
              <p className="service-description">
                We deliver effective project planning, coordination, and execution services. Whether launching a new product, entering a market, or restructuring operations, CiriUAE ensures projects are delivered on time, within budget, and aligned with strategic goals.
              </p>
            </div>

            <div className="service-content-card">
              <div className="service-icon">
                <img src="https://scontent.fpat2-7.fna.fbcdn.net/v/t1.15752-9/512094944_1391663771895644_8217416743799240671_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=evZZveIyxQcQ7kNvwE6qcMG&_nc_oc=AdnNvHr-sLDmhqUPMdnKv6DlIiBLjqAxGIhrq_aeqWSQX5Ia0C2iFgvJJtAZxnb_Yl4&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=scontent.fpat2-7.fna&oh=03_Q7cD2gHomxmc-mY1wW5RYWqeklIiN2J1KOQgqhvsOoLhnK8t7Q&oe=688C4BB9" alt="Product Marketing Icon" className="service-image" />
                <div className="emoji-overlay">🎯</div>
              </div>
              <h3>Product Marketing Plans</h3>
              <p className="service-description">
                We design and implement actionable product marketing strategies to drive demand, differentiate your offerings, and maximize market share. Services include product positioning, pricing models, promotional campaigns, and lifecycle management.
              </p>
            </div>

            <div className="service-content-card">
              <div className="service-icon">
                <img src="https://scontent.fpat2-2.fna.fbcdn.net/v/t1.15752-9/503114812_2249845348765437_2902754464924939348_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x1280&ctp=s480x480&_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=rXQjwjnb5w8Q7kNvwEgXFhh&_nc_oc=AdlsYGjRec47o_rhoVW8KLddQzYVlry6-yy2DwVb5qlAHhEilU2bhZqrUW6XmdM4Si8&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=scontent.fpat2-2.fna&oh=03_Q7cD2gFvfihOxNlQhuREV5GUneMwLscCWwx6OJeu-XGm1fEjLA&oe=688C49B5" alt="Business Management Icon" className="service-image" />
                <div className="emoji-overlay">⚙️</div>
              </div>
              <h3>Business Management Solutions</h3>
              <p className="service-description">
                CiriUAE offers comprehensive business management solutions to improve organizational performance, operational efficiency, and leadership effectiveness. We focus on strategic alignment, process optimization, resource planning, and performance tracking.
              </p>
            </div>

            <div className="service-content-card">
              <div className="service-icon">
                <img src="https://scontent.fpat2-4.fna.fbcdn.net/v/t1.15752-9/508610171_750006684230873_1549855642984009963_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=rCHnKHVrbeoQ7kNvwFV6RPi&_nc_oc=Adlx1ZliKCPY8IddgF8JgTJ8LO9ylzgFCdefXl_c8oQdirXrTw_bDbNTesNMnsGmXaU&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=scontent.fpat2-4.fna&oh=03_Q7cD2gHpQOVzKZQ-P_1dqEWwKZv8oqby0_w2CMEUW3PbebGkBw&oe=688C6A1E" alt="Distribution Network Icon" className="service-image" />
                <div className="emoji-overlay">🌐</div>
              </div>
              <h3>Development of Distribution Network</h3>
              <p className="service-description">
                We help businesses establish, expand, and optimize distribution networks in target markets. Our approach includes partner identification, territory planning, supply chain strategy, and distributor engagement models tailored to each region's dynamics.
              </p>
            </div>

            <div className="service-content-card">
              <div className="service-icon">
                <img src="https://scontent.fpat2-4.fna.fbcdn.net/v/t1.15752-9/508912755_1083698900491210_4078353333278929228_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=111&ccb=1-7&_nc_sid=0024fc&_nc_ohc=nP0ygizPPlEQ7kNvwHl--12&_nc_oc=AdmL-iLE2SaMbITO58rwGl5WsjNCDWFOjvpr8NPlFcVZmDmOpG5ngG6fBqEta1iGwn8&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=scontent.fpat2-4.fna&oh=03_Q7cD2gFAeoMNv22P_2YLHcJawwx24hIUC3wLbiA_gV_l6TOcug&oe=688C5F76" alt="Distribution Roadmap Icon" className="service-image" />
                <div className="emoji-overlay">🗺️</div>
              </div>
              <h3>Distribution Network Road Map</h3>
              <p className="service-description">
                CiriUAE builds strategic road maps for distribution expansion, covering geographic segmentation, logistics planning, channel development, digital integration, and long-term scalability frameworks.
              </p>
            </div>

            <div className="service-content-card">
              <div className="service-icon">
                <img src="https://scontent.fpat2-2.fna.fbcdn.net/v/t1.15752-9/510318959_737410065297554_7641379433325896808_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=RdWpdVKQkfEQ7kNvwFlkilE&_nc_oc=AdkP4ESfxSJxg4CWW1Rm--zJhL3G3_tlg6HHlNI7XYeFyekDgwyZ_oYVQKOttIDFfdA&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=scontent.fpat2-2.fna&oh=03_Q7cD2gG0UBrWo4BIc9l-1SrnIuGl99nHPWvvkxGcB1YME1CrVw&oe=688C4A50" alt="Problem Solving Icon" className="service-image" />
                <div className="emoji-overlay">🔧</div>
              </div>
              <h3>Problem Solving with Existing Systems</h3>
              <p className="service-description">
                We provide diagnostic evaluations and solutions for businesses facing challenges in their current systems. Our consultants assess operational bottlenecks, inefficiencies, or outdated processes and deliver practical, tech-enabled recommendations for improvement.
              </p>
            </div>

            <div className="service-content-card">
              <div className="service-icon">
                <img src="https://scontent.fpat2-7.fna.fbcdn.net/v/t1.15752-9/509745156_4137746703129274_1615314728760735636_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=FxBVlGNYSicQ7kNvwHqZ_5u&_nc_oc=AdlryRvWx8euz62AkwzXZ3qg_EnP8AqeQrr08inLMvqmq3jaW-0XkBZUipfiZGKFN94&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=scontent.fpat2-7.fna&oh=03_Q7cD2gHW1lPIAunVN9Pg6cjquU6CkczTaF1gZ5wsGZwVxMt0lg&oe=688C53CA" alt="Strategic Partnerships Icon" className="service-image" />
                <div className="emoji-overlay">🤝</div>
              </div>
              <h3>Strategic Partnerships Planning</h3>
              <p className="service-description">
                CiriUAE identifies and facilitates strategic partnerships that enhance capability, reach, and competitiveness. We develop partnership frameworks, negotiation strategies, and collaboration models that align with business goals and mutual benefit.
              </p>
            </div>

            <div className="service-content-card">
              <div className="service-icon">
                <img src="https://scontent.fpat2-4.fna.fbcdn.net/v/t1.15752-9/509313269_2461844370869086_4129815263051984865_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=J4plhG5GJ4sQ7kNvwHFe3K7&_nc_oc=AdkcRhCPkGs8xOv3jedRqmJmGpDNtxpip98ztHsXtY_tDfUl_yXqaAn0bl5SeAjOV2M&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=scontent.fpat2-4.fna&oh=03_Q7cD2gG6TgPJDMI2bLfwKay3Q4bk-BOUHNQVWVo0Hxka-wNQqQ&oe=688C48C8" alt="Collaboration Solutions Icon" className="service-image" />
                <div className="emoji-overlay">🔗</div>
              </div>
              <h3>Collaboration Solutions</h3>
              <p className="service-description">
                We design structured collaboration models for cross-border ventures, joint initiatives, or internal cross-functional teams. Our focus is on fostering synergy, transparency, and mutual accountability through digital tools and effective communication channels.
              </p>
            </div>

            <div className="service-content-card">
              <div className="service-icon">
                <img src="https://scontent.fpat2-1.fna.fbcdn.net/v/t1.15752-9/511152013_1305730264448362_60703728244716014_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_ohc=4mIz3QvkaKQQ7kNvwGitrkJ&_nc_oc=AdmeUWEdZN5l0k_ucn5rr1FMVg7Rxvgu44_NB3TgFxPv849AbDSl6th9GBUJ2zIYrno&_nc_ad=z-m&_nc_cid=1174&_nc_zt=23&_nc_ht=scontent.fpat2-1.fna&oh=03_Q7cD2gHmo3V8p3GDP-gBEM9qyi_5mQquwo4G-1UlOBHMR6buFg&oe=688C4879" alt="Financial Modeling Icon" className="service-image" />
                <div className="emoji-overlay">💰</div>
              </div>
              <h3>Financial Modeling for New Business</h3>
              <p className="service-description">
                Our financial experts build robust financial models to evaluate the viability, profitability, and risk factors of new business ideas. This includes revenue forecasting, cost analysis, ROI projections, cash flow planning, and investor-ready financial presentations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Careers */}
      <section id="careers" className="section careers-section">
        <div className="container">
          <div className="careers-hero">
            <h1 className="careers-main-title">We're Hiring!</h1>
            <h2 className="careers-subtitle">Join Our Team</h2>
            <p className="careers-intro">
              At CiriUAE, we're passionate about helping businesses grow and thrive. We're always looking for talented
              individuals to join our team and contribute to our mission. Check out our current job openings and apply
              today!
            </p>
          </div>

          <div className="form-section" id="application-form">
            <form className="form-container" action="#" method="POST" encType="multipart/form-data">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email*</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about yourself and why you'd like to join our team..."
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="resume">Attach Resume</label>
                <div className="file-upload">
                  <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" multiple />
                  <label htmlFor="resume" className="file-upload-label">
                    📎 Click to upload or drag files here
                  </label>
                </div>
                <div className="attachments-info">Attachments (0)</div>
              </div>
              <button type="submit" className="submit-btn">
                Submit Application
              </button>
              <div className="recaptcha-notice">
                This site is protected by reCAPTCHA and the Google{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">
                  Terms of Service
                </a>{" "}
                apply.
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Section 5: Industries */}
      <section id="industries" className="section industries-section">
        <div className="container">
          <h2 className="section-title center">Industries We Serve</h2>
          <p className="industries-intro">
            At CiriUAE, we understand that each industry has its own ecosystem—unique challenges, customer expectations, and compliance standards. That's why we develop tailored strategies and services to drive measurable results for your specific domain. Whether you're in healthcare, finance, or emerging technology, our expertise helps you solve problems, seize opportunities, and scale sustainably.
          </p>

          <div className="industries-content-grid">
            <div className="industry-content-card">
              <div className="industry-icon">
                <img src="https://scontent.fpat1-1.fna.fbcdn.net/v/t1.15752-9/510259636_3599011237061292_1592911840479562705_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x1280&ctp=s480x480&_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=cQYfw9WLfmMQ7kNvwEX8FVg&_nc_oc=AdnBa2bpTFBeNQe6iaukuakXiXFr2t8c86-mCn7y4EpfOfNEG46FPu3sBHV6XPchX0snVqFnKVY_MGiNKNfW_RNw&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fpat1-1.fna&oh=03_Q7cD2gFF4A0N4urGdNaAqaiX9sjVrYr_RYLU8yU4V_nDq9kIHw&oe=688C2534" alt="Healthcare Icon" className="industry-image" />
              </div>
              <h3>Healthcare</h3>
              <p className="industry-description">
                Healthcare organizations today face rising patient expectations, strict regulatory demands, and the need for digital transformation.
              </p>
              <div className="industry-services">
                <h4>We help you:</h4>
                <ul>
                  <li>Streamline clinical and administrative workflows</li>
                  <li>Enhance patient engagement with digital tools</li>
                  <li>Ensure data security and compliance (HIPAA, GDPR)</li>
                  <li>Adopt technologies like telemedicine, AI diagnostics, and EHR integrations</li>
                </ul>
              </div>
              <div className="industry-outcome">
                <strong>Outcome:</strong> Improved efficiency, better patient care, and faster innovation in healthcare delivery.
              </div>
            </div>

            <div className="industry-content-card">
              <div className="industry-icon">
                <img src="https://scontent.fpat1-1.fna.fbcdn.net/v/t1.15752-9/510801932_697092323108762_5792537515266678411_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x1280&ctp=s480x480&_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=iRwDTGZUEG0Q7kNvwGxkUYu&_nc_oc=AdmDPyCQ20Jko-TXYoEWWXbRyLQZwCF-aKhs8RiNVV9DjdpEBXkYLH0yrwiTdL5SfpcRDrGF1f8Pr-KWTI2X8ohB&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fpat1-1.fna&oh=03_Q7cD2gEqL7olKGzXa7MSoM8yez7FvFF2fMdRbH_iI1eqcpFkxQ&oe=688C3031" alt="Finance Icon" className="industry-image" />
              </div>
              <h3>Finance</h3>
              <p className="industry-description">
                The financial sector demands precision, compliance, and innovation. From banking to fintech, we provide robust, future-ready solutions.
              </p>
              <div className="industry-services">
                <h4>We help you:</h4>
                <ul>
                  <li>Strengthen cybersecurity and risk management</li>
                  <li>Improve digital customer experiences</li>
                  <li>Automate workflows and reporting</li>
                  <li>Stay compliant with global financial regulations</li>
                </ul>
              </div>
              <div className="industry-outcome">
                <strong>Outcome:</strong> More secure, agile, and customer-centric financial operations.
              </div>
            </div>

            <div className="industry-content-card">
              <div className="industry-icon">
                <img src="https://scontent.fpat1-1.fna.fbcdn.net/v/t1.15752-9/513265926_3310181492473106_4338510199689079918_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x1280&ctp=s480x480&_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_ohc=rw6ObUUPW8QQ7kNvwGLOC6I&_nc_oc=AdlB0Q8TMoUW_d0YxkFCkJImBKcB4RWtPRmtlXtGSxwuCsoOXvvdml09lkvREUHRrhg1fNX3_afr-FDtBgW1Jnzi&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fpat1-1.fna&oh=03_Q7cD2gEVwY9cgsRRqbtF12X3Rqh5wt9kuWt0mn8oUAAq06zwgQ&oe=688C413C" alt="Technology Icon" className="industry-image" />
              </div>
              <h3>Technology</h3>
              <p className="industry-description">
                In the tech industry, speed, scalability, and innovation are non-negotiable. We partner with startups, SaaS companies, and IT enterprises to accelerate digital success.
              </p>
              <div className="industry-services">
                <h4>We help you:</h4>
                <ul>
                  <li>Build scalable cloud and software solutions</li>
                  <li>Optimize DevOps and product development cycles</li>
                  <li>Enhance UI/UX and customer retention</li>
                  <li>Integrate AI, ML, and data analytics</li>
                </ul>
              </div>
              <div className="industry-outcome">
                <strong>Outcome:</strong> Faster innovation, improved product delivery, and stronger market positioning.
              </div>
            </div>

            <div className="industry-content-card">
              <div className="industry-icon">
                <img src="https://scontent.fpat1-1.fna.fbcdn.net/v/t1.15752-9/511034879_1790544494860632_4058571929223109175_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x1280&ctp=s480x480&_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_ohc=8V5lWRwuhnkQ7kNvwFXXRF0&_nc_oc=AdmG0QofZHCGqSjrOL3TxfMXTtNK_8Ut-KPU7rzYKroa0keRClYciKXiMOVMSn-UmMaF_cQmlk7d_DFHCx-OXnBn&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fpat1-1.fna&oh=03_Q7cD2gFPqUmmtRBsKfnamXqpODrBaZILo7yRc5NDN2IB0ZAbsg&oe=688C4FB0" alt="Manufacturing Icon" className="industry-image" />
              </div>
              <h3>Manufacturing</h3>
              <p className="industry-description">
                The manufacturing industry is embracing Industry 4.0—from automation to smart factories. We help companies modernize and stay competitive.
              </p>
              <div className="industry-services">
                <h4>We help you:</h4>
                <ul>
                  <li>Automate production and inventory systems</li>
                  <li>Implement smart factory and IoT solutions</li>
                  <li>Reduce operational costs with data-driven decisions</li>
                  <li>Optimize supply chains and resource planning</li>
                </ul>
              </div>
              <div className="industry-outcome">
                <strong>Outcome:</strong> Enhanced productivity, reduced waste, and end-to-end digital visibility.
              </div>
            </div>

            <div className="industry-content-card">
              <div className="industry-icon">
                <img src="https://scontent.fpat1-1.fna.fbcdn.net/v/t1.15752-9/511217358_1915811818959625_7190623423208180979_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x1280&ctp=s480x480&_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=3FKjwhVt4rAQ7kNvwHs7278&_nc_oc=Adlbyl3_Etvl6BtVf73ccD5QZEGzVjmwJPDv9l5z6znZAglZV-Ks2ZQW_aTXPuv0nzU04KaME4TIbjb4JIedBVQx&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fpat1-1.fna&oh=03_Q7cD2gG_jsdFDtYxdOuJa3t2ElKNK_QIbjcJVMDQjSLIlJY4uA&oe=688C2003" alt="Retail Icon" className="industry-image" />
              </div>
              <h3>Retail</h3>
              <p className="industry-description">
                The retail landscape is changing rapidly with omni channel trends and evolving customer behavior. We support both physical and digital retail success.
              </p>
              <div className="industry-services">
                <h4>We help you:</h4>
                <ul>
                  <li>Build seamless e-commerce platforms</li>
                  <li>Enhance CRM and personalized marketing</li>
                  <li>Manage inventory and logistics efficiently</li>
                  <li>Leverage analytics for customer insights</li>
                </ul>
              </div>
              <div className="industry-outcome">
                <strong>Outcome:</strong> Higher sales, better customer experiences, and improved operational control.
              </div>
            </div>

            <div className="industry-content-card">
              <div className="industry-icon">
                <img src="https://scontent.fpat1-1.fna.fbcdn.net/v/t1.15752-9/513265926_3310181492473106_4338510199689079918_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x1280&ctp=s480x480&_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_ohc=rw6ObUUPW8QQ7kNvwGLOC6I&_nc_oc=AdlB0Q8TMoUW_d0YxkFCkJImBKcB4RWtPRmtlXtGSxwuCsoOXvvdml09lkvREUHRrhg1fNX3_afr-FDtBgW1Jnzi&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fpat1-1.fna&oh=03_Q7cD2gEVwY9cgsRRqbtF12X3Rqh5wt9kuWt0mn8oUAAq06zwgQ&oe=688C413C" alt="Energy Icon" className="industry-image" />
              </div>
              <h3>Energy</h3>
              <p className="industry-description">
                With the global focus on clean and efficient energy, companies need smart, sustainable solutions.
              </p>
              <div className="industry-services">
                <h4>We help you:</h4>
                <ul>
                  <li>Digitize operations and grid management</li>
                  <li>Integrate renewable energy data and tools</li>
                  <li>Monitor and optimize asset performance</li>
                  <li>Navigate ESG and regulatory reporting</li>
                </ul>
              </div>
              <div className="industry-outcome">
                <strong>Outcome:</strong> Future-proofed operations with a focus on sustainability, compliance, and efficiency.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Case Studies */}
      <section id="case-studies" className="section case-studies-section">
        <div className="container">
          <div className="flex-container">
            <div className="image-box">
              <div className="mobile-slider">
                <img src="https://scontent.fpat3-1.fna.fbcdn.net/v/t1.15752-9/511345331_1920110802153860_2527275968575791835_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=LQCVkhCN80oQ7kNvwGIy5rz&_nc_oc=AdmQenN5sS0D0uBFQrFKtgK3BVQh7rcSiOmquU49eRRHUDTpvLGuHKWUiORRQ99HD04&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fpat3-1.fna&oh=03_Q7cD2gG3zcFgwstZnVw7CtvN1DyJkfjsa9FCSREHEHzWnv_hKw&oe=688B8425" alt="Case Studies" className="section-image" />
              </div>
            </div>
            <div className="content-box">
              <h2 className="section-title">Case Studies</h2>
              <p className="section-text">
                Real-life examples of successful projects and client testimonials. Discover how we've helped businesses
                transform their operations, increase revenue, and achieve sustainable growth through our proven
                methodologies.
              </p>
              <div className="testimonial">
                <blockquote>
                  "CiriUAE transformed our business strategy and helped us achieve 300% growth in just 18 months."
                </blockquote>
                <cite>- CEO, CiriUAE (Tech Startup)</cite>
              </div>
              <Link to="/casestudies">
                <button className="animated-button" id="case-infoBtn">
                  <span>More Info</span>
                  <div className="button-animation"></div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Blog */}
      <section id="blog" className="section blog-section">
        <div className="container">
          <div className="flex-container reverse">
            <div className="image-box">
              <div className="mobile-slider">
                <img src="https://scontent.fpat3-2.fna.fbcdn.net/v/t1.15752-9/509289697_1217712170035629_4094386884823209027_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_ohc=SlkP6ieLWw0Q7kNvwGYJtqA&_nc_oc=AdnD5YhCFoZLCtuMSsN6Cpii3zSoq3B5PJ2FzWTk4VLkpmKYuMLj91KfOxPmxa-76IU&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fpat3-2.fna&oh=03_Q7cD2gFP0wUJdqAOvRlSfCBB7rT1NXnktJhL4tDrSnQLuzfJEQ&oe=688B6F3B" alt="Blog Insights" className="section-image" />
              </div>
            </div>
            <div className="content-box">
              <h2 className="section-title">Blog</h2>
              <p className="section-text">
                Insights, news, and thought leadership articles on management consulting and industry trends. Stay
                updated with the latest business strategies, market insights, and expert opinions from our team of
                seasoned consultants.
              </p>
              <div className="blog-preview">
                <div className="blog-item">
                  <h4>Latest Article: Digital Transformation in 2025</h4>
                  <p>Exploring the key trends shaping digital transformation...</p>
                </div>
                <div className="blog-item">
                  <h4>Market Analysis: UAE Business Landscape</h4>
                  <p>Comprehensive analysis of emerging opportunities...</p>
                </div>
              </div>
              <button className="animated-button" id="blog-infoBtn">
                <span>More Info</span>
                <div className="button-animation"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Contact Us */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="flex-container">
            <div className="image-box">
              <div className="mobile-slider">
                <img src="https://scontent.fpat3-1.fna.fbcdn.net/v/t1.15752-9/511024834_1261574778637677_2413754523742347809_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=3WDBSDDIIRMQ7kNvwHvOJb_&_nc_oc=AdldRDDZ54KUDV9IRUICDRZRaGJ1sZvZ8jKt-FOKzwkmyo92s9srwRcfDfLvW4aDtxU&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fpat3-1.fna&oh=03_Q7cD2gHAldFNZ2MtAH85j38rGW6qsy1D8NW8HOHelJaQMMJK0A&oe=688B6926" alt="Contact CiriUAE" className="section-image" />
              </div>
            </div>
            <div className="content-box">
              <h2 className="section-title">Contact Us</h2>
              <p className="section-text">
                Ready to transform your business? Get in touch with our expert consultants today and discover how we can help you achieve your goals.
              </p>

              {/* Contact Information Grid */}
              <div className="contact-info-grid">
                <div className="contact-info-card">
                  <div className="contact-card-header">
                    <div className="contact-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 6.13401 6.13401 3 10 3H14C17.866 3 21 6.13401 21 10Z" stroke="#667eea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="12" cy="10" r="3" stroke="#667eea" strokeWidth="2" />
                      </svg>
                    </div>
                    <h3>CIRI UAE</h3>
                  </div>
                  <div className="contact-details">
                    <div className="contact-detail">
                      <strong>Address:</strong>
                      <p>Free Zone - Ajman - United Arab Emirates</p>
                    </div>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-card-header">
                    <div className="contact-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 16.92V19.92C22 20.52 21.52 21 20.92 21H3.08C2.48 21 2 20.52 2 19.92V16.92C2 16.32 2.48 15.84 3.08 15.84H20.92C21.52 15.84 22 16.32 22 16.92ZM22 7.08V10.08C22 10.68 21.52 11.16 20.92 11.16H3.08C2.48 11.16 2 10.68 2 10.08V7.08C2 6.48 2.48 6 3.08 6H20.92C21.52 6 22 6.48 22 7.08Z" fill="#667eea" />
                        <path d="M15.05 6.85L11.27 10.63C10.89 11.01 10.11 11.01 9.73 10.63L5.95 6.85" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3>Contact Information</h3>
                  </div>
                  <div className="contact-details">
                    <div className="contact-detail">
                      <strong>Phone:</strong>
                      <p>0971524308085</p>
                    </div>
                    <div className="contact-detail">
                      <strong>Email:</strong>
                      <p>INQUIRY@CIRIUAE.COM</p>
                    </div>
                  </div>
                </div>

                <div className="contact-info-card">
                  <div className="contact-card-header">
                    <div className="contact-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="#667eea" strokeWidth="2" />
                        <polyline points="12,6 12,12 16,14" stroke="#667eea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3>Business Hours</h3>
                  </div>
                  <div className="contact-details">
                    <div className="contact-detail">
                      <strong>Open today:</strong>
                      <p>09:00 am – 05:00 pm</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="social-links-section">
                <h4>Follow Us</h4>
                <div className="social-links">
                  <a href="https://x.com/CiriUAE" className="social-link twitter" title="Follow us on X">
                    <FaXTwitter />
                  </a>
                  <a href="https://wa.me/971524308085" className="social-link whatsapp" title="Chat on WhatsApp">
                    <FaWhatsapp />
                  </a>
                  <a href="https://www.linkedin.com/company/ciri-uae" className="social-link linkedin" title="Connect on LinkedIn">
                    <FaLinkedin />
                  </a>
                  <a href="mailto:INQUIRY@CIRIUAE.COM" className="social-link email" title="Send us an email">
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Boxes */}
      <section className="service-boxes-section">
        <div className="container">
          <h2 className="section-title center">Our Specialized Services</h2>
          <div className="service-boxes-grid">
            <div className="service-box">
              <div className="mobile-slider">
                <img src="https://scontent.fpat3-1.fna.fbcdn.net/v/t1.15752-9/503246957_1421528622226981_6472157852810353628_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_ohc=EcrfEt7owcgQ7kNvwEOJWh0&_nc_oc=AdnoHQhjm0rM_A8CGMowLfPMwgxCPmo27nCcltmwtHE87dezhONsyD-n4f5K9kG7X8c&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fpat3-1.fna&oh=03_Q7cD2gFMsxGHa3MPybNLz751YLm_vlYvgcp5E6x2M9sttbpJwg&oe=688B8561" alt="Marketing Strategy" />
              </div>
              <h3>Marketing Strategy</h3>
              <p>Comprehensive marketing strategies to boost your brand presence</p>
              <Link to="/marketing">
                <button className="service-button" id="marketing-infoBtn">
                  Learn More
                </button>
              </Link>
            </div>
            <div className="service-box">
              <div className="mobile-slider">
                <img src="https://scontent.fpat3-3.fna.fbcdn.net/v/t1.15752-9/512011368_2268121560313998_3385098190153310241_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Gub8Uk3a2J0Q7kNvwHrGc67&_nc_oc=AdlFkXt0QGOlNTlJ29zQVYUbyOQAMJNDoln6w1YRtadxkC-hAN4clViFFJvzxM_MlRo&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fpat3-3.fna&oh=03_Q7cD2gFUTz1JqSiiIQ0EroxsXt3wIx4kAgL1ZsyLeN2FGVU_Qg&oe=688B5B14" alt="Business Development" />
              </div>
              <h3>Business Development Strategy</h3>
              <p>Strategic business development plans for sustainable growth</p>
              <Link to="/business">
                <button className="service-button" id="businessDev-infoBtn">
                  Learn More
                </button>
              </Link>
            </div>
            <div className="service-box">
              <div className="mobile-slider">
                <img src="https://scontent.fpat3-3.fna.fbcdn.net/v/t1.15752-9/510199060_1210755954134063_3037221840770775411_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=xsJPfFRUVGkQ7kNvwG3QEZs&_nc_oc=AdmzNkEHe-4XLPxs-UNT2Ez6uwFaGdlyd3JpqxNdhEqvZbIdqTM-0m2m7a35ZSbG2Fg&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fpat3-3.fna&oh=03_Q7cD2gG06lAU-1b1rbxbGZLHwLmUzbBSFEfKbjSAzeDB8XBwEQ&oe=688B59BD" alt="Financial Modeling" />
              </div>
              <h3>Financial Modeling</h3>
              <p>Advanced financial models for informed decision making</p>
              <Link to="/financial">
                <button className="service-button" id="financial-infoBtn">
                  Learn More
                </button>
              </Link>
            </div>
            <div className="service-box">
              <div className="mobile-slider">
                <img src="https://scontent.fpat3-2.fna.fbcdn.net/v/t1.15752-9/508510497_1098933205424649_1695422887453197764_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=_Sv3mrnHKQ4Q7kNvwHViTio&_nc_oc=AdkHyYp7NvUdEgvcuyI8XYfcDejkx2BATREsPGQPsMPbpC49M6VMsP2PAKQWzRwC0QA&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fpat3-2.fna&oh=03_Q7cD2gFIqPnat72VLUAa8lKFnWsMT-nVJBartY2Fch3MO-ZQCA&oe=688B6DFA" alt="Digital Marketing" />
              </div>
              <h3>Digital Marketing Plan</h3>
              <p>Cutting-edge digital marketing strategies for online success</p>
              <Link to="/digital">
                <button className="service-button" id="digital-infoBtn">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Resource and CTA Boxes */}
      <section className="resource-cta-section">
        <div className="container">
          <h2 className="section-title center">Resources & Get Started</h2>
          <div className="resource-cta-grid">
            <div className="resource-box">
              <div className="mobile-slider">
                <img src="https://scontent.fpat3-2.fna.fbcdn.net/v/t1.15752-9/509303090_764737512885971_2968192881401211672_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_ohc=JEdqRz4jtOQQ7kNvwE_feCz&_nc_oc=AdlT4pVi6L2SqLiUruyIDJNOsy9r84zmJvZ1z4P7cZfVs-sZ7HYIFzxCyfpmqpUwsDQ&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fpat3-2.fna&oh=03_Q7cD2gE08psC0Prun4FMy7Y2_PWsOvAdtNfQJheHxIazFTxR_Q&oe=688B772D" alt="Resources" />
              </div>
              <h3>Resources</h3>
              <p>Library of whitepapers, e-books, webinars, and downloadable resources</p>
              <Link to="/resources">
                <button className="resource-button" id="resource-infoBtn">
                  Access Resources
                </button>
              </Link>
            </div>
            <div className="resource-box">
              <div className="mobile-slider">
                <img src="https://scontent.fpat1-1.fna.fbcdn.net/v/t1.15752-9/512681648_1316336106516302_3684395483662138063_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x1280&ctp=s480x480&_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_ohc=89LryC7-qDYQ7kNvwFzyezD&_nc_oc=AdmC-3uRXpHPYwivxCv5IHH293VhFJX1A4kWdyICFFalmWIObCznT5EEKuJi5sOa6Qo4d6AK5H-Qq7osj-KoiivY&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fpat1-1.fna&oh=03_Q7cD2gFzG-NOf7xbhYqIiPWVzCQGTFLflMiGPoqYXU_YnR6Zug&oe=688B847A" alt="News" />
              </div>
              <h3>News</h3>
              <p>Latest news and press releases about CiriUAE</p>
              <Link to="/news">
                <button className="resource-button" id="news-infoBtn">
                  Read News
                </button>
              </Link>
            </div>
            <div className="resource-box">
              <div className="mobile-slider">
                <img src="https://scontent.fpat1-2.fna.fbcdn.net/v/t1.15752-9/512094944_1391663771895644_8217416743799240671_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x1280&ctp=s480x480&_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=-6-VcqK5l_sQ7kNvwGGLa_a&_nc_oc=AdlvgzsDwQR8ZmsKHrXSK1Ewx7Zeig-z2l_sRsXugTHKTFMZRIgtrtutdWIV7avI_yevxPvzFG5AX1mFpL7ua4yR&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fpat1-2.fna&oh=03_Q7cD2gECPABRQ7Uva9thy4g08mQyYm3DF3byStx_4Cw6PWzEiw&oe=688B6AB9" alt="FAQs" />
              </div>
              <h3>FAQs</h3>
              <p>Frequently asked questions about CiriUAE services and company</p>
              <Link to="/faqs">
                <button className="resource-button" id="faqs-infoBtn">
                  View FAQs
                </button>
              </Link>
            </div>
            <div className="cta-box">
              <div className="mobile-slider">
                <img src="https://scontent.fpat3-2.fna.fbcdn.net/v/t1.15752-9/512731827_771375165535673_8604526964516363137_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=zYm_bsvCK4UQ7kNvwHaKyvP&_nc_oc=AdlsucNFBbTfHhdUrZKdh_POlzHO0MBTGAIe6w5cHThTxZS-J9WvjQYMGAZho3eJxeI&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fpat3-2.fna&oh=03_Q7cD2gEek4OKgyDQN5E7WqcBHDeX6HifYqUPKKKbj2_Xln3Ulg&oe=688B81FC" alt="Get in Touch" />
              </div>
              <h3>Get in Touch</h3>
              <p>Contact CiriUAE for more information about our services</p>
              <Link to="/contact">
                <button className="cta-button" id="resources-contactBn">
                  Contact Us
                </button>
              </Link>
            </div>
            <div className="cta-box">
              <div className="mobile-slider">
                <img src="https://scontent.fpat3-3.fna.fbcdn.net/v/t1.15752-9/511040692_697924176417903_6490408146052389315_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=oXsPTT2AobwQ7kNvwFuP7_2&_nc_oc=AdkION003n5iTTDMUhBzFAhVgh_Jbu-MY3y0nCoMWCOwdSWj_Ip69iNHfcatjbkgjBw&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fpat3-3.fna&oh=03_Q7cD2gF4qW-tFdnw8aRjgYsUUsuKZVLxYNN0Bl8svJwUm3kUcg&oe=688B6AEE" alt="Consultation" />
              </div>
              <h3>Request a Consultation</h3>
              <p>Schedule a consultation with our expert consultants</p>
              <Link to="/careers">
                <button className="cta-button" id="consultation-infoBtn">
                  Book Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            {/* Newsletter Subscription */}
            <div className="newsletter-section">
              <h3 className="footer-heading">Subscribe</h3>
              <p className="footer-paragraph">Sign up to hear from us about specials, sales, and events.</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Email address" className="email-input" required />
                <button type="submit" className="signup-button">
                  Sign up
                </button>
              </form>
            </div>
            {/* Navigation Links */}
            <div className="nav-links-section">
              <nav className="footer-nav">
                <ul className="nav-list">
                  <li>
                    <a href="#home">Home</a>
                  </li>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#services">Services</a>
                  </li>
                  <li>
                    <a href="#careers">Careers</a>
                  </li>
                  <li>
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/* Copyright Section */}
          <div className="copyright-section">
            <p className="copyright-text">Copyright © 2025 CiriUAE - All Rights Reserved.</p>
            <p className="powered-by">Powered by NextPhase</p>
          </div>
        </div>
      </footer>

      {/* Contact Widget */}
      <div className="contact-widget">
        <div className="contact-main-button">
          <div className="contact-icon">
            <TbSocial className='social-icon' />
          </div>
        </div>
        <div className="contact-links">
          {socialMediaLinks.map((link, idx) => (
            <a href={link.url} key={idx} title={link.title} target='_blank' className='social-icons' style={{ color: link.color, fontSize: link.fontSize }}>{link.icon}</a>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home