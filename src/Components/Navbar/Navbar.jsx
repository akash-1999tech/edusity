import React, { useEffect, useState } from 'react';
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";
import { Link } from 'react-scroll';

const Navbar = () => {

    const [darkNav, setDarkNav] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                setDarkNav(true);
            }
            else {
                setDarkNav(false);
            }
        })
    }, []);

    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }


    return (
        <nav className={`container ${darkNav && 'dark-nav'}`}>
            <img className='logo' src={logo} alt="logo" />
            <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
                <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
                <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
                <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
                <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
                <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contacts us</Link></li>
            </ul>
            <img src={menu_icon} alt="" onClick={toggleMenu} className='menu-icon' />
        </nav>
    )
}

export default Navbar