/* 
-------------------------------------------------------------------------
	파일명		: loading2.js
	설명		: 주문 완료 시 나오는 로딩 페이지
	담당자		: 박효연
	개발날짜	: 2023/12/12
-------------------------------------------------------------------------
*/

import { FadeLoader } from "react-spinners";
import './loading2.css';

const LoadingPayComplete = () => {
    return(
        <div className='loadingContainer_2'>
            <div className="loadingSpinner_2">
                <FadeLoader color="rgba(123, 123, 123, 1)" size={25}
                margin={10}
                speedMultiplier={1}/>
            </div>
            <div className="loadingText_2">결제 진행중</div>
        </div>
    )
}

export default LoadingPayComplete;