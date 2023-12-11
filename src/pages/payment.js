/* 
-------------------------------------------------------------------------
	파일명		: payment.js
	설명		: 결제 페이지
	담당자		: 박효연
	개발날짜	: 2023/12/10
-------------------------------------------------------------------------
*/

import React, { useState, useEffect } from 'react';
import './payment.css';
import Loading from '../components/loading';

const Payment = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return(
        <>
        {isLoading ? (<div className="loadingContainer"><Loading /></div>) : 
        (<div className="paymentContainer">
            <div className="paymentContainerTitle">주문하기</div>
            <div className="paymentLR">
                <div className="paymentLeft">
                    <div className="payProdInfo">
                        <div className="payProdInfoTitle">주문 상품 정보</div>
                        <div className="payProdList">
                            <div className="payProdImg">이미지</div>
                            <div className="payNamePrice">
                                <div className="payProdName">제품명</div>
                                <div className="payProdPrice">10,000원</div>
                            </div>
                        </div>
                    </div>
                    <div className="payCustomerInfo">
                        <div className="payCustInfoEdit">
                            <div className="payCustomerInfoTitle">주문자 정보</div>
                            <div className="customerEdit">수정</div>
                        </div>
                        <div className="customerName">이름</div>
                        <div className="customerPhone">휴대폰 번호</div>
                        <div className="customerId">아이디</div>
                    </div>
                    <div className="payDeliveryInfo">
                        <div className="deliveryInfoEdit">
                            <div className="payDeliveryInfoTitle">배송지 정보</div>
                            <div className="deliveryEdit">변경</div>
                        </div>
                        <div className="deliveryName">이름</div>
                        <div className="deliveryPhone">휴대폰 번호</div>
                        <div className="deliveryAddress">배송지 주소</div>
                        <div className="deliveryMemo">
                            <form action="#">
                                <div className="deliveryMemoTitle">배송 메모</div>
                                <select name="deliveryMemo" id="deliveryMemo" className='deliveryMemoSelect'>
                                    <option value="0">배송 메모를 선택해주세요.</option>
                                    <option value="1">선택 안 함</option>
                                    <option value="2">문 앞에 놓아주세요</option>
                                    <option value="3">배송 전 미리 연락해 주세요.</option>
                                    <option value="4">부재 시 연락 부탁드려요.</option>
                                    <option value="direct">직접 입력</option>
                                </select>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="paymentRight">
                    <div className="finalPayment">
                        <div className="finalPaymentTitle">최종 결제금액</div>
                        <div className="finalPayment_1">
                            <div className='finalPaymentPrice'>상품 가격</div>
                            <div className='finalPaymentPrice_2'>107,000원</div>
                        </div>
                        <div className="finalPayment_2">
                            <div className='DeliverFee'>배송비</div>
                            <div className='DeliverFee_2'>3,000원</div>
                        </div>
                        <div className="finalPayment_3">
                            <div className='totalPayment'>총 결제금액</div>
                            <div className='totalPaymentAmount'>110,000원</div>
                        </div>
                    </div>
                    <div className="paymentMethod">
                        <div className="paymentMethodTitle">결제 방법</div>
                        <form action="paymentMethod" className='paymentMethodList'>
                            <label><input type="radio" value='1' name='paymentMethod'/>서랍페이</label>
                            <label><input type="radio" value='2' name='paymentMethod'/>무통장입금</label>
                            <label><input type="radio" value='3' name='paymentMethod'/>가상계좌</label>
                            <label><input type="radio" value='4' name='paymentMethod'/>휴대폰 결제</label>
                            <label><input type="radio" value='5' name='paymentMethod'/>신용카드</label>
                        </form>
                    </div>
                    <div className="purchaseTerms">
                        <label><input type="checkbox"/>구매조건 확인 및 결제진행에 동의</label>
                    </div>
                    <div className='purchaseBtn'>구매하기</div>
                </div>
            </div>
        </div>)}
        </>
    )
}

export default Payment;