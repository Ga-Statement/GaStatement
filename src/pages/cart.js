/* 
-------------------------------------------------------------------------
	파일명		: cart.js
	설명		: 장바구니 페이지
	담당자		: 박효연
	개발날짜	: 2023/12/15
-------------------------------------------------------------------------
*/

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/loading';
import './cart.css';
import { FaRegUser } from "react-icons/fa";
import { MdOutlinePhoneAndroid, MdOutlineLocalPostOffice } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { PiNoteBold } from "react-icons/pi";

const Cart = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
    
    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const [isChecked3, setIsChecked3] = useState(false);
    const [isChecked4, setIsChecked4] = useState(false);
    const [isChecked5, setIsChecked5] = useState(false);
    const [isChecked6, setIsChecked6] = useState(false);


    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handlePaymentMethodChange = (value) => {
        setSelectedPaymentMethod(value);
    };

    const handleImageClick = (checkboxSetter) => {
        checkboxSetter((prev) => !prev);
    };

    return(
        <>
        {isLoading ? (<div className="loadingContainer"><Loading /></div>) : 
        (
        <div className='payment_container'>
            <div className="payment_wrapper">
                <div className="payment_wrapper_left_2">
                    <div className="payment_wrapper_left_box">
                        <div className="payment_prod_list_1">
                            <div className="payment_prod_1">
                                <img src="/pic/shop_pic/LP3.webp" alt="" className='payment_prod_1_img' onClick={() => handleImageClick(setIsChecked1, isChecked1)}/>
                                <input type="checkbox" style={{zoom:'1.5'}} className='payment_prod_1_check' checked={isChecked1} onChange={() => handleImageClick(setIsChecked1, isChecked1)}/>
                            </div>
                            <div className="payment_prod_2">
                                <img src="/pic/shop_pic/teacup2.webp" alt="" className='payment_prod_2_img' onClick={() => handleImageClick(setIsChecked2, isChecked2)}/>
                                <input type="checkbox" style={{zoom:'1.5'}} className='payment_prod_2_check' checked={isChecked2} onChange={() => handleImageClick(setIsChecked2, isChecked2)}/>
                            </div>
                            {/* <div className="payment_prod_3">
                                <img src="/pic/shop_pic/LP3.webp" alt="" className='payment_prod_3_img' onClick={() => handleImageClick(setIsChecked3, isChecked3)}/>
                                <input type="checkbox" style={{zoom:'1.4'}} className='payment_prod_3_check' checked={isChecked3} onChange={() => handleImageClick(setIsChecked3, isChecked3)}/>
                            </div> */}
                        </div>
                        {/* <div className="payment_prod_list_2">
                            <div className="payment_prod_4">
                                <img src="/pic/shop_pic/teacup2.webp" alt="" className='payment_prod_4_img' onClick={() => handleImageClick(setIsChecked4, isChecked4)}/>
                                <input type="checkbox" style={{zoom:'1.4'}} className='payment_prod_4_check' checked={isChecked4} onChange={() => handleImageClick(setIsChecked4, isChecked4)}/>
                            </div>
                            <div className="payment_prod_5">
                                <img src="/pic/shop_pic/book2.webp" alt="" className='payment_prod_5_img'onClick={() => handleImageClick(setIsChecked5, isChecked5)}/>
                                <input type="checkbox" style={{zoom:'1.4'}} className='payment_prod_5_check' checked={isChecked5} onChange={() => handleImageClick(setIsChecked5, isChecked5)}/>
                            </div>
                            <div className="payment_prod_6">
                                <img src="/pic/shop_pic/LP3.webp" alt="" className='payment_prod_6_img' onClick={() => handleImageClick(setIsChecked6, isChecked6)}/>
                                <input type="checkbox" style={{zoom:'1.4'}} className='payment_prod_6_check' checked={isChecked6} onChange={() => handleImageClick(setIsChecked6, isChecked6)}/>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="payment_wrapper_right">
                    <div className="payment_wrapper_right_box">
                        <div className="payment_user_info_title">주문자 정보</div>
                        <div className="payment_user_info">
                            <div className="payment_user_info__1">
                                <div className="payment_user_info_1_name">
                                    <img src='/pic/icon_pic/name.webp' className='payment_user_info_1_icon'/>
                                    이름
                                </div>
                                {/* <div className="payment_user_info_1_edit">수정</div> */}
                            </div>
                            <div className="bottomLine"/>
                            <div className="payment_user_info__2">
                                <div className="payment_user_info_2_phone">
                                    <img src='/pic/icon_pic/phone.webp' className='payment_user_info_2_icon'/>
                                    010-1234-5678
                                </div>
                                {/* <div className="payment_user_info_2_edit">수정</div> */}
                            </div>
                            <div className="bottomLine"/>
                            <div className="payment_user_info__3">
                                <div className="payment_user_info_3_email">
                                    <img src='/pic/icon_pic/mail.webp' className='payment_user_info_3_icon'/>
                                    abc123@naver.com
                                </div>
                                {/* <div className="payment_user_info_3_edit">수정</div> */}
                            </div>
                            <div className="bottomLine"/>
                            <div className="payment_user_info__4">
                                <div className="payment_user_info_4_address">
                                    <img src='/pic/icon_pic/address.webp' className='payment_user_info_4_icon'/>
                                    배송지 주소
                                </div>
                                {/* <div className="payment_user_info_4_edit">수정</div> */}
                            </div>
                            <div className="bottomLine"/>
                            <div className="payment_user_info__5">
                                <div className="payment_user_info_5_memo">
                                    <PiNoteBold size='30' className='payment_user_info_5_icon'/>
                                    <div className="delivery_memo_title">배송 메모</div>
                                    <form action="#" className='delivery_memo_select_form'>
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
                                {/* <div className="payment_user_info_5_edit">수정</div> */}
                            </div>
                            <div className="bottomLine"/>
                        </div>
                        <div className="payment_amount_title">최종 결제 금액</div>
                        <div className="payment_amount">
                            <div className="payment_amount_1">
                                <div className="payment_amount_1_1">상품 가격</div>
                                <div className="payment_amount_1_2">500,000원</div>
                            </div>
                            <div className="payment_amount__2">
                                <div className="payment_amount_2_1">배송비</div>
                                <div className="payment_amount_2_2">3,000원</div>
                            </div>
                            <div className="bottomLine_2"/>
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
                        <Link to='/cartpaycomplete' className='purchase_btn'>구매하기</Link>
                    </div>
                </div>
            </div>
        </div>
        )}
        </>
    );
};

export default Cart;