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
            <Swiper className='say-slider'
                modules={[Navigation]}
                navigation={{
                    nextEl: '.say-swiper-button-next',
                    prevEl: '.say-swiper-button-prev',
                }}
                spaceBetween={40}
                slidesPerView={1}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide className='say-slider__slide'>
                    <picture >

                        <source type='image/webp' srcSet='./img/say-slider-img-600.webp' media="(max-width: 600px)" />
                        <source type='image/webp' srcSet='./img/say-slider-img-1200.webp' media="(max-width: 1200px)" />
                        <source type='image/webp' srcSet='./img/say-slider-img.webp' />

                        <img src="img/say-slider-img.png" alt="slider-1" className="say-slider__img" />
                    </picture>
                    <div className="say-slider__text-box">
                        <div className="say-slider__heading">
                            Laura Chaisson
                        </div>
                        <div className="say-slider__text">In irure et ipsum eiusmod adipisicing id elit cillum proident. Adipisicing ullamco nisi veniam occaecat id excepteur ad non. Sunt occaecat elit ullamco commodo exercitation. Anim mollit irure Lorem proident veniam excepteur non irure Lorem. <span>Lorem esse sint in nisi id esse.</span></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='say-slider__slide'>
                    <picture >

                        <source type='image/webp' srcSet='./img/say-slider-img-600.webp' media="(max-width: 600px)" />
                        <source type='image/webp' srcSet='./img/say-slider-img-1200.webp' media="(max-width: 1200px)" />
                        <source type='image/webp' srcSet='./img/say-slider-img.webp' />

                        <img src="img/say-slider-img.png" alt="slider-1" className="say-slider__img" />
                    </picture>
                    <div className="say-slider__text-box">
                        <div className="say-slider__heading">
                            Laura Chaisson
                        </div>
                        <div className="say-slider__text">In irure et ipsum eiusmod adipisicing id elit cillum proident. Adipisicing ullamco nisi veniam occaecat id excepteur ad non. Sunt occaecat elit ullamco commodo exercitation. Anim mollit irure Lorem proident veniam excepteur non irure Lorem. <span>Lorem esse sint in nisi id esse.</span></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='say-slider__slide'>
                    <picture >

                        <source type='image/webp' srcSet='./img/say-slider-img-600.webp' media="(max-width: 600px)" />
                        <source type='image/webp' srcSet='./img/say-slider-img-1200.webp' media="(max-width: 1200px)" />
                        <source type='image/webp' srcSet='./img/say-slider-img.webp' />

                        <img src="img/say-slider-img.png" alt="slider-1" className="say-slider__img" />
                    </picture>
                    <div className="say-slider__text-box">
                        <div className="say-slider__heading">
                            Laura Chaisson
                        </div>
                        <div className="say-slider__text">In irure et ipsum eiusmod adipisicing id elit cillum proident. Adipisicing ullamco nisi veniam occaecat id excepteur ad non. Sunt occaecat elit ullamco commodo exercitation. Anim mollit irure Lorem proident veniam excepteur non irure Lorem. <span>Lorem esse sint in nisi id esse.</span></div>
                    </div>
                </SwiperSlide>

            </Swiper>
            <div className="say-swiper-button-next">
                <img src="./img/client-say-arrow.svg" alt="" className="say-slider__arrow" />
            </div>
            <div className="say-swiper-button-prev">
                <img src="./img/client-say-arrow.svg" alt="" className="say-slider__arrow" />
            </div>
        </>
    );
};