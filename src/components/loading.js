/* 
-------------------------------------------------------------------------
	파일명		: loading.js
	설명		: 주문서 작성 창으로 넘어갈 때 로딩 페이지
	담당자		: 박효연
	개발날짜	: 2023/12/11
-------------------------------------------------------------------------
*/

import { BeatLoader } from "react-spinners";
import './loading.css';

const Loading = () => {
    return(
        <div className='loadingContainer'>
            <div className="loadingSpinner">
                <BeatLoader color="rgba(123, 123, 123, 1)" size={25}
                margin={10}
                speedMultiplier={1}/>
            </div>
            <div className="loadingText">Loading...</div>
        </div>
    )
}

export default Loading;