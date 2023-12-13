/* 
-------------------------------------------------------------------------
	파일명		: premium1.js
	설명		: 프리미엄 패키지 상품 페이지 1
	담당자		: 박효연
	개발날짜	: 2023/12/10
-------------------------------------------------------------------------
*/

import { useState, useEffect } from "react";
import { FiArrowUpCircle } from "react-icons/fi";
import './premium1.css';
import Premium1_1 from "./premium1_1";
import Premium1_2 from "./premium1_2";
import Premium1_3 from "./premium1_3";
import Premium1_4 from "./premium1_4";
import Premium1_5 from "./premium1_5";
import Premium1_6 from "./premium1_6";
import Premium1_7 from "./premium1_7";

const Premium1 = () => {
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
        <div className="premium1_combine">
            {showButton && (<FiArrowUpCircle color='gray' className='premium1_scrollBtn' size='35' onClick={scrollToTop}/>)}
            <Premium1_1/>
            <Premium1_2/>
            <Premium1_3/>
            <Premium1_4/>
            <Premium1_5/>
            <Premium1_6/>
            <Premium1_7/>
        </div>
    );
};

export default Premium1;