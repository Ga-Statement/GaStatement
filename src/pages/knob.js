/* 
-------------------------------------------------------------------------
	파일명		: knob.js
	설명		: 서랍 - 신청서
	담당자		: 박효연
	개발날짜	: 2023/12/10
-------------------------------------------------------------------------
*/

import { useState } from 'react';
import './knob.css';

const Knob = ({closeKnobBtn}) => {

    const closeKnob = () =>{
        closeKnobBtn();
    }
    
    const [knobProd, setKnobProd] = useState('');
    const [knobBuy, setKnobBuy] = useState('');
    const [knobName, setKnobName] = useState('');
    const [knobPhone, setKnobPhone] = useState('');
    const [knobAddress, setKnobAddress] = useState('');
    const [knobEmail, setKnobEmail] = useState('');
    const [knobPrice, setKnobPrice] = useState('');
    const [knobDesc, setKnobDesc] = useState('');

    return(
        <div className="knob_container">
            <div className='knob_title_container'>
                <div className='knob_title'>추억의 물품 마케팅 신청</div>
                <div className='knobCloseBtn' onClick={closeKnob}><img src="/pic/icon_pic/closeBtn.png" alt="" /></div>
            </div>
            <div className="check">
                <div className='check_p'><label>프리미엄 마케팅<input type="radio" name="premium" value=""/></label></div>
                <div className='check_b'><label>기본 마케팅<input type="radio" name="premium" value=""/></label></div>
            </div>
            <div><input className='prod_name' type="text" placeholder='제품종류/상품명' value={knobProd}/></div>
            <div><input className='when_buy' type="text" placeholder='구입시기' value={knobBuy}/></div>
            <div><input className='applicant_name' type="text" placeholder='신청자 성함' value={knobName}/></div>
            <div><input className='applicant_phone' type="text" placeholder='전화번호' value={knobPhone}/></div>
            <div><input className='knob_address' type="text" placeholder='주소'/></div>
            <div><input className='knob_email' type="text" placeholder='이메일'/></div>
            <div><input className='knob_price' type="text" placeholder='구입가격/희망가격'/></div>
            <div><input className='knob_file' type="file" placeholder='첨부파일(제품이미지, 영수증, 구매내역)' multiple/></div>
            <textarea className="knob_desc" placeholder='프리미엄 마케팅 신청시
                물품과의 추억을 상세히 기재해주세요.
                마케팅 활용에 큰 도움이 됩니다.'/>
                            <textarea className="knob_notice" placeholder=' 유의사항
                1. 전문가의 검수 진행 후 판매가 진행 됩니다.
                2. 진행되는 과정은 나의이야기에서 확인 가능합니다.
                3. 판매가 불가능 상품일 경우 반품이 될 수 있습니다.
                4. 판매가 불가능한 상품일 경우 신청자의 동의시 폐기 처리 해드립니다.
                5. 판매금액의 일정 부분 수수료가 발생합니다.
                6. 판매가 시작되는 상품은 취소 할 수 없습니다.
                7. 판매금액은 반드시 희망가격으로 설정되지 않을수 있습니다.
            ' readOnly/>
            <div><label>동의<input type="checkbox" name="" value=""/></label></div>
            <div className='go_knob'>신청하기</div>
        </div>
    )
}

export default Knob;