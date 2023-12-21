import  React, { useState, useEffect }  from "react";
import anime from "animejs";
import './open_page3.css'
import Aos from "aos";

const Open_page3 = () => {
    const [animationExecuted, setAnimationExecuted] = useState(false);

    useEffect(() => {
       const handleScroll = () => {
           const scrollPosition = window.scrollY;
           const windowHeight = window.innerHeight;
           const documentHeight = document.documentElement.scrollHeight;
           const newScrollPercent = (scrollPosition / (documentHeight - windowHeight)) * 100;

           if (!animationExecuted && newScrollPercent > 12.5) {
               const animation = anime({
                   targets: '.line3',
                   scaleY: [0, 1],
                   easing: 'easeInOutQuad',
                   duration: 3000,
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
        className="open-wrap h-100vh bg-black">
            <div className="h-35vh">
                <svg width="50" height="250">
                    <line className="line3" x1="25" y1="20" x2="25" y2="250" stroke="white" strokeWidth="1"/>
                </svg>
            </div>
            <div>
                <p 
                        data-aos="fade-up"
                        data-aos-offset="150"
                        data-aos-delay="50"
                        data-aos-duration="900"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top"
                        className="f_text"
                        id="f_text2">明細書</p>
            </div>
            <div>
                <h1 
                            data-aos="fade-up"
                            data-aos-offset="350"
                            data-aos-delay="90"
                            data-aos-duration="900"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-anchor-placement="top"
                            className="mid_text2">명세서</h1>
            </div>
            <div className='last_wrap'>
                <div className="last_text_wrap">
                <div className="last_text"
            data-aos="fade-up"
            data-aos-offset="350"
            data-aos-delay="110"
            data-aos-duration="900"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top">특정 업무상의 목적으로 금액이나 물품등의 세부 명세를 기재한 문서를 말한다.
            </div> 
                </div>
            </div>
        </div>
    );
}

export default Open_page3;