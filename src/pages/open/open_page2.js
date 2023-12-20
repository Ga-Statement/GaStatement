import  React, { useState, useEffect } from "react";
import anime from 'animejs';
import './open_page2.css'
import Aos from "aos";


const Open_page2 = () => {
    const [animationExecuted, setAnimationExecuted] = useState(false);

    useEffect(() => {
       const handleScroll = () => {
           const scrollPosition = window.scrollY;
           const windowHeight = window.innerHeight;
           const documentHeight = document.documentElement.scrollHeight;
           const newScrollPercent = (scrollPosition / (documentHeight - windowHeight)) * 100;

           if (!animationExecuted && newScrollPercent > 8.5) {
               const animation = anime({
                   targets: '.line1',
                   scaleY: [0, 1],
                   easing: 'easeInOutQuad',
                   duration: 2500,
                   loop: false
               });

               setAnimationExecuted(true);

               return () => {
                   animation.pause();
               };
           }
       };

       window.addEventListener('scroll', handleScroll);
       return () => {
           window.removeEventListener('scroll', handleScroll);
       };
   }, [animationExecuted]);

    return (
        <div 
        id="page2_full"
        data-aos="fade-up"
        data-aos-offset="150"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top"
        className="open-wrap h-80vh bg-black">
            
            <div className="f_text_wrap">
                    <p className="f_text">記憶</p>
            </div>
            <div className="h-25vh">
                <svg width="50" height="180">
                    <line className="line1" x1="25" y1="20" x2="25" y2="250" stroke="white" strokeWidth="1"/>
                </svg>
            </div>
            <div
            data-aos="fade-up"
            data-aos-offset="350"
            data-aos-delay="0"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top"
>
                <h1 className="mid_text">기억</h1>
            </div>
            <div className='last_wrap'>
                <div className="last_text_wrap_">
                    <div className="last_text__"
                                data-aos="fade-up"
                                data-aos-offset="350"
                                data-aos-delay="110"
                                data-aos-duration="900"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false"
                                data-aos-anchor-placement="top">
                                    <p className="last_text_">이전의 인상이나 경험을 의식속에 간직하거나 도로 생각해 냄.</p>
                                    </div>
                </div>
            </div>
        </div>
    );
}

export default Open_page2;