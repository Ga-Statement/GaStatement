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
            <div className="open-title h-100vh bg-black">
            </div>
        </div>
    );
}

export default Open_page10;