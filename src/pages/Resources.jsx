import './Resources.css'

function Resources() {
    return (
        <>
            {/* Main Content Section */}
            <main className="main-content">
                <div className="container">
                    {/* Introduction Section */}
                    <section className="intro-section">
                        <h2 className="section-title">Welcome to the CiriUAE Resources Hub</h2>
                        <div className="intro-content">
                            <p className="intro-text">
                                Your go-to library for expert insights, practical tools, and valuable content designed to
                                support your business growth and innovation journey. Whether you're a startup founder, business
                                leader, marketer, or strategist, our resource library offers the knowledge you need to make
                                informed decisions and stay ahead in a rapidly changing business landscape.
                            </p>
                            <p className="intro-text">
                                We believe that knowledge is power — and the right resources can transform your strategies,
                                operations, and outcomes. That's why we've curated a comprehensive collection of downloadable
                                content, all developed by our in-house experts and industry partners.
                            </p>
                        </div>
                    </section>

                    {/* Resource Types Section */}
                    <section className="resources-section">
                        <h2 className="section-title">Our Resource Library Includes:</h2>
                        <div className="resources-grid">
                            {/* Whitepapers Card */}
                            <div className="resource-card card-1">
                                <div className="card-icon">
                                    <img src="https://scontent.fixr3-2.fna.fbcdn.net/v/t1.15752-9/512153751_1959482668212444_763330092839297858_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=eo3i0lFCajUQ7kNvwGzWefv&_nc_oc=AdmblZ0Qht6rmH7bbm3LOgPbfhCItBFLgyVfH0y6O92BYN_RG_5s2zuP8XpqMkWfvXuTD7UO2G_UuNMRNebzGSIQ&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fixr3-2.fna&oh=03_Q7cD2gGZQxeQAqM0JdaAlSU6XQyV8p-OsE5p5Sou1ANXXmeFMg&oe=6885140D" alt="Whitepapers Icon" />
                                </div>
                                <h3 className="card-title">Whitepapers</h3>
                                <p className="card-description">
                                    In-depth reports and industry insights on emerging trends, challenges, and innovations.
                                    These are ideal for leaders looking to understand market shifts and plan strategically.
                                </p>
                                <div className="card-overlay"></div>
                            </div>

                            {/* E-books Card */}
                            <div className="resource-card card-2">
                                <div className="card-icon">
                                    <img src="https://scontent.fixr3-4.fna.fbcdn.net/v/t1.15752-9/511161142_1876925749762036_5788884817405075959_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=BGfCRQ9J6g4Q7kNvwEQTG6r&_nc_oc=Adny0v3mkHnRcBSnscqWa929RDdEAS9jcf40eMARh90GPXLwhvq6nWr0umxz_0ZUOtIo_I4wdS7iTo2CGQFwEBEu&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fixr3-4.fna&oh=03_Q7cD2gG8_V_TZD8FxITHa3PgZtmqXKh0O-uACzZ3_ykuHHcYrQ&oe=6884FE32" alt="E-books Icon" />
                                </div>
                                <h3 className="card-title">E-books</h3>
                                <p className="card-description">
                                    Practical, easy-to-digest guides packed with actionable tips, step-by-step strategies, and
                                    expert advice across business development, marketing, operations, and more.
                                </p>
                                <div className="card-overlay"></div>
                            </div>

                            {/* Webinars Card */}
                            <div className="resource-card card-3">
                                <div className="card-icon">
                                    <img src="https://scontent.fixr3-3.fna.fbcdn.net/v/t1.15752-9/509813145_1269142777990157_5019824270375103609_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=102&ccb=1-7&_nc_sid=0024fc&_nc_ohc=kcoKctR47isQ7kNvwF555Pz&_nc_oc=AdlTZMjLymjyca2G863xfwhmTGZ6jz4y9UvtnuHzihLbb0-otz3yZhQFXp1xDOMisS6RJmoOoSQLTaM87JA80vvm&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fixr3-3.fna&oh=03_Q7cD2gFaEt164YfUXk2ElaAom1UKxt7iyrPgppJ9V6Irkqs3lg&oe=6884FFF9" alt="Webinars Icon" />
                                </div>
                                <h3 className="card-title">Webinars & Workshops</h3>
                                <p className="card-description">
                                    Access recordings of our live sessions featuring CiriUAE experts and industry thought
                                    leaders. Learn from real-world experiences, client case studies, and Q&A discussions.
                                </p>
                                <div className="card-overlay"></div>
                            </div>

                            {/* Templates Card */}
                            <div className="resource-card card-4">
                                <div className="card-icon">
                                    <img src="https://scontent.fixr3-4.fna.fbcdn.net/v/t1.15752-9/510981198_979359507468658_1118705814691212131_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=tp80EOEbg1oQ7kNvwErfqN_&_nc_oc=Adnb5cPSdE-3b96NVMdICOnLhxVp9DaxKUG2oo3uCHq3ZG19s0UcIlXBHBzCWUx9-hGTMkVSGHsLHzU8OJ5A9Cuh&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fixr3-4.fna&oh=03_Q7cD2gEOdQQLZDdjHpoXpS0R807zMNeKUeLBx-cwc3y2H482ug&oe=68850E52" alt="Templates Icon" />
                                </div>
                                <h3 className="card-title">Templates & Checklists</h3>
                                <p className="card-description">
                                    Ready-to-use tools for marketing planning, financial modeling, strategy execution, and
                                    productivity — designed to simplify your workflows and improve efficiency.
                                </p>
                                <div className="card-overlay"></div>
                            </div>

                            {/* Case Studies Card */}
                            <div className="resource-card card-5">
                                <div className="card-icon">
                                    <img src="https://scontent.fixr3-3.fna.fbcdn.net/v/t1.15752-9/510275667_2105606066589723_3998674872751236455_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_ohc=x_6PWfCrG60Q7kNvwGaYyb8&_nc_oc=AdnOWWxKFS8QDXOUbdE34og3uVKfUYxIH8vuFuss4u1YNrjxLDK8mLif_0d7viLpamA6O9-IAqIYXDV5XEYENmMM&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fixr3-3.fna&oh=03_Q7cD2gGf-9Jfsb1OC215IgkZkVD9YhH5Cqa5gTushOwHC3q06w&oe=68851403" alt="Case Studies Icon" />
                                </div>
                                <h3 className="card-title">Case Studies</h3>
                                <p className="card-description">
                                    Discover how businesses like yours achieved success using our proven methods. Learn from
                                    detailed examples covering different industries, challenges, and outcomes.
                                </p>
                                <div className="card-overlay"></div>
                            </div>
                        </div>
                    </section>

                    {/* Value Proposition Section */}
                    <section className="value-section">
                        <div className="value-content">
                            <div className="value-text">
                                <h2 className="section-title">Why Use Our Resources?</h2>
                                <p className="value-description">
                                    All our resources are designed with practical application in mind — not just theory. Whether
                                    you're preparing for an investor pitch, scaling your marketing efforts, or exploring a new
                                    market, you'll find tools and guidance to help you move forward with clarity and confidence.
                                </p>
                                <ul className="benefits-list">
                                    <li className="benefit-item benefit-1">Stay updated on current industry trends and best
                                        practices</li>
                                    <li className="benefit-item benefit-2">Get expert insights without the fluff — straight to the
                                        point</li>
                                    <li className="benefit-item benefit-3">Save time with pre-built templates and frameworks</li>
                                    <li className="benefit-item benefit-4">Learn from real-world business scenarios</li>
                                    <li className="benefit-item benefit-5">Equip your team with tools to perform better and faster
                                    </li>
                                </ul>
                            </div>
                            <div className="value-image">
                                <img src="https://scontent.fixr3-3.fna.fbcdn.net/v/t1.15752-9/509745156_4137746703129274_1615314728760735636_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=101&ccb=1-7&_nc_sid=0024fc&_nc_ohc=wM9IloYSTt8Q7kNvwHzRNnJ&_nc_oc=AdmhK1WkXYCQHRxRrlCDCfobzAwWrlWLH4-K5fopO15a-BHd9f8HqonUtbxhOnwwDntu7YOoMrrWqbtlk6CVFEAr&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.fixr3-3.fna&oh=03_Q7cD2gHhC4KeGtpe_Hp6e7zKFa5NIBms8KeUVrmEyTTzINvv-Q&oe=6885138A" alt="Business Growth" className="value-img" />
                            </div>
                        </div>
                    </section>

                    {/* Call to Action Section */}
                    <section className="cta-section">
                        <div className="cta-content">
                            <h2 className="cta-title">Explore. Learn. Grow.</h2>
                            <p className="cta-description">
                                Browse through our categories or use filters to find exactly what you need. All resources are
                                free to access or download — simply register or log in to your CiriUAE account for instant
                                access.
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}

export default Resources;