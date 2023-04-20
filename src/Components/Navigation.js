import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./_navigation.scss"

const Navigation = () => {

    const [mobileMenu, setMobileMenu] = useState(false)

    const handlemobileMenu = () => {
        setMobileMenu(!mobileMenu)
    }

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
                                <li>Home</li>
                                <li>Contact</li>
                                <li>A propos</li>
                                <li>Réalisation</li>
                            </ul>
                        </div>
                        <div className="hamburger" onClick={handlemobileMenu}>
                                <i className="fa-solid fa-bars"></i>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navigation;