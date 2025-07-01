import './Navbar.css'
import CiriUAE from '../assets/ciriUAE-Img.png'

function Navbar() {
    //todo: Navbar Links -
    const navLinks = [
        { href: '#home', text: 'Home' },
        { href: '#about', text: 'About' },
        { href: '#services', text: 'Services' },
        { href: '#careers', text: 'Careers' },
        { href: '#contact', text: 'Contact' }
    ];

    return (
        <>
            {/* Navigation Bar */}
            <nav className="navbar">
                <div className="nav-container">
                    {/* CiriUAE Logo */}
                    <div className="nav-logo">
                        <img src={CiriUAE} alt="CiriUAE-logo" className="logo" />
                        <span className="logo-text">CiriUAE</span>
                    </div>
                    {/* Desktop Navigation */}
                    <ul className="nav-links">
                        {navLinks.map((link, idx) => (
                            <li key={idx}><a href={link.href}>{link.text}</a></li>
                        ))}
                    </ul>

                    {/* Hamburger Menu */}
                    <div className="hamburger" id="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className="mobile-menu" id="mobileMenu">
                <ul className="nav-links">
                    {navLinks.map((link, idx) => (
                        <li key={idx}><a href={link.href}>{link.text}</a></li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Navbar;