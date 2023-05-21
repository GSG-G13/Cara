import React from 'react';

const Footer = () => {
  return (
    <footer className="section-p1">
        <div className="col">
            <img className="logo" src="../img/logo.png" alt="" />
            <h4>contact</h4>
            <p><strong>Address:</strong>562Welingion rood street 32 sanFrancesco</p>
            <p><strong>Phones:</strong> +01 2222 365 /(+91) 01 2345 6789</p>
            <p><strong>hours:</strong> 10:00 - 18:00, Mon - Sat</p>

            <div className="follow">
                <h4>follow us</h4>
                <div className="icon">
                    <i className="fa-brands fa-facebook-f"></i>
                    <i className="fa-brands fa-twitter"></i>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-pinterest"></i>
                    <i className="fa-brands fa-youtube"></i>
                </div>
            </div>
        </div>

        <div className="col install">
            <h4>install app</h4>
            <p>form app store or google play</p>
            <div className="row">
                <img src="../img/pay/app.jpg" alt="" />
                <img src="../img/pay/play.jpg" alt="" />

            </div>
            <p>from app store or google play</p>
            <img src="../img/pay/pay.png" alt="" />
        </div>
        <div className="copyright">
            <p> copy right</p>
        </div>
    </footer>
  );
};

export default Footer;
