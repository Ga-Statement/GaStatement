import  React, { useState, useEffect } from "react";
import anime from 'animejs';


const Open_page2 = () => {
    const [animationExecuted, setAnimationExecuted] = useState(false);

    useEffect(() => {
       const handleScroll = () => {
           const scrollPosition = window.scrollY;
           const windowHeight = window.innerHeight;
           const documentHeight = document.documentElement.scrollHeight;
           const newScrollPercent = (scrollPosition / (documentHeight - windowHeight)) * 100;

           if (!animationExecuted && newScrollPercent > 10) {
               const animation = anime({
                   targets: '.line',
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
        <div className="open-wrap h-100vh bg-black">
            <div>
                <img className="open-Ldiv" src="/pic/open_pic/logo_2.png" alt="" />
            </div>
            <div className="h-25vh">
                <svg width="100" height="150">
                    <line className="line" x1="50" y1="10" x2="50" y2="150" stroke="white" strokeWidth="3"/>
                </svg>
            </div>
            <div>
                <h1 className="font-size-150 h-20vh margin-0 font-white">기억</h1>
            </div>
            <div>
                <h2 className="font-size-100 h-15vh margin-40 font-white">記憶</h2>
            </div>
            <div className="w-100vw h-15vh bg-white padding-top-30">
                <div>
                    <h5 className="font-size-30 h-5vh margin-0">이전의 인상이나 경험을 의식 속에 간직하거나 도로 생각해 냄.</h5>
                </div>
            </div>
        </div>
    );
}

export default Open_page2;