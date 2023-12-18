import React, { useCallback, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import './drawer_page4.css'

const Drawer_page4 = () => {
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        pauseOnFocus: false,
        pauseOnHover: false,  
        autoplay: false,
        autoplaySpeed: 3000,
      };
      
      const slickRef = useRef(null);
      const previous = useCallback(() => slickRef.current.slickPrev(), []);
      const next = useCallback(() => slickRef.current.slickNext(), []);

    return(
        <div className="DrawerPage4">
                <Slider {...settings} ref={slickRef}>
                <div className="slick-slide">
                    <img src="/pic/drawer_pic/drawer_step1.webp" alt="Image 1" />
                </div>
                <div className="slick-slide">
                    <img src="/pic/drawer_pic/drawer_step2.webp" alt="Image 2" />
                </div>
                <div className="slick-slide">
                    <img src="/pic/drawer_pic/drawer_step3.webp" alt="Image 3" />
                </div>
                <div className="slick-slide">
                    <img src="/pic/drawer_pic/drawer_4.webp" alt="Image 4" />
                </div>
                <div className="slick-slide">
                    <img src="/pic/drawer_pic/drawer_5.webp" alt="Image 5" />
                </div>
                </Slider>
                <div onClick={previous}>
                    <MdArrowBackIos size='20'className='slick-prev'/>
                </div>
                <div onClick={next}>
                    <MdArrowForwardIos className='slick-next'/>
                </div>
        </div>
    );
};

export default Drawer_page4;