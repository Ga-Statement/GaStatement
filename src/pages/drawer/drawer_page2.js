import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './drawer_page2.css';

const Drawer_page2 = () => {
    useEffect(() => {
        AOS.init();
        })
    return(
        <div className="DrawerPage2">
            <svg width="100" height="1500" className="svg_2">
                <line className="line" x1="50" y1="7" x2="50" y2="1500" stroke="black" strokeWidth="1"/>
            </svg>
            <img className='openDrawerImg' src="/pic/drawer_pic/opendrawer.png" alt="" />
            <div className="DrawerPage2_1">
                <img src="/pic/drawer_pic/drawer_desc.webp" alt="" className="DrawerPage2_1_desc" data-aos="fade-zoom-in" data-aos-duration="3000"/>
            </div>
        </div>
    );
};

export default Drawer_page2;