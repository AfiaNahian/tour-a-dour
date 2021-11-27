import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import logo from '../../../images/logo.png'
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <section className="container-fluid bg-dark text-white mt-3">
                <div className="ps-5">
                    <h4>We sincerely care about your vacations</h4>
                    <div className="box">
                        <img src={logo} alt="" />
                    </div>
                    <p>about features privacy policy</p>
                    <h4>Contact Us : +880102292212</h4>
                    <h4>Address : Dhanmondi , Dhaka</h4>
                </div>
                <div className="ps-5">
                    <small>2021 . <FontAwesomeIcon icon={faCopyright} /> All rights reserved</small>
                </div>
            </section>
        </div>
    );
};

export default Footer;