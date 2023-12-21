import  React, {useLayoutEffect, useRef} from "react";
import './open_page5.css';
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Open_page5 = () => {
    const main = useRef();
    const main2 = useRef();

    useGSAP(
        () => {
          const boxes = gsap.utils.toArray('.black_one');
          boxes.forEach((box) => {
            gsap.to(box, {
              y: '-120%',
              opacity: 0,
              scrollTrigger: {
                trigger: box,
                start: 'bottom 50%',
                end: 'bottom 10%',
                scrub: true,
                // markers: true,
              },
            }
            );
          });
        },
        { scope: main }
      );
      useGSAP(
        () => {
          const boxes = gsap.utils.toArray('.black_two');
          boxes.forEach((box) => {
            gsap.to(box, {
              y: '120%',
              opacity: 0,
              scrollTrigger: {
                trigger: box,
                start: 'top 50%',
                end: 'top 30%',
                scrub: true,
                // markers: true,
              },
            }
            );
          });
        },
        { scope: main2 }
      );
    
    return (
        <div className="page5">
      <section className="section flex-center column">
      </section>
        <div className="black_box"></div>
      <div className="section flex-center column"  ref={main} >
        <div className="black_one" style={{backgroundImage:'url("/pic/open_pic/open_black1.PNG")'}}></div>
      </div>
      <div className="section flex-center column" ref={main2}>
        <div className="black_two" style={{backgroundImage:'url("/pic/open_pic/open_black2.PNG")'}}></div>
      </div>
      <div>
      <div className="page5_font_box">
        <div id="page5_text1">New create</div>
        <p id="page5_text2">기억명세서</p>
        <p id="page5_text3" className="h-10vh font-lighter">에서 비롯해 새로워집니다</p>
        </div>
      </div>
    </div>
  );
    };


export default Open_page5;