import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum quod expedita quas blanditiis voluptates maiores, enim impedit laborum repudiandae totam velit dolorem maxime, omnis quia? Modi incidunt ducimus blanditiis temporibus.</p>
                    <div className="footer-social-icon">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+99-999-9999</li>
                        <li>contact@test.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyight">Copyright 2024 © Tomato.com All Right Reserved.</p>
        </div>
    )
}

export default Footer