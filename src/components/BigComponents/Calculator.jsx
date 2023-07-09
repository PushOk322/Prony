import { Link } from 'react-router-dom';
import { useState } from 'react';
const calculator = () => {
    const [percentagePrice, setPercentagePrice] = useState(35);
    const [percentageDur, setPercentageDur] = useState(35);


    let biWeeklyPayment = Math.floor((percentagePrice / percentageDur) / 2);
    let monthlyPayment = Math.floor(percentagePrice / percentageDur);
    let weeklyPayment = Math.floor((percentagePrice / percentageDur) / 4);

    const [nav, setNav] = useState(1);
    return (
        <>
            <div className="calculator">
                <div className="calculator__upper">
                    <div className="calculator__title">Let’s figure out how
                        much you can afford</div>
                    <div className="calculator__text">Before you start shopping, let’s figure out how much you can afford. Move the sliders to see how the loan duration and the total loan amount affect your monthly payments.</div>
                </div>



                <div className="calculator__main">
                    <div className="calculator__left">
                        <div className="calculator__nav">
                            <div className={nav === 1 ? "calculator__nav-button active first" : "calculator__nav-button first"} onClick={() => { setNav(1); setPercentagePrice(0); setPercentageDur(6); }}>
                                Poor
                            </div>
                            <div className={nav === 2 ? "calculator__nav-button active" : "calculator__nav-button"} onClick={() => { setNav(2); setPercentagePrice(0); setPercentageDur(6); }}>
                                Average
                            </div>
                            <div className={nav === 3 ? "calculator__nav-button active last" : "calculator__nav-button last"} onClick={() => { setNav(3); setPercentagePrice(0); setPercentageDur(6); }}>
                                Good
                            </div>
                        </div>

                        <div className={nav === 1 ? "calculator__content active" : "calculator__content"}>

                            <div className="calculator__loan">
                                <div className="calculator__upper-scrollbar">
                                    <div className="calculator__scroll-name">
                                        Loan Amount
                                    </div>
                                    <div className="calculator__scroll-value">
                                        $ {percentagePrice}
                                    </div>
                                </div>
                                <input className="calculator__scrollbar" type="range" min="1000" max="10000" step="1"
                                    value={percentagePrice}
                                    onChange={(ev) => { setPercentagePrice(ev.target.value) }} />
                            </div>
                            <div className="calculator__loan">
                                <div className="calculator__upper-scrollbar">
                                    <div className="calculator__scroll-name">
                                        Loan Duration
                                    </div>
                                    <div className="calculator__scroll-value">
                                        <span>{percentageDur}</span> <span className='calculator__value-type'>month</span>
                                    </div>
                                </div>
                                <input className="calculator__scrollbar" type="range" min="6" max="36" step="1"
                                    value={percentageDur}
                                    onChange={(ev) => { setPercentageDur(ev.target.value) }} />
                            </div>

                        </div>
                        <div className={nav === 2 ? "calculator__content active" : "calculator__content"}>

                            <div className="calculator__loan">
                                <div className="calculator__upper-scrollbar">
                                    <div className="calculator__scroll-name">
                                        Loan Amount
                                    </div>
                                    <div className="calculator__scroll-value">
                                        $ {percentagePrice}
                                    </div>
                                </div>
                                <input className="calculator__scrollbar" type="range" min="10000" max="100000" step="1"
                                    value={percentagePrice}
                                    onChange={(ev) => { setPercentagePrice(ev.target.value) }} />
                            </div>
                            <div className="calculator__loan">
                                <div className="calculator__upper-scrollbar">
                                    <div className="calculator__scroll-name">
                                        Loan Duration
                                    </div>
                                    <div className="calculator__scroll-value">
                                        <span>{percentageDur}</span> <span className='calculator__value-type'>month</span>
                                    </div>
                                </div>
                                <input className="calculator__scrollbar" type="range" min="6" max="36" step="1"
                                    value={percentageDur}
                                    onChange={(ev) => { setPercentageDur(ev.target.value) }} />
                            </div>

                        </div>
                        <div className={nav === 3 ? "calculator__content active" : "calculator__content"}>

                            <div className="calculator__loan">
                                <div className="calculator__upper-scrollbar">
                                    <div className="calculator__scroll-name">
                                        Loan Amount
                                    </div>
                                    <div className="calculator__scroll-value">
                                        $ {percentagePrice}
                                    </div>
                                </div>
                                <input className="calculator__scrollbar" type="range" min="100000" max="1000000" step="1"
                                    value={percentagePrice}
                                    onChange={(ev) => { setPercentagePrice(ev.target.value) }} />
                            </div>
                            <div className="calculator__loan">
                                <div className="calculator__upper-scrollbar">
                                    <div className="calculator__scroll-name">
                                        Loan Duration
                                    </div>
                                    <div className="calculator__scroll-value">
                                        <span>{percentageDur}</span> <span className='calculator__value-type'>month</span>
                                    </div>
                                </div>
                                <input className="calculator__scrollbar" type="range" min="6" max="120" step="1"
                                    value={percentageDur}
                                    onChange={(ev) => { setPercentageDur(ev.target.value) }} />
                            </div>

                        </div>



                    </div>



                    <div className="calculator__right">
                        <div className="calculator__right-content">
                            <div className="calculator__big-block">
                                <div className="calculator__heading">
                                    Bi-Weekly Payment
                                </div>
                                <div className="calculator__big-weekly-price">
                                    $ {biWeeklyPayment}
                                </div>
                            </div>
                            <div className="calculator__small-blocks">
                                <div className="calculator__block">
                                    <div className="calculator__heading">
                                        Monthly Payment
                                    </div>
                                    <div className="calculator__weekly-price">
                                        $ {monthlyPayment}
                                    </div>
                                </div>
                                <div className="calculator__block">
                                    <div className="calculator__heading">
                                        Weekly Payment
                                    </div>
                                    <div className="calculator__weekly-price">
                                        $ {weeklyPayment}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Link to="/quiz">
                            <button className="calculator__button">Request a car</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default calculator;