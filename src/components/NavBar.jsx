import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Stethoscope } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navigation } from '../constants';
import '../index.css';

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, url) => {
        e.preventDefault();
        const targetElement = document.querySelector(url);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
            window.history.pushState(null, '', url);
        }
        setMenuOpen(false);
    };

    return (
        <nav className={`sticky-top navbar navbar-expand-lg ${scrolled ? 'shadow-sm' : ''}`}
            style={{
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease-in-out'
            }}
            role="navigation">
            <div className='container'>
                {/* Logo */}
                <a href="#" className='navbar-brand d-flex align-items-center text-decoration-none'>
                    <Stethoscope className='text-primary me-2' size={32} />
                    <span className='h4 text-primary fw-bold'>New Life Health Care</span>
                </a>

                {/* Mobile Menu Button */}
                <button className="navbar-toggler border-0" type="button" onClick={() => setMenuOpen(!menuOpen)}>
                    <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className='text-dark' />
                </button>

                {/* Navbar Items */}
                <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}>
  {/* Navigation Links */}
  <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
    {navigation.map((item) => (
      <li className='nav-item' key={item.id}>
        <a
          href={item.url}
          className='nav-link text-dark fw-semibold'
          onClick={(e) => handleNavClick(e, item.url)}
        >
          {item.title}
        </a>
      </li>
    ))}
  </ul>

  {/* Login & Signup Buttons */}
  <div
    className={`gap-2 ms-lg-3 ${
      menuOpen ? 'd-flex flex-column mt-3' : 'd-none d-lg-flex'
    }`}
  >
    <a
      href="/login"
      className="btn btn-primary fw-bold custom-hover-login .always-white-text"
      onClick={() => setMenuOpen(false)}
    >
      Log Out
    </a>
    <a
      href="/signup"
      className="btn btn-success fw-bold custom-hover-signup .always-white-text"
      onClick={() => setMenuOpen(false)}
    >
      Sign Out
    </a>
  </div>
</div>

            </div>
        </nav>
    );
};

export default NavBar;


