import React from "react";

import "./Footer.scss";

const Footer = () => {
    return (
        <div className="footer">
            <div className="top">
                <div className="items">
                    <h1>Categories</h1>
                    <span>Woman</span>
                    <span>Man</span>
                    <span>Shoes</span>
                    <span>Accessories</span>
                    <span>New Arrivals</span>
                </div>
                <div className="items">
                    <h1>Links</h1>
                    <span>FAQ</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Cookies</span>
                    <span>Contact</span>
                </div>
                <div className="items">
                    <h1>About</h1>
                    <span>
                        Learn more about Plutonic and its eco-friendly fashion
                    </span>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <span className="logo">Plutonic</span>
                    <span className="copyright">
                        © Copyright 2023. All Rights Reserved.
                    </span>
                </div>
                <div className="right">
                    <img src="/img/payment.png" alt="payment-options" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
