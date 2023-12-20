import react, { useRef, useEffect } from "react";
import { gsap } from 'gsap';


const MyComponent = () => {
    const myElement = useRef(null);
    const 
  
    useEffect(() => {
        gsap.timeline({
          scrollTrigger: {
            trigger: ".trigger",
            scrub: 0.5,
            pin: true,
            start: "top top",
            end: "+=150%"
          }
        })
        gsap.to(".box", {
          force3D: true,
          duration: 1,
          xPercent: 100,
          ease: "power1.inOut",
          stagger: { amount: 1 }
        })
        gsap.to(".box", { ease: "power1.out", duration: 1, rotation: "45deg" }, 0)
        gsap.to(".box", { ease: "power1.in", duration: 1, rotation: "0deg" }, 1);
      }, []);
  
    return (
      <div ref={myElement}>
      </div>
    );
  };
  
  export default MyComponent;