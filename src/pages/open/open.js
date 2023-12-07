/* 
-------------------------------------------------------------------------
	파일명		: open.js
	설명		: 오픈 페이지 (원 스크롤)
	담당자		: 김진수
	개발날짜	: 2023/12/07
-------------------------------------------------------------------------
*/
import React from "react";
import Open_page1 from "./open_page1";
import Open_page2 from "./open_page2";
import Open_page3 from "./open_page3";
import Open_page4 from "./open_page4";
import Open_page5 from "./open_page5";
import Open_page6 from "./open_page6";
import Open_page7 from "./open_page7";
import Open_page8 from "./open_page8";
import Open_page9 from "./open_page9";
import Open_page10 from "./open_page10";
import Open_page11 from "./open_page11";
import './open.css';

const Open = () => {
	return (
		<div>
			<Open_page1 />
			<Open_page2 />
			<Open_page3 />
			<Open_page4 />
			<Open_page5 />
			<Open_page6 />
			<Open_page7 />
			<Open_page8 />
			<Open_page9 />
			<Open_page10 />
			<Open_page11 />
		</div>
	);
}

export default Open;