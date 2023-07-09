import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import React from "react";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/effect-cards";
import "swiper/css/navigation";
const MightLike = () => {
    ;
    return (
        <>
            <div className="might-like">
                <div className="might-like__upper">
                    <div className="might-like__title">You might like it</div>
                    <Link to="/blog">
                        <div className="might-like__button">all articles</div>
                    </Link>
                </div>
                <Swiper className='might-like__slider'
                    modules={[Navigation]}
                    navigation={{
                        nextEl: '.might-like-swiper-button-next',
                        prevEl: '.might-like-swiper-button-prev',
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
                    <SwiperSlide className='might-like__slide'>
                        <picture >
                            <source type='image/webp' srcSet='./img/might-like-img-1-600.webp' media="(max-width: 600px)" />
                            <source type='image/webp' srcSet='./img/might-like-img-1-1200.webp' media="(max-width: 1200px)" />
                            <source type='image/webp' srcSet='./img/might-like-img-1.webp' />
                            <img src="img/might-like-img-1.jpg" alt="slider-1" className="might-like__img" />
                        </picture>
                        <div className="might-like__date">
                            10 May, 2020
                        </div>
                        <div className="might-like__heading">
                            How to save on buying a car?<br />Why is it better to buy from us
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='might-like__slide second'>
                        <picture >
                            <source type='image/webp' srcSet='./img/might-like-img-2-1200.webp' media="(max-width: 1200px)" />

                            <source type='image/webp' srcSet='./img/might-like-img-2.webp' />
                            <img src="img/might-like-img-2.png" alt="slider-3" className="might-like__img" />
                        </picture>
                        <div className="might-like__date">
                            10 May, 2020
                        </div>
                        <div className="might-like__heading">
                            How fast can you order a car in Canada?
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='might-like__slide '>
                        <picture >
                            <source type='image/webp' srcSet='./img/might-like-img-2-1200.webp' media="(max-width: 1200px)" />
                            <source type='image/webp' srcSet='./img/might-like-img-3.webp' />
                            <img src="img/might-like-img-3.png" alt="slider-1" className="might-like__img" />
                        </picture>
                        <div className="might-like__date">
                            10 May, 2020
                        </div>
                        <div className="might-like__heading">
                            How to save on buying a car? <br />Why is it better to buy from us
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='might-like__slide second'>
                        <picture >
                            <source type='image/webp' srcSet='./img/might-like-img-2-1200.webp' media="(max-width: 1200px)" />

                            <source type='image/webp' srcSet='./img/might-like-img-2.webp' />
                            <img src="img/might-like-img-2.png" alt="slider-3" className="might-like__img" />
                        </picture>
                        <div className="might-like__date">
                            10 May, 2020
                        </div>
                        <div className="might-like__heading">
                            How fast can you order a car in Canada?
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='might-like__slide second'>
                        <picture >
                            <source type='image/webp' srcSet='./img/might-like-img-2-1200.webp' media="(max-width: 1200px)" />

                            <source type='image/webp' srcSet='./img/might-like-img-2.webp' />
                            <img src="img/might-like-img-2.png" alt="slider-3" className="might-like__img" />
                        </picture>
                        <div className="might-like__date">
                            10 May, 2020
                        </div>
                        <div className="might-like__heading">
                            How fast can you order a car in Canada?
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='might-like__slide second'>
                        <picture >
                            <source type='image/webp' srcSet='./img/might-like-img-2-1200.webp' media="(max-width: 1200px)" />

                            <source type='image/webp' srcSet='./img/might-like-img-2.webp' />
                            <img src="img/might-like-img-2.png" alt="slider-3" className="might-like__img" />
                        </picture>
                        <div className="might-like__date">
                            10 May, 2020
                        </div>
                        <div className="might-like__heading">
                            How fast can you order a car in Canada?
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="might-like-swiper-button-next">
                    <img src="./img/client-say-arrow.svg" alt="" className="might-like__arrow" />
                </div>
                <div className="might-like-swiper-button-prev">
                    <img src="./img/client-say-arrow.svg" alt="" className="might-like__arrow" />
                </div>
                <div className="might-like__button mobile">all articles</div>
            </div>
        </>
    );
}

export default MightLike;