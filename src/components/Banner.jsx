import React from "react";
import bannerimg1 from '../images/table1.jpg';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

const Banner = () => {
    return (<> <section className="hero-banner">
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                Navigation={true}
                grabCursor={true}
                pagination={{ clickable: true }}
                autoplay={true}
                >
                <SwiperSlide> <img src={bannerimg1} alt="" className="o-cover"/></SwiperSlide>
                <SwiperSlide> <img src={bannerimg1} alt="" className="o-cover"/></SwiperSlide>
                <SwiperSlide> <img src={bannerimg1} alt="" className="o-cover"/></SwiperSlide>
                <SwiperSlide> <img src={bannerimg1} alt="" className="o-cover"/></SwiperSlide>
            </Swiper>
    </section> </>)
}

export default Banner;