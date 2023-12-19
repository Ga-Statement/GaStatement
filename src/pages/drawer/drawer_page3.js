import React, { useEffect } from "react";
import './drawer_page3.css';
import AOS from "aos";
import "aos/dist/aos.css";

const Drawer_page3 = () => {
    useEffect(() => {
        AOS.init();
      })
    return(
        <div className="DrawerPage3">
            <svg width="100" height="1300" className="svg_3">
                <line className="line" x1="50" y1="7" x2="50" y2="1300" stroke="black" strokeWidth="1"/>
            </svg>
            <div className="DrawerPage3_1">
                <img src="/pic/drawer_pic/drawer_desc.webp" alt="" className="DrawerPage3_1_desc" data-aos="fade-zoom-in" data-aos-duration="3000"/>
            </div>
        </div>
    );
};

export default Drawer_page3;