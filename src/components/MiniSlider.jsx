import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import React from "react";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/effect-cards";
import "swiper/css/navigation";
const MiniSlider = () => {
    ;
    return (
        <>
            <div className="mini-slider">
                <Swiper className='mini-slider__slider'
                    modules={[Navigation]}
                    navigation={{
                        nextEl: '.mini-slider-swiper-button-next',
                        prevEl: '.mini-slider-swiper-button-prev',
                    }}
                    initialSlide={ 0.9 }
                    spaceBetween={10}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    breakpoints={{
                        250: {
                            slidesPerView: 3.5,
                        },
                        650: {
                            slidesPerView: 3.5,
                        },
                        1200: {
                            slidesPerView: 3.72,
                        },
                    }}
                >
                    <SwiperSlide className='mini-slider__slide'>
                        <picture >
                            <source type='image/webp' srcSet='./img/mini-slider-img-4.webp' />
                            <img src="img/mini-slider-img-4.jpg" alt="slider-1" className="mini-slider__img" />
                        </picture>
                    </SwiperSlide>
                    <SwiperSlide className='mini-slider__slide'>
                        <picture >
                            <source type='image/webp' srcSet='./img/mini-slider-img-1.webp' />
                            <img src="img/mini-slider-img-1.jpg" alt="slider-1" className="mini-slider__img" />
                        </picture>
                        <div className="mini-slider__360">360°</div>
                    </SwiperSlide>
                    <SwiperSlide className='mini-slider__slide'>
                        <picture >
                            <source type='image/webp' srcSet='./img/mini-slider-img-2.webp' />
                            <img src="img/mini-slider-img-2.jpg" alt="slider-1" className="mini-slider__img" />
                        </picture>
                    </SwiperSlide>
                    <SwiperSlide className='mini-slider__slide'>
                        <picture >
                            <source type='image/webp' srcSet='./img/mini-slider-img-3.webp' />
                            <img src="img/mini-slider-img-3.jpg" alt="slider-1" className="mini-slider__img" />
                        </picture>
                    </SwiperSlide>
                    <SwiperSlide className='mini-slider__slide'>
                        <picture >
                            <source type='image/webp' srcSet='./img/mini-slider-img-4-600.webp' media="(max-width: 600px)" />
                            <source type='image/webp' srcSet='./img/mini-slider-img-4.webp' />
                            <img src="img/mini-slider-img-4.jpg" alt="slider-1" className="mini-slider__img" />
                        </picture>
                    </SwiperSlide>
                    <SwiperSlide className='mini-slider__slide'>
                        <picture >
                            <source type='image/webp' srcSet='./img/mini-slider-img-1-600.webp' media="(max-width: 600px)" />
                            <source type='image/webp' srcSet='./img/mini-slider-img-1.webp' />
                            <img src="img/mini-slider-img-1.jpg" alt="slider-1" className="mini-slider__img" />
                        </picture>
                    </SwiperSlide>
                    <SwiperSlide className='mini-slider__slide'>
                        <picture >
                            <source type='image/webp' srcSet='./img/mini-slider-img-2-600.webp' media="(max-width: 600px)" />
                            <source type='image/webp' srcSet='./img/mini-slider-img-2.webp' />
                            <img src="img/mini-slider-img-2.jpg" alt="slider-1" className="mini-slider__img" />
                        </picture>
                    </SwiperSlide>
                    <SwiperSlide className='mini-slider__slide'>
                        <picture >
                            <source type='image/webp' srcSet='./img/mini-slider-img-3-600.webp' media="(max-width: 600px)" />
                            <source type='image/webp' srcSet='./img/mini-slider-img-3.webp' />
                            <img src="img/mini-slider-img-3.jpg" alt="slider-1" className="mini-slider__img" />
                        </picture>
                    </SwiperSlide>
                    
                </Swiper>
                <div className="mini-slider-swiper-button-next">
                    <img src="./img/client-say-arrow.svg" alt="" className="mini-slider__arrow" />
                </div>
                <div className="mini-slider-swiper-button-prev">
                    <img src="./img/client-say-arrow.svg" alt="" className="mini-slider__arrow" />
                </div>
            </div>
        </>
    );
}

export default MiniSlider;