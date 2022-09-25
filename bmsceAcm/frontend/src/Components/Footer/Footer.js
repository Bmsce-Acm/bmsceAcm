import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div class='footer-logo'>
                <Link to='/' className='social-logo'>
                    BMSCE ACM S-CHAP
                </Link>
            </div>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Explore</h2>
                        <Link to='/'>Home</Link>
                        <Link to='/events'>Events</Link>
                        <Link to='/blogs'>Blogs</Link>
                        <Link to='/aboutus'>Teams</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                    <div class='social-media'>
                        <div class='social-media-wrap'>
                            <div class='social-icons'>
                                <Link
                                    class='social-icon-link facebook'
                                    to='/'
                                    target='_blank'
                                    aria-label='Facebook'
                                >
                                    <i class='fab fa-facebook-f' />
                                </Link>
                                <Link
                                    class='social-icon-link instagram'
                                    to='/'
                                    target='_blank'
                                    aria-label='Instagram'
                                >
                                    <i class='fab fa-instagram' />
                                </Link>
                                <Link
                                    class='social-icon-link twitter'
                                    to='/'
                                    target='_blank'
                                    aria-label='Twitter'
                                >
                                    <i class='fab fa-twitter' />
                                </Link>
                                <Link
                                    class='social-icon-link linkedin'
                                    to='/'
                                    target='_blank'
                                    aria-label='LinkedIn'
                                >
                                    <i class='fab fa-linkedin' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <small className="last">BMSCE ACM © 2022</small>
        </div>
    )
}

export default Footer