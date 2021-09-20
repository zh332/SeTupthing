import React from 'react';
import {Button} from './Button';
import './Footer.css'
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Subscribe to get annoying emails every week!!
                </p>
                <p className="footer-subscription-text">
                    Trust 
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="Your Email" classname="footer-input"/>
                        <Button className="sub-btn" buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>

            <section class='social-media'>
                <div class='social-media-wrap'>
                <div class='footer-logo'>
                    <Link to='/' className='social-logo'>
                    SETuP
                    <i class='fab fa-typo3' />
                    </Link>
                </div>
                <small class='website-rights'>SETuP © 2021</small>
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
                    class='social-icon-link youtube'
                    to='/'
                    target='_blank'
                    aria-label='Youtube'
                    >
                    <i class='fab fa-youtube' />
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
                    class='social-icon-link twitter'
                    to='/'
                    target='_blank'
                    aria-label='LinkedIn'
                    >
                    <i class='fab fa-linkedin' />
                    </Link>
                </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
