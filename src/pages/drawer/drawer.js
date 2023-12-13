/* 
-------------------------------------------------------------------------
	파일명		: drawer.js
	설명		: 서랍 소개 페이지
	담당자		: 박효연
	개발날짜	: 2023/12/11
-------------------------------------------------------------------------
*/

import Drawer_page1 from "./drawer_page1";
import Drawer_page2 from "./drawer_page2";
import Drawer_page3 from "./drawer_page3";
import Drawer_page4 from "./drawer_page4";

const Drawer = () => {
	return(
		<div>
			<Drawer_page1/>
			<Drawer_page2/>
			<Drawer_page3/>
			<Drawer_page4/>
		</div>
	);
};

export default Drawer;
