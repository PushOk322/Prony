import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import React from "react";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/effect-cards";
import "swiper/css/navigation";
const Interesting = () => {
    ;
    return (
        <>
            <div className="interesting">
                <div className="interesting__upper">
                    <div className="interesting__title">Interesting to read</div>
                    <Link to="/blog">
                        <div className="interesting__button">all articles</div>
                    </Link>
                </div>
                <Swiper className='interesting__slider'
                    modules={[Navigation]}
                    navigation={{
                        nextEl: '.interesting-swiper-button-next',
                        prevEl: '.interesting-swiper-button-prev',
                    }}
                    spaceBetween={20}
                    slidesPerView={3}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    breakpoints={{
                        250: {
                            slidesPerView: 1,
                        },
                        650: {
                            slidesPerView: 2,
                        },
                        1200: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    <SwiperSlide className='interesting__slide'>
                        <picture >
                            <source type='image/webp' srcSet='./img/interesting-img-1-600.webp' media="(max-width: 600px)" />
                            <source type='image/webp' srcSet='./img/interesting-img-1-1200.webp' media="(max-width: 1200px)" />
                            <source type='image/webp' srcSet='./img/interesting-img-1.webp' />
                            <img src="img/interesting-img-1.jpg" alt="slider-1" className="interesting__img" />
                        </picture>
                        <div className="interesting__date">
                            10 May, 2020
                        </div>
                        <div className="interesting__heading">
                            How to save on buying a car?<br />Why is it better to buy from us
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='interesting__slide second'>
                        <picture >
                            <source type='image/webp' srcSet='./img/interesting-img-2-1200.webp' media="(max-width: 1200px)" />

                            <source type='image/webp' srcSet='./img/interesting-img-2.webp' />
                            <img src="img/interesting-img-2.png" alt="slider-3" className="interesting__img" />
                        </picture>
                        <div className="interesting__date">
                            10 May, 2020
                        </div>
                        <div className="interesting__heading">
                            How fast can you order a car in Canada?
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='interesting__slide '>
                        <picture >
                            <source type='image/webp' srcSet='./img/interesting-img-2-1200.webp' media="(max-width: 1200px)" />
                            <source type='image/webp' srcSet='./img/interesting-img-3.webp' />
                            <img src="img/interesting-img-3.png" alt="slider-1" className="interesting__img" />
                        </picture>
                        <div className="interesting__date">
                            10 May, 2020
                        </div>
                        <div className="interesting__heading">
                            How to save on buying a car? <br />Why is it better to buy from us
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="interesting-swiper-button-next">
                    <img src="./img/client-say-arrow.svg" alt="" className="interesting__arrow" />
                </div>
                <div className="interesting-swiper-button-prev">
                    <img src="./img/client-say-arrow.svg" alt="" className="interesting__arrow" />
                </div>
                <Link to="/blog">
                    <div className="interesting__button mobile">all articles</div>
                </Link>
            </div>
        </>
    );
}

export default Interesting;