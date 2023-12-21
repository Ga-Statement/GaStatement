/* 
-------------------------------------------------------------------------
	파일명		: cartpaycomplete.js
	설명		: 결제 완료 페이지 - 장바구니
	담당자		: 박효연
	개발날짜	: 2023/12/18
-------------------------------------------------------------------------
*/

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoadingPayComplete from '../components/loading2';
import { IoMdCloseCircle } from "react-icons/io";
import './cartpaycomplete.css';

const CartPayComplete = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [formattedDate, setFormattedDate] = useState('');
    const [formattedDateTime, setFormattedDateTime] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
      const currentDate = new Date();
  
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const day = String(currentDate.getDate()).padStart(2, '0');
      const hours = String(currentDate.getHours()).padStart(2, '0');
      const minutes = String(currentDate.getMinutes()).padStart(2, '0');
  
      const formattedOrderDate = `${year}-${month}-${day} ${hours}:${minutes}`;
  
      setFormattedDateTime(formattedOrderDate);
    }, []);

    useEffect(() => {
        const currentDate = new Date();
    
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');

        const randomNumbers = Array.from({ length: 3 }, () => Math.floor(Math.random() * 10));

        const randomString = randomNumbers.join('');

        const formattedOrderNumber = `${year}${month}${day}${randomString}`;
        
        setFormattedDate(formattedOrderNumber);
      }, []);


    return(
        <>
        {isLoading ? (<div className="loadingContainer"><LoadingPayComplete /></div>) : 
        (
            <div className='cart_pay_complete_container'>
            <div className="cart_pay_complete_wrapper_left">
                <div className="cart_pay_complete_wrapper_left">
                    <img src="/pic/shop_pic/LP3.webp" alt="상품 이미지" className='cart_pay_complete_product_img'/>
                    <img src="/pic/shop_pic/teacup2.webp" alt="상품 이미지" className='cart_pay_complete_product_img2'/>
                </div>
            </div>
            <div className="cart_pay_complete_wrapper_right">
                <div className="cart_pay_complete_wrapper_right_box">
                    <div className="cart_pay_complete_wrapper">
                        <div className="cart_pay_complete_title">주문완료</div>
                        <div className="cart_pay_complete_number">주문번호 : "{formattedDate}"</div>
                        <div className="cart_pay_complete_desc">결제가 완료되었습니다.</div>
                    </div>
                    <div className="cart_pay_account_info">
                        <div className="cart_pay_account_info_1">기억명세서를 이용해주셔서 감사합니다.</div>
                            <div className='cart_pay_account_info_2'>
                                <div className="cart_pay_account_info_2_1">
                                    <div className="cart_pay_account_info_2_1_1">결제수단</div>
                                    <div className="cart_pay_account_info_2_1_2">결제금액</div>
                                    <div className="cart_pay_account_info_2_1_3">결제일시</div>
                                </div>
                                <div className="vr"/>
                                <div className="cart_pay_account_info_2_2">
                                    <div className="cart_pay_account_info_2_2_1">서랍페이</div>
                                    <div className="cart_pay_account_info_2_2_2">407,000원</div>
                                    <div className="cart_pay_account_info_2_2_3">{formattedDateTime}</div>
                                </div>
                            </div>
                    </div>
                    <div className="cart_pay_complete_desc2">주문내역은 나의 이야기 - 나의 명세서에서 확인하실 수 있습니다.</div>
                    <Link to='/main' className="cart_pay_gotoMain"><IoMdCloseCircle color="gray" size='30px'/></Link>
                </div>
            </div>                
            </div>
        )}
        </>
    );
};

export default CartPayComplete;