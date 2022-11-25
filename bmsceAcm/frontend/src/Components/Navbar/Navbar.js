import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        <img src="https://res.cloudinary.com/dotl5onov/image/upload/v1664330895/bmsce_acm/acm_nobg_hgtczx.png" width="150px" height="150px" />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/events'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Events
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/blogs'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Posts
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/team'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/gallery'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Gallery
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;