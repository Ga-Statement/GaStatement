import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Open_page10 = () => {
    useEffect(() => {
        AOS.init({duration: 1200});
    });

    return (
        <div>
            <div className="open-title h-100vh bg-style">
                <div className="open-title" style={{position: "relative", left: 150}}>
                    <video className="h-100vh" muted autoPlay loop>
                        <source src="/pic/open_pic/cart.mp4" type="video/mp4" />
                    </video>
                </div>
                <div style={{position: "relative", right: 250}}>
                    <Link to="/" className="font-size-50" style={{textDecoration: 'none'}}
                    data-aos="fade-zoom-in"
                    data-aos-easing="ease-in-back"
                    data-aos-delay="3000"
                    data-aos-anchor-placement="top-center">
                        <div className="font-black">메인화면으로</div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Open_page10;