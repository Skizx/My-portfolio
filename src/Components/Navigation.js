import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import "./_navigation.scss"

const Navigation = () => {

    const [mobileMenu, setMobileMenu] = useState(false)

    const handlemobileMenu = () => {
        setMobileMenu(!mobileMenu)
    }

    useEffect(() => {
        const navigationLinks = document.querySelectorAll('.navbar-list a');

        navigationLinks.forEach((link) => {
            link.addEventListener('click', () => {
                setMobileMenu(false);
            });
        });
    }, []);

    return (
        <>
            <nav className='main-navbar'>
                <div className='wrapper'>
                    <div className='navbar-block flex-center'>
                        <div className='navbar-title'>
                            <Link to='/'>
                                <h1>ʞevin</h1>
                            </Link>
                        </div>
                        <div className='navbar-list'>
                            <ul className={`navbar-ul ${mobileMenu ? "show-nav" : "hide-nav"}`}>
                                <a href="/#header">
                                    <li>Home</li>
                                </a>
                                <a href="/#about">
                                    <li>A propos</li>
                                </a>
                                <a href="/#services">
                                    <li>Services</li>
                                </a>
                                <a href="/#creation">
                                    <li>Réalisations</li>
                                </a>
                                <a href="mailto:k.civiletti.gj@gmail.com">
                                    <li>Contact</li>
                                </a>
                            </ul>
                        </div>
                        <div className="hamburger" onClick={handlemobileMenu}>
                                <FaBars />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navigation;