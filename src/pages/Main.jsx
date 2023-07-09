import Search from "../components/Search.jsx";
import Footer from "../components/Footer.jsx"
import MainSwiper from "../components/Swiper.jsx";
import ClientSay from "../components/ClientSay.jsx";
import Calculator from "../components/Calculator.jsx";
import Interesting from "../components/Interesting.jsx";
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <>
            <Search></Search>

            <div className="main-hero">
                <img src="./img/main-hero-background.jpg" alt="" className="main-hero__background" />
                <div className="main-hero__wrapper">
                    <div className="main-hero__left">
                        <div className="main-hero__title">The easiest way to buy a car in Canada</div>
                        <Link to="/car">
                            <div className="main-hero__button">Request a suv</div>
                        </Link>
                    </div>
                    <div className="main-hero__slider">
                        <MainSwiper></MainSwiper>
                    </div>
                    <Link to="/catalog">
                        <div className="main-hero__button second">Request a suv</div>
                    </Link>
                </div>

            </div>

            <section className="main-section-1">
                <div className="main-section-1__card">
                    <div className="main-section-1__title">How does it work?</div>
                    <div className="main-section-1__heading">From your Phone to your Home</div>
                    <div className="main-section-1__text">We make it easy for you to buy your dream car from your phone without ever having to step into a dealership! We deliver your vehicle to your home for you to test drive before you sign anything.</div>
                </div>
                <picture >
                    <source type='image/webp' srcSet='./img/main-section-1-honda-600.webp' media="(max-width: 600px)" />
                    <source type='image/webp' srcSet='./img/main-section-1-honda-1200.webp' media="(max-width: 1200px)" />
                    <source type='image/webp' srcSet='./img/main-section-1-honda.webp' />
                    <img src="img/main-section-1-honda.png" alt="slider-3" className="main-section-1__img first" />
                </picture>
                <picture >
                    <source type='image/webp' srcSet='./img/main-section-1-lexus-600.webp' media="(max-width: 600px)" />
                    <source type='image/webp' srcSet='./img/main-section-1-lexus-1200.webp' media="(max-width: 1200px)" />
                    <source type='image/webp' srcSet='./img/main-section-1-lexus.webp' />
                    <img src="img/main-section-1-lexus.png" alt="slider-3" className="main-section-1__img second" />
                </picture>
            </section>

            <section className="main-section-2">
                <div className="main-section-2__title">Your perfect car in
                    5 easy steps</div>
                <div className="main-section-2__content">
                    <div className="main-section-2__container">
                        <div className="main-section-2__row">
                            <div className="main-section-2__number">
                                <img src="img/main-static-2-polygon.svg" alt="slider-3" className="main-section-2__polygon" />
                                1
                            </div>
                            <div className="main-section-2__text-box">
                                <div className="main-section-2__heading">First Contact</div>
                                <div className="main-section-2__undertext">Tell us what your dream vehicle is.</div>
                            </div>
                        </div>
                        <div className="main-section-2__row">
                            <div className="main-section-2__number">
                                <img src="img/main-static-2-polygon.svg" alt="slider-3" className="main-section-2__polygon" />
                                2
                            </div>
                            <div className="main-section-2__text-box">
                                <div className="main-section-2__heading">Vehicle Selection</div>
                                <div className="main-section-2__undertext">One of our Qualified Agents sends you custom
                                    pictures and videos of the car you are interested in.</div>
                            </div>
                        </div>
                        <div className="main-section-2__row">
                            <div className="main-section-2__number">
                                <img src="img/main-static-2-polygon.svg" alt="slider-3" className="main-section-2__polygon" />
                                3
                            </div>
                            <div className="main-section-2__text-box">
                                <div className="main-section-2__heading">Secure Financing</div>
                                <div className="main-section-2__undertext">You work with a dedicated Qualified Agent to
                                    secure financing on your terms.</div>
                            </div>
                        </div>
                        <div className="main-section-2__row">
                            <div className="main-section-2__number">
                                <img src="img/main-static-2-polygon.svg" alt="slider-3" className="main-section-2__polygon" />
                                4
                            </div>
                            <div className="main-section-2__text-box">
                                <div className="main-section-2__heading">Vehicle Delivery</div>
                                <div className="main-section-2__undertext">We deliver your car to your home or office for
                                    you to test drive.</div>
                            </div>
                        </div>
                        <div className="main-section-2__row">
                            <div className="main-section-2__number">
                                <img src="img/main-static-2-polygon.svg" alt="slider-3" className="main-section-2__polygon" />
                                5
                            </div>
                            <div className="main-section-2__text-box">
                                <div className="main-section-2__heading">Getting Vehicle</div>
                                <div className="main-section-2__undertext">If you love the vehicle, you sign the paperwork
                                    and keep the car.</div>
                            </div>
                        </div>
                    </div>
                    <picture >
                        <source type='image/webp' srcSet='./img/main-static-2-img-600.webp' media="(max-width: 600px)" className="main-section-2__img" />
                        <source type='image/webp' srcSet='./img/main-static-2-img-1200.webp' media="(max-width: 1200px)" className="main-section-2__img" />
                        <source type='image/webp' srcSet='./img/main-static-2-img.webp' />
                        <img src="img/main-static-2-img.png" alt="slider-3" className="main-section-2__img" />
                    </picture>
                </div>
            </section>

            <section className="main-section-3">
                <div className="main-section-3__title">Advantages of working with us</div>
                <div className="main-section-3__content">
                    <div className="main-section-3__card">
                        <img src="./img/main-static-3-polygon.png" alt="" className="main-section-3__triangle first" />
                        <div className="main-section-3__box first">
                            <img src="./img/main-static-3-map-icon.svg" alt="" className="main-section-3__icon" />
                            <div className="main-section-3__heading">Vehicle Delivery</div>
                            <div className="main-section-3__text first">We deliver your vehicle directly to your door. You don’t sign anything until you test drive the vehicle. There is never any obligation to buy beforehand.</div>
                        </div>
                    </div>

                    <div className="main-section-3__card">
                        <img src="./img/main-static-3-polygon.png" alt="" className="main-section-3__triangle second" />
                        <div className="main-section-3__box second">
                            <img src="./img/main-static-3-task-icon.svg" alt="" className="main-section-3__icon" />
                            <div className="main-section-3__heading">Auto Financing</div>
                            <div className="main-section-3__text second">We partner with the largest lenders in Canada to offer the strongest financing options in the industry—including rates as low as 4%</div>
                        </div>
                    </div>

                    <div className="main-section-3__card">
                        <img src="./img/main-static-3-polygon.png" alt="" className="main-section-3__triangle third" />
                        <div className="main-section-3__box third">
                            <img src="./img/main-static-3-car-icon.svg" alt="" className="main-section-3__icon" />
                            <div className="main-section-3__heading">Huge Inventory</div>
                            <div className="main-section-3__text third">We have access to thousands of high-quality vehicles and offer them to you at wholesale prices. Your dream car is waiting for you</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="main-section-4">
                <picture className="main-section-4__img">
                    <source type='image/webp' srcSet='./img/main-section-3-cars-600.webp' media="(max-width: 600px)" />
                    <source type='image/webp' srcSet='./img/main-section-3-cars-1200.webp' media="(max-width: 1200px)" />
                    <source type='image/webp' srcSet='./img/main-section-3-cars.webp' />
                    <img src="img/main-section-3-cars.png" alt="slider-3" className="main-section-4__img" />
                </picture>
                <div className="main-section-4__content">
                    <div className="main-section-4__title">Сhoose your dream vehicle in our catalog</div>
                    <div className="main-section-4__text-box">
                        <div className="main-section-4__text">In our catalogue there are many models of vehicles. Choose your car to your liking.</div>
                        <Link to="/catalog">
                            <div className="main-section-4__button">Inventory</div>
                        </Link>
                    </div>
                </div>
            </section>

            <div className="main-section-5">
                <div className="main-section-5__text-box">
                    <div className="main-section-5__title">Happy customers</div>
                    <div className="main-section-5__text">Since 2017, we have helped thousands of Canadians get their dream vehicles from the comfort of their homes. </div>
                    <div className="main-section-5__button-box">
                        <div className="main-section-5__button-text">What are you waiting? Get started right now!</div>
                        <Link to="/quiz">
                            <div className="main-section-5__button">Request a Car</div>
                        </Link>
                    </div>
                </div>
                <div className="main-section-5__cards">
                    <div className="main-section-5__card">
                        <div className="main-section-5__bumber">7,988+</div>
                        <div className="main-section-5__under-number">Sold Cars</div>
                    </div>
                    <div className="main-section-5__card">
                        <div className="main-section-5__bumber">16,974+</div>
                        <div className="main-section-5__under-number">Vehicles To Choose From</div>
                    </div>
                    <div className="main-section-5__card third">
                        <div className="main-section-5__bumber">123</div>
                        <div className="main-section-5__under-number">Experts Across Canada</div>
                    </div>
                </div>
                <div className="main-section-5__button-box mobile">
                    <div className="main-section-5__button-text">What are you waiting? Get started right now!</div>
                    <Link to="/quiz">
                        <div className="main-section-5__button">Request a Car</div>
                    </Link>
                </div>
            </div>

            <div className="main-say">
                <div className="main-say__title">What our client say about us!</div>
                <ClientSay></ClientSay>
            </div>

            <div className="main-calculator">
                <Calculator ></Calculator>
            </div>

            <div className="main-interesting">
                <Interesting></Interesting>
            </div>

            <div className="main-footer">
                <Footer></Footer>
            </div>
        </>
    );
}

export default Main;