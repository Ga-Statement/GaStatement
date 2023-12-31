import  React, {useLayoutEffect, useRef} from "react";
import TypeIt from "typeit-react";
import './open_page4.css';
import gsap from 'gsap';

const Open_page4 = () => {
    return (
        <div className="page4_full">
            <div 
            data-aos="fade-up"
            data-aos-offset="150"
            data-aos-delay="100"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out-back"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            className="typelt">
            <TypeIt
            
                getBeforeInit={(instance) => {
                instance.type("오래된 것들.").pause(1050)
                .delete(7).pause(500).type("중고.").pause(1050)
                .delete(3).pause(500).type("새것.").pause(3600)
                .delete(3).pause(500).type("오래된 것들.").pause(2400)
                .delete(7).pause(500).type("중고.").pause(750)
                .delete(3).pause(500).type("불필요한.").pause(750)
                .delete(5).pause(600).type("헌것, 골동품.").pause(750)
                .delete(8).pause(500).type("앤티크").pause(750)
                .delete(3).pause(600).type("기억, 이야기").pause(750)
                .delete(7).pause(600).type("고물.").pause(750)
                .delete(3).pause(600).type("used").pause(500)
                .delete(4).pause(600).type("second hand").pause(500)
                .delete(11).pause(600).type("'추억.'").pause(500)
                ;

                return instance}}
/>
            </div>
        </div>
    );
}

export default Open_page4;

