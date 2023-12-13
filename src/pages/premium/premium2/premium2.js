/* 
-------------------------------------------------------------------------
	파일명		: premium2.js
	설명		: 프리미엄 패키지 상품 페이지 2
	담당자		: 박효연
	개발날짜	: 2023/12/12
-------------------------------------------------------------------------
*/

import { useState, useEffect } from "react";
import { FiArrowUpCircle } from "react-icons/fi";
import './premium2.css';
import Premium2_1 from "./premium2_1";
import Premium2_2 from "./premium2_2";
import Premium2_3 from "./premium2_3";
import Premium2_4 from "./premium2_4";
import Premium2_5 from "./premium2_5";
import Premium2_6 from "./premium2_6";
import Premium2_7 from "./premium2_7";
import Premium2_8 from "./premium2_8";
import Premium2_9 from "./premium2_9";

const Premium2 = () => {
    const [showButton, setShowButton] = useState(false);

    const scrollToTop = () => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(()=>{
        const handleShowButton = () => {
            if (window.scrollY > 500) {
                setShowButton(true)
            } else {
                setShowButton(false)
            }
        }

        console.log(window.scrollY)
        window.addEventListener('scroll', handleShowButton)

        return () => {
            window.removeEventListener('scroll', handleShowButton)
        }
    }, []);


    return(
        <div className="premium2_combine">
            {showButton && (<FiArrowUpCircle color='gray' className='premium2_scrollBtn' size='35' onClick={scrollToTop}/>)}
            <Premium2_1/>
            <Premium2_2/>
            <Premium2_3/>
            <Premium2_4/>
            <Premium2_5/>
            <Premium2_6/>
            <Premium2_7/>
            <Premium2_8/>
            <Premium2_9/>
        </div>
    );
};

export default Premium2;
