import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import React from "react";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/effect-cards";
import "swiper/css/navigation";

export default () => {
    return (
        <>
            <Swiper className='main-slider'
                modules={[Navigation]}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                // spaceBetween={40}
                slidesPerView={1}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide className='main-slider__slide'>
                    <picture >

                        <source type='image/webp' srcSet='./img/main-slider-img-1.webp' />
                        <source type='image/webp' srcSet='./img/main-slider-img-1-600.webp' media="(max-width: 600px)" />
                        <img src="img/main-slider-img-1.jpg" alt="slider-1" className="main-slider__img" />
                    </picture>
                </SwiperSlide>
                <SwiperSlide className='main-slider__slide'><picture >

                    <source type='image/webp' srcSet='./img/main-slider-img-2.webp' />
                    <source type='image/webp' srcSet='./img/main-slider-img-2-600.webp' media="(max-width: 600px)" />
                    <img src="img/main-slider-img-2.png" alt="slider-2" className="main-slider__img" />
                </picture>
                </SwiperSlide>
                <SwiperSlide className='main-slider__slide'><picture >

                    <source type='image/webp' srcSet='./img/main-slider-img-3.webp' />
                    <source type='image/webp' srcSet='./img/main-slider-img-3-600.webp' media="(max-width: 600px)" />
                    <img src="img/main-slider-img-3.png" alt="slider-3" className="main-slider__img" />
                </picture>
                </SwiperSlide>
                <SwiperSlide className='main-slider__slide'><picture >

                    <source type='image/webp' srcSet='./img/main-slider-img-4.webp' />
                    <source type='image/webp' srcSet='./img/main-slider-img-4-600.webp' media="(max-width: 600px)" />
                    <img src="img/main-slider-img-4.png" alt="slider-1" className="main-slider__img" />
                </picture>
                </SwiperSlide>


            </Swiper>
            <div className="swiper-button-next">
                <img src="./img/main-slider-arrow.svg" alt="" className="main-hero__arrow" />
            </div>
            <div className="swiper-button-prev">
                <img src="./img/main-slider-arrow.svg" alt="" className="main-hero__arrow" />
            </div>
        </>
    );
};