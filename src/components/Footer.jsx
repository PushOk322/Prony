import { Link } from 'react-router-dom';
import { useState } from 'react';
const Footer = () => {
    const [burger, setBurgerActive] = useState(0);;
    return (
        <>
            <div className="footer__wrapper">
                <div className="footer">
                    <Link to="/">
                        <img src="./img/footer-logo.svg" alt="" className="footer__logo" />
                    </Link>
                    <div className="footer__content">
                        <div className="footer__block-first">
                            <div className="footer__terms-container">
                                <Link to="/terms">
                                    <div className="footer__terms-word">Terms</div>
                                </Link>
                                <Link to="/conditions">
                                    <div className="footer__terms-word">Privacy</div>
                                </Link>
                            </div>
                            <div className="footer__socials">
                                <img src="./img/footer-insta.svg" alt="instagram" className="footer__social" />
                                <img src="./img/footer-face.svg" alt="facebook" className="footer__social" />
                                <img src="./img/footer-you.svg" alt="youtube" className="footer__social" />
                            </div>
                        </div>
                        <div className="footer__mobile-block">
                            <div className="footer__socials mobile">
                                <img src="./img/footer-insta.svg" alt="instagram" className="footer__social" />
                                <img src="./img/footer-face.svg" alt="facebook" className="footer__social" />
                                <img src="./img/footer-you.svg" alt="youtube" className="footer__social" />
                            </div>
                            <div className="footer__created mobile">
                                Created by
                                <img src="./img/footer-created-logo.svg" alt="" className="footer__created-icon" />
                            </div>
                        </div>
                        <div className="footer__block-second">
                            <div className="footer__created">
                                Created by
                                <img src="./img/footer-created-logo.svg" alt="" className="footer__created-icon" />
                            </div>
                            <div className="footer__copyright">©Copyright, 2020. Vehicle Approval</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;