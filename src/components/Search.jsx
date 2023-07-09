import { Link } from 'react-router-dom';
import { useState } from 'react';
const Search = () => {
    const [burger, setBurgerActive] = useState(0);;
    const Menu = ({ active, setActive }) => {
        return (
            <div className={active ? "menu active" : "menu"}>
                <div className="menu__content">
                    <div className={active === 1 ? "menu__links active" : "menu__links"}>
                        <button className="menu__link" onClick={() => { setBurgerActive(2); }}>Contact us</button>
                        <Link to="/about">
                            <button className="menu__link">About VAC</button>
                        </Link>
                        <Link to="/loan">
                            <button className="menu__link">Loan Rates</button>
                        </Link>
                        <Link to="/videos">
                            <button className="menu__link">Video</button>
                        </Link>
                        <Link to="/blog">
                            <button className="menu__link">Blog</button>
                        </Link>
                        <Link to="/calculator">
                            <button className="menu__link">Calculate</button>
                        </Link>
                    </div>
                    <div className={active === 2 ? "menu__contact active" : "menu__contact"}>
                        <div className="menu__title">We can't wait to hear from you!</div>
                        <form action="#" className="menu__form">
                            <div className="menu__inputs">
                                <div className="menu__input-wrapper">
                                    <img src="./img/input-man-icon.svg" alt="man-icon" className="menu__input-icon" />
                                    <input type="text" className="menu__input" placeholder='Your Name' />
                                </div>
                                <div className="menu__input-wrapper">
                                    <img src="./img/input-phone-icon.svg" alt="man-icon" className="menu__input-icon" />
                                    <input type="text" className="menu__input" placeholder='Phone Number' />
                                </div>
                                <div className="menu__input-wrapper">
                                    <img src="./img/input-mail-icon.svg" alt="man-icon" className="menu__input-icon" />
                                    <input type="text" className="menu__input" placeholder='Email Address' />
                                </div>
                            </div>
                            <button className="menu__send-button">CONTACT ME</button>
                        </form>
                        <div className="menu__contact-text">You can contact us yourself</div>
                    </div>
                </div>

                <div className="menu__socials">
                    <img src="./img/insta-icon.svg" alt="" className="menu__social" />
                    <img src="./img/facebook-icon.svg" alt="" className="menu__social" />
                    <img src="./img/youtube-icon.svg" alt="" className="menu__social" />
                </div>
            </div>

        );
    };
    return (
        <>
            <div className="search">
                <div className="search__wrapper">
                    <Link to="/">
                        <img src="./img/search-logo.svg" alt="" className="search__logo" />
                    </Link>
                    <div className="search__buttons">
                        <Link to='/catalog'>
                            <button className="search__inventory-button">Inventory</button>
                        </Link>
                        <Link to="/quiz">
                            <button className="search__request-button">Request a car</button>
                        </Link>
                    </div>
                    <div className={burger ? "menu-icon active" : "menu-icon"} onClick={() => {
                        if (burger === 0) {
                            setBurgerActive(1);
                        } else if (burger === 1) {
                            setBurgerActive(0);
                        } else if (burger === 2) {
                            setBurgerActive(1);
                        } else if (burger === 3) {
                            setBurgerActive(1);
                        }
                    }}>
                        <span></span>
                    </div>
                    <Menu active={burger} setActive={setBurgerActive}></Menu>
                </div>
            </div>
        </>
    );
}

export default Search;