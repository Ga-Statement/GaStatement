/* 
-------------------------------------------------------------------------
	파일명		: payment.js
	설명		: 결제 페이지
	담당자		: 박효연
	개발날짜	: 2023/12/10
-------------------------------------------------------------------------
*/

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './payment.css';
import Loading from '../components/loading';
import { FaRegUser } from "react-icons/fa";
import { MdOutlinePhoneAndroid, MdOutlineLocalPostOffice } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { PiNoteBold } from "react-icons/pi";

const Payment = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isTermsChecked, setIsTermsChecked] = useState(false);
    const [showWarning, setShowWarning] = useState(false);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handlePaymentMethodChange = (value) => {
        setSelectedPaymentMethod(value);
    };

    return(
        <>
        {isLoading ? (<div className="loadingContainer"><Loading /></div>) : 
        (
        <div className='payment_container'>
            <div className="payment_wrapper_left">
                <img src="/pic/shop_pic/LP2.webp" alt="상품 이미지" className='payment_product_img'/>
                <img src="/pic/shop_pic/lp_logo.webp" alt="상품 로고" className='payment_product_logo'/>
                <div className="payment_product_desc">
                    <div className="payment_product_desc1">The Beatles</div>
                    <div className="payment_product_desc2">1집 LP Abbey Road</div>
                </div>
            </div>
            <div className="payment_wrapper_right">
                <div className="payment_wrapper_right_box">
                    <div className="payment_user_info_title">주문자 정보</div>
                    <div className="payment_user_info">
                        <div className="payment_user_info_1">
                            <div className="payment_user_info_1_name">
                                <FaRegUser className='payment_user_info_1_icon'/>
                                이름
                            </div>
                            <div className="payment_user_info_1_edit">수정</div>
                        </div>
                        <div className="payment_user_info_2">
                            <div className="payment_user_info_2_phone">
                                <MdOutlinePhoneAndroid className='payment_user_info_2_icon'/>
                                010-1234-5678
                            </div>
                            <div className="payment_user_info_2_edit">수정</div>
                        </div>
                        <div className="payment_user_info_3">
                            <div className="payment_user_info_3_email">
                                <MdOutlineLocalPostOffice className='payment_user_info_3_icon'/>
                                abc123@naver.com
                            </div>
                            <div className="payment_user_info_3_edit">수정</div>
                        </div>
                        <div className="payment_user_info_4">
                            <div className="payment_user_info_4_address">
                                <FaLocationDot className='payment_user_info_4_icon'/>
                                배송지 주소
                            </div>
                            <div className="payment_user_info_4_edit">수정</div>
                        </div>
                        <div className="payment_user_info_5">
                            <div className="payment_user_info_5_memo">
                                <PiNoteBold className='payment_user_info_5_icon'/>
                                <div className="delivery_memo_title">배송 메모</div>
                                <form action="#">
                                    <select name="deliveryMemo" id="deliveryMemo" className='delivery_memo_select'>
                                        <option value="0">배송 메모를 선택해주세요.</option>
                                        <option value="1">선택 안 함</option>
                                        <option value="2">문 앞에 놓아주세요</option>
                                        <option value="3">배송 전 미리 연락해 주세요.</option>
                                        <option value="4">부재 시 경비실에 맡겨주세요.</option>
                                        <option value="direct">직접 입력</option>
                                    </select>
                                </form>
                            </div>
                            <div className="payment_user_info_5_edit">수정</div>
                        </div>
                    </div>
                    <div className="payment_amount_title">최종 결제 금액</div>
                    <div className="payment_amount">
                        <div className="payment_amount_1">
                            <div className="payment_amount_1_1">상품 가격</div>
                            <div className="payment_amount_1_2">500,000원</div>
                        </div>
                        <div className="payment_amount_2">
                            <div className="payment_amount_2_1">배송비</div>
                            <div className="payment_amount_2_2">3,000원</div>
                        </div>
                        <div className="payment_amount_3">
                            <div className="payment_amount_3_1">총 결제금액</div>
                            <div className="payment_amount_3_2">503,000원</div>
                        </div>
                    </div>
                    <div className="payment_method_title">결제 방법</div>
                    <div className="payment_method">
                        <form action="paymentMethod" className='payment_method_list'>
                            <label><input type="radio" value='1' name='paymentMethod' checked={selectedPaymentMethod === '1'}
                            onChange={() => handlePaymentMethodChange('1')}/>서랍페이</label>
                            <label><input type="radio" value='2' name='paymentMethod' checked={selectedPaymentMethod === '2'}
                            onChange={() => handlePaymentMethodChange('2')}/>무통장입금</label>
                            <label><input type="radio" value='3' name='paymentMethod' checked={selectedPaymentMethod === '3'}
                            onChange={() => handlePaymentMethodChange('3')}/>가상계좌</label>
                            <label><input type="radio" value='4' name='paymentMethod' checked={selectedPaymentMethod === '4'}
                            onChange={() => handlePaymentMethodChange('4')}/>휴대폰결제</label>
                            <label><input type="radio" value='5' name='paymentMethod' checked={selectedPaymentMethod === '5'}
                            onChange={() => handlePaymentMethodChange('5')}/>신용/체크카드</label>
                        </form>
                        {selectedPaymentMethod === '1' && (
                                <>
                                    <div className="vertical_line"/>
                                    <div className="drawer_pay_method">
                                        <div className="drawer_pay_container">
                                            <div className='drawer_pay_method_title'>서랍페이</div>
                                            <div className='drawer_pay_method_1'>
                                                <div className='drawer_pay_method_1_1'>현재잔액</div>
                                                <div className='drawer_pay_method_1_2'>2,600,000원</div>
                                            </div>
                                            <div className='drawer_pay_method_2'>
                                                <div className='drawer_pay_method_2_1'>충전머니</div>
                                                <div className='drawer_pay_method_2_2'>0원</div>
                                            </div>
                                            <div className='drawer_pay_method_3'>
                                                <div className='drawer_pay_method_3_1'><img src="/pic/icon_pic/kb_logo.png" alt="" className='kb_logo'/>국민 123***-**-******</div>
                                                <div className='drawer_pay_method_3_2'>부족한 금액 자동 충전(최소 충전 1만원 이상)</div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                        )}
                    </div>
                    <Link to='/paycomplete' className='purchase_btn'>구매하기</Link>
                </div>
            </div>
        </div>
        )}
        </>
    );
};

export default Payment;