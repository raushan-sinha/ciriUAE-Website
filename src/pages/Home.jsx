import Navbar from '../components/Navbar'
import './Home.css'

function Home() {
  return (
    <>
      <Navbar />

      {/* Home Section */}
      <section id="home" className="section intro-section">
        <div className="container">
          <div className="flex-container">
            <div className="image-box">
              <div className="mobile-slider">
                <img src="https://scontent.fpat3-3.fna.fbcdn.net/v/t1.15752-9/511513548_1511531979825288_4289873307517341310_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Km5V-FVgAckQ7kNvwHZe67o&_nc_oc=Adm8ll8t0iAz66-pSoHXrnCrjiZ1G3W1xLcAVEuvGTkEBieGsuH_JyExLrur4k6P9qs&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fpat3-3.fna&oh=03_Q7cD2gHtT7vMJufCYrmqfc9yGmYKCVM50QT8P4vawGkCmDZ-pg&oe=688B7E4C" alt="CiriUAE Introduction" className="section-image" />
              </div>
            </div>
            <div className="content-box">
              <h1 className="main-title">Welcome to CiriUAE</h1>
              <p className="intro-text">
                Your trusted partner in management consulting excellence. We provide comprehensive business solutions,
                strategic guidance, and innovative approaches to help your organization achieve sustainable growth and
                competitive advantage in today's dynamic market landscape.
              </p>
              <div className="value-proposition">
                <h3>Our Value Proposition</h3>
                <ul>
                  <li>Expert strategic consulting services</li>
                  <li>Tailored solutions for your industry</li>
                  <li>Proven track record of success</li>
                  <li>Innovative business methodologies</li>
                </ul>
              </div>
              <button className="cta-button">Get Started Today</button>
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
              <div className="about-details">
                <div className="detail-item">
                  <h4>Our Mission</h4>
                  <p>To deliver exceptional consulting services that drive sustainable business growth.</p>
                </div>
                <div className="detail-item">
                  <h4>Our Vision</h4>
                  <p>To be the leading management consulting firm in the UAE and beyond.</p>
                </div>
              </div>
              <button className="animated-button" id="about-infoBtn">
                <span>More Info</span>
                <div className="button-animation"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Services */}
      <section id="services" className="section services-section">
        <div className="container">
          <div className="flex-container">
            <div className="image-box">
              <div className="mobile-slider">
                <img src="https://scontent.fpat3-1.fna.fbcdn.net/v/t1.15752-9/514127334_1679515046092381_995996042886721923_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=TetZodrYpfkQ7kNvwHCTtq-&_nc_oc=AdmC7FBKO4zQX9OVmLaQwW2YHGCsBaZEIonlZjFcN0VYNc0DXbgmJL4v0fsnOg1cmOc&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fpat3-1.fna&oh=03_Q7cD2gHLiWqgSHv9CXOVG1_Tkkh0LC1rEs06OeuH6rBz65qDJA&oe=688B7AAA" alt="CiriUAE Services" className="section-image" />
              </div>
            </div>
            <div className="content-box">
              <h2 className="section-title">Services</h2>
              <p className="section-text">Detailed descriptions of services offered, including:</p>
              <div className="services-list">
                <ul>
                  <li>Marketing Strategy</li>
                  <li>Business Development Strategy</li>
                  <li>Financial Modeling</li>
                  <li>Distribution Network Development</li>
                  <li>New Territory Business Entry Strategy</li>
                  <li>Sales and Marketing Strategy</li>
                  <li>Fund Raising</li>
                  <li>Partner Strategy Planning</li>
                  <li>Digital Marketing Plan</li>
                  <li>Market Analysis Report</li>
                  <li>Competitive Analysis Report</li>
                  <li>Business Proposal Development</li>
                  <li>Software Consulting</li>
                  <li>Government Liaison</li>
                </ul>
              </div>
              <button className="animated-button" id="services-infoBtn">
                <span>More Info</span>
                <div className="button-animation"></div>
              </button>
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
            <button
              className="cta-button"
              onClick={() => document.getElementById("application-form").scrollIntoView({ behavior: "smooth" })}
            >
              Apply Now
            </button>
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
          <div className="flex-container reverse">
            <div className="image-box">
              <div className="mobile-slider">
                <img src="https://scontent.fpat3-3.fna.fbcdn.net/v/t1.15752-9/513665286_736129518786332_6974681536189359121_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=DnWBjm5Bky4Q7kNvwGuo-nA&_nc_oc=AdmZy-s6sQdHWj0mVA37N6I72zf46LzoDiAFLiI2U_1bxEgkMcn3YHYrwlflWDh3WI0&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fpat3-3.fna&oh=03_Q7cD2gG-twFEBfQLO_jQnxEDdgjtkTzC2eMjKCPUNKNv2hpHhA&oe=688B8C0C" alt="Industries We Serve" className="section-image" />
              </div>
            </div>
            <div className="content-box">
              <h2 className="section-title">Industries</h2>
              <p className="section-text">
                Services tailored to specific industries (e.g., healthcare, finance, technology). We understand that
                each industry has unique challenges and opportunities, which is why we customize our approach to meet
                the specific needs of your sector.
              </p>
              <div className="industries-grid">
                <div className="industry-item">Healthcare</div>
                <div className="industry-item">Finance</div>
                <div className="industry-item">Technology</div>
                <div className="industry-item">Manufacturing</div>
                <div className="industry-item">Retail</div>
                <div className="industry-item">Energy</div>
              </div>
              <button className="animated-button" id="industries-infoBtn">
                <span>More Info</span>
                <div className="button-animation"></div>
              </button>
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
              <button className="animated-button" id="case-infoBtn">
                <span>More Info</span>
                <div className="button-animation"></div>
              </button>
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
                Contact information, inquiry form, and office locations. Ready to transform your business? Get in touch
                with our expert consultants today.
              </p>
              <div className="contact-info">
                <div className="contact-item">
                  <h4>Dubai Office</h4>
                  <p>Business Bay, Dubai, UAE</p>
                  <p>+971 5 243 08085</p>
                </div>
              </div>
              <button className="animated-button" id="contact-infoBtn">
                <span>More Info</span>
                <div className="button-animation"></div>
              </button>
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
              <button className="service-button" id="marketing-infoBtn">
                Learn More
              </button>
            </div>
            <div className="service-box">
              <div className="mobile-slider">
                <img src="https://scontent.fpat3-3.fna.fbcdn.net/v/t1.15752-9/512011368_2268121560313998_3385098190153310241_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Gub8Uk3a2J0Q7kNvwHrGc67&_nc_oc=AdlFkXt0QGOlNTlJ29zQVYUbyOQAMJNDoln6w1YRtadxkC-hAN4clViFFJvzxM_MlRo&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fpat3-3.fna&oh=03_Q7cD2gFUTz1JqSiiIQ0EroxsXt3wIx4kAgL1ZsyLeN2FGVU_Qg&oe=688B5B14" alt="Business Development" />
              </div>
              <h3>Business Development Strategy</h3>
              <p>Strategic business development plans for sustainable growth</p>
              <button className="service-button" id="businessDev-infoBtn">
                Learn More
              </button>
            </div>
            <div className="service-box">
              <div className="mobile-slider">
                <img src="https://scontent.fpat3-3.fna.fbcdn.net/v/t1.15752-9/510199060_1210755954134063_3037221840770775411_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=xsJPfFRUVGkQ7kNvwG3QEZs&_nc_oc=AdmzNkEHe-4XLPxs-UNT2Ez6uwFaGdlyd3JpqxNdhEqvZbIdqTM-0m2m7a35ZSbG2Fg&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fpat3-3.fna&oh=03_Q7cD2gG06lAU-1b1rbxbGZLHwLmUzbBSFEfKbjSAzeDB8XBwEQ&oe=688B59BD" alt="Financial Modeling" />
              </div>
              <h3>Financial Modeling</h3>
              <p>Advanced financial models for informed decision making</p>
              <button className="service-button" id="financial-infoBtn">
                Learn More
              </button>
            </div>
            <div className="service-box">
              <div className="mobile-slider">
                <img src="https://scontent.fpat3-2.fna.fbcdn.net/v/t1.15752-9/508510497_1098933205424649_1695422887453197764_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=_Sv3mrnHKQ4Q7kNvwHViTio&_nc_oc=AdkHyYp7NvUdEgvcuyI8XYfcDejkx2BATREsPGQPsMPbpC49M6VMsP2PAKQWzRwC0QA&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fpat3-2.fna&oh=03_Q7cD2gFIqPnat72VLUAa8lKFnWsMT-nVJBartY2Fch3MO-ZQCA&oe=688B6DFA" alt="Digital Marketing" />
              </div>
              <h3>Digital Marketing Plan</h3>
              <p>Cutting-edge digital marketing strategies for online success</p>
              <button className="service-button" id="digital-infoBtn">
                Learn More
              </button>
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
              <button className="resource-button" id="resource-infoBtn">
                Access Resources
              </button>
            </div>
            <div className="resource-box">
              <div className="mobile-slider">
                <img src="https://scontent.fpat1-1.fna.fbcdn.net/v/t1.15752-9/512681648_1316336106516302_3684395483662138063_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x1280&ctp=s480x480&_nc_cat=110&ccb=1-7&_nc_sid=0024fc&_nc_ohc=89LryC7-qDYQ7kNvwFzyezD&_nc_oc=AdmC-3uRXpHPYwivxCv5IHH293VhFJX1A4kWdyICFFalmWIObCznT5EEKuJi5sOa6Qo4d6AK5H-Qq7osj-KoiivY&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fpat1-1.fna&oh=03_Q7cD2gFzG-NOf7xbhYqIiPWVzCQGTFLflMiGPoqYXU_YnR6Zug&oe=688B847A" alt="News" />
              </div>
              <h3>News</h3>
              <p>Latest news and press releases about CiriUAE</p>
              <button className="resource-button" id="news-infoBtn">
                Read News
              </button>
            </div>
            <div className="resource-box">
              <div className="mobile-slider">
                <img src="https://scontent.fpat1-2.fna.fbcdn.net/v/t1.15752-9/512094944_1391663771895644_8217416743799240671_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x1280&ctp=s480x480&_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=-6-VcqK5l_sQ7kNvwGGLa_a&_nc_oc=AdlvgzsDwQR8ZmsKHrXSK1Ewx7Zeig-z2l_sRsXugTHKTFMZRIgtrtutdWIV7avI_yevxPvzFG5AX1mFpL7ua4yR&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fpat1-2.fna&oh=03_Q7cD2gECPABRQ7Uva9thy4g08mQyYm3DF3byStx_4Cw6PWzEiw&oe=688B6AB9" alt="FAQs" />
              </div>
              <h3>FAQs</h3>
              <p>Frequently asked questions about CiriUAE services and company</p>
              <button className="resource-button" id="faqs-infoBtn">
                View FAQs
              </button>
            </div>
            <div className="cta-box">
              <div className="mobile-slider">
                <img src="https://scontent.fpat3-2.fna.fbcdn.net/v/t1.15752-9/512731827_771375165535673_8604526964516363137_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=zYm_bsvCK4UQ7kNvwHaKyvP&_nc_oc=AdlsucNFBbTfHhdUrZKdh_POlzHO0MBTGAIe6w5cHThTxZS-J9WvjQYMGAZho3eJxeI&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fpat3-2.fna&oh=03_Q7cD2gEek4OKgyDQN5E7WqcBHDeX6HifYqUPKKKbj2_Xln3Ulg&oe=688B81FC" alt="Get in Touch" />
              </div>
              <h3>Get in Touch</h3>
              <p>Contact CiriUAE for more information about our services</p>
              <button className="cta-button" id="resources-contactBn">
                Contact Us
              </button>
            </div>
            <div className="cta-box">
              <div className="mobile-slider">
                <img src="https://scontent.fpat3-3.fna.fbcdn.net/v/t1.15752-9/511040692_697924176417903_6490408146052389315_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=oXsPTT2AobwQ7kNvwFuP7_2&_nc_oc=AdkION003n5iTTDMUhBzFAhVgh_Jbu-MY3y0nCoMWCOwdSWj_Ip69iNHfcatjbkgjBw&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fpat3-3.fna&oh=03_Q7cD2gF4qW-tFdnw8aRjgYsUUsuKZVLxYNN0Bl8svJwUm3kUcg&oe=688B6AEE" alt="Consultation" />
              </div>
              <h3>Request a Consultation</h3>
              <p>Schedule a consultation with our expert consultants</p>
              <button className="cta-button" id="consultation-infoBtn">
                Book Consultation
              </button>
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
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.9 1 3 1.9 3 3V7C3 8.1 3.9 9 5 9H8V11C8 12.1 8.9 13 10 13H14C15.1 13 16 12.1 16 11V9H19C20.1 9 21 8.1 21 7V9ZM7.5 6C7.5 6.8 6.8 7.5 6 7.5S4.5 6.8 4.5 6 5.2 4.5 6 4.5 7.5 5.2 7.5 6ZM19.5 6C19.5 6.8 18.8 7.5 18 7.5S16.5 6.8 16.5 6 17.2 4.5 18 4.5 19.5 5.2 19.5 6ZM9 16H15V18H9V16ZM10 19H14V21H10V19Z"
                fill="currentColor"
              />
              <circle cx="6" cy="18" r="2" fill="currentColor" />
              <circle cx="18" cy="18" r="2" fill="currentColor" />
              <path d="M7 14L9 16H15L17 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="contact-links">
          <a href="#" className="contact-link twitter" title="Follow us on X">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a href="#" className="contact-link whatsapp" title="Chat on WhatsApp">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"
                fill="currentColor"
              />
            </svg>
          </a>
          <a href="#" className="contact-link linkedin" title="Connect on LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a href="#" className="contact-link email" title="Send us an email">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  )
}

export default Home
