import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Stethoscope } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { navigation } from '../constants';

const NavBar = () => {
    const [scrolled, setscrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setscrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handlenavClick = (e, url) => {
        e.preventDefault();
        const targetElement = document.querySelector(url);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
            // Update the URL in the browser without reloading the page
            window.history.pushState(null, '', url);
        }
        setMenuOpen(false); // Close the menu on navigation
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/20 backdrop-blur-lg' : ''}`}>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    {/* Logo */}
                    <a href="#"
                        className='text-2xl font-bold bg-gradient-to-r from purple-400 to-pink-600 text-transparent hover:text-[#00bfff] bg-clip-text'>
                        <div className='flex items-center'>
                            <Stethoscope className='text-[#00bfff] mr-2 size={32}' />
                            <span className='text-2xl font-bold text-[#00bfff]'>
                               New Life Healthcare
                            </span>
                        </div>
                    </a>
                    {/* Hamburger Menu Icon For Smaller Screens */}
                    <div className='sm:hidden'>
                        <button onClick={() => setMenuOpen(!menuOpen)}
                            className='bg-blue-600 p-2 rounded-md text-gray-800 hover:text-[#00bfff] transition'>
                            {menuOpen ? (
                                //Cross icon
                                <FontAwesomeIcon icon={faTimes} className='text-white w-5 h-5' />
                            ) : (
                                //hamburger Icon
                                <FontAwesomeIcon icon={faBars} className='text-white w-5 h-5' />
                            )}
                        </button>
                    </div>
                    {/* Navigation Links for Larger Screens */}
                    <div className='hidden sm:flex space-x-8'>
                        {navigation.map((item) => (
                            <a key={item.id}
                                href={item.url}
                                onClick={(e) => handlenavClick(e, item.url)}
                                className='text-black hover:text-[#e65b00] transition'>
                                {item.title}
                            </a>
                        ))}
                    </div>
                </div>
                {/* For Mobile Menu */}
                {menuOpen && (
                    <div className='sm:hidden bg-black/70 backdrop-blur-lg p-4 rounded-lg mt-2 '>
                        <div className='flex flex-col space-y-4'>
                            {navigation.map((item) => (
                                <a key={item.id}
                                    href={item.url}
                                    onClick={(e) => handlenavClick(e, item.url)}
                                    className='text-[#00bfff] hover:text-[#e65b00] transition-colors bg-transparent'>
                                    {item.title}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default NavBar
