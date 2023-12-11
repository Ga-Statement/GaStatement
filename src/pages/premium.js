/* 
-------------------------------------------------------------------------
	파일명		: premium.js
	설명		: 프리미엄 패키지 상품 페이지
	담당자		: 박효연
	개발날짜	: 2023/12/10
-------------------------------------------------------------------------
*/

import React, { useState, useEffect } from 'react';
import './premium.css';
import { Link } from 'react-router-dom';

const Premium = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date('2023-12-31T23:59:59')); // 종료 날짜 및 시간 설정

    const timeDiff = endTime.getTime() - currentTime.getTime();
    const secondsRemaining = Math.floor(timeDiff / 1000);

    const days = Math.floor(secondsRemaining / (3600 * 24));
    const hours = Math.floor((secondsRemaining % (3600 * 24)) / 3600);
    const minutes = Math.floor((secondsRemaining % 3600) / 60);
    const seconds = secondsRemaining % 60;
    
    const [randomNumber, setRandomNumber] = useState(null);
    const [isRunning, setIsRunning] = useState(true);


    useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentTime(new Date());
        }, 1000); // 1초마다 남은 시간 업데이트

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
          const newRandomNumber = Math.floor(Math.random() * 1000000);
          setRandomNumber(newRandomNumber);
        }, 80); // 랜덤 숫자 업데이트
    
        setTimeout(() => {
          clearInterval(intervalId);
          setIsRunning(false);
    
          setRandomNumber(120000); // 마지막에 나올 숫자
        }, 3000); // 2초동안 랜덤 숫자 나오도록
    
        return () => clearInterval(intervalId);
      }, []);
    
    return(
        <div className='premiumContainer'>
        <div className="premiumWrapper">
            <div className="currentPrice">현재 가격 : {randomNumber?.toLocaleString()}원</div>
            <div className="premiumInfo">
                <div className="premiumInfo_1">
                    <div className="premiumInfo_1_1">상품명</div>
                    <div className="premiumInfo_1_2">브랜드</div>
                    <div className="premiumInfo_1_3">생산년도</div>
                </div>
                <div className="premiumInfo_2"><img src="/pic/shop_pic/canon.png" alt="" /></div>
                <div className="premiumInfo_3">
                    <div className="premiumInfo_3_1">{`${days}일 ${hours}시간 ${minutes}분 ${seconds}초`}</div>
                    <div className="premiumInfo_3_2">상품 상태</div>
                    <div className="premiumInfo_3_3">담당 전문가</div>
                </div>
            </div>
            <div className="premiumBuyBag">
                <div className="premiumBagAdd">장바구니</div>
                <Link to='/payment'className="premiumBuyBtn">구매하기</Link>
            </div>
        </div>
        </div>
    )
}

export default Premium;