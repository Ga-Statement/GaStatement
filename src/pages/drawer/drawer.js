/* 
-------------------------------------------------------------------------
	파일명		: drawer.js
	설명		: 서랍 소개 페이지
	담당자		: 박효연
	개발날짜	: 2023/12/11
-------------------------------------------------------------------------
*/

import { useState, useEffect } from 'react';
import Drawer_page1 from "./drawer_page1";
import Drawer_page2 from "./drawer_page2";
import Drawer_page3 from "./drawer_page3";
import Drawer_page4 from "./drawer_page4";
import Drawer_page5 from "./drawer_page5";

import './drawer.css';

const Drawer = () => {
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
		<div>
			{showButton && (<img src='/pic/icon_pic/drawer_backtotop.webp' className='drawer_scrollBtn' onClick={scrollToTop}/>)}
			<Drawer_page1/>
			<Drawer_page2/>
			<Drawer_page3/>
			<Drawer_page4/>
            <Drawer_page5/>
		</div>
	);
};

export default Drawer;
