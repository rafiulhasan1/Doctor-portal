import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundImage: `url(https://searchsolutionstaffing.com/wp-content/uploads/2019/02/sss-bg-1095x357-v5.png)`, backgroundSize:"1450px 700px" , backgroundRepeat:'no-repeat' }}>
            <div className="footer p-10 text-neutral-content">
                <div className='text-gray-500 mx-auto'>
                    <span className="footer-title">Services</span>
                    <a href='##' className="link link-hover">Branding</a>
                    <a href='##' className="link link-hover">Design</a>
                    <a href='##' className="link link-hover">Marketing</a>
                    <a href='##' className="link link-hover">Advertisement</a>
                </div>
                <div className='text-gray-500 mx-auto'>
                    <span className="footer-title">Company</span>
                    <a href='##' className="link link-hover">About us</a>
                    <a href='##' className="link link-hover">Contact</a>
                    <a href='##' className="link link-hover">Jobs</a>
                    <a href='##' className="link link-hover">Press kit</a>
                </div>
                <div className='text-gray-500 mx-auto'>
                    <span className="footer-title">Legal</span>
                    <a href='##' className="link link-hover">Terms of use</a>
                    <a href='##' className="link link-hover">Privacy policy</a>
                    <a href='##' className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div>
                <div className="footer footer-center p-4 text-base-content">
                    <p>Copyright © 2022 - All right reserved by Doctor Portal Industries Ltd</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;