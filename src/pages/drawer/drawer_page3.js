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
                <div className="DrawerPage3_1_1" data-aos="fade-down" data-aos-duration="2000">각 분야 전문가들이 모여</div>
                <div className="DrawerPage3_1_2">
                    <img src="/pic/drawer_pic/expert (1).png" alt="" className="DrawerPage3_img1" data-aos="fade-left" data-aos-duration="3000"/>
                    <img src="/pic/drawer_pic/expert (4).png" alt="" className="DrawerPage3_img4" data-aos="fade-right" data-aos-duration="3000"/>
                    <img src="/pic/drawer_pic/expert (3).png" alt="" className="DrawerPage3_img3" data-aos="fade-left" data-aos-duration="3000"/>
                    <img src="/pic/drawer_pic/expert (5).png" alt="" className="DrawerPage3_img5" data-aos="fade-left" data-aos-duration="3000"/>
                    <img src="/pic/drawer_pic/expert (2).png" alt="" className="DrawerPage3_img2" data-aos="fade-right" data-aos-duration="3000"/>
                </div>
                <div className="DrawerPage3_1_3" data-aos="fade-up" data-aos-duration="2000">기억명세서가 탄생합니다.</div>
            </div>
        </div>
    );
};

export default Drawer_page3;