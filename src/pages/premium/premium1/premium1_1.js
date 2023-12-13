import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CiClock2 } from "react-icons/ci";
import './premium1_1.css';

const Premium1_1 = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date('2023-12-26T23:59:59')); // 종료 날짜 및 시간 설정

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
    
          setRandomNumber(523000); // 마지막에 나올 숫자
        }, 3000); // 2초동안 랜덤 숫자 나오도록
    
        return () => clearInterval(intervalId);
      }, []);
    
    return(
        <div className='premium1_1_Container'>
            <div className="premium1_1_Wrapper">
                <CiClock2 className="premium1_1_CiClock2" color="white" size="30"/>
                <div className='premium1_1_originalPrice'>468,000</div>
                <div className="premium1_1_currentPrice">{randomNumber?.toLocaleString()}</div>
                <div className="premium1_1_Info">
                    <div className="premium1_1_Info_1">
                        <div className="premium1_1_Info_1_1">
                            <div className="premium1_1_Info_1_1_brand">Brand</div>
                            <div className="premium1_1_Info_1_1_name">Canon</div>
                        </div>
                        <div className="premium1_1_Info_1_2">
                            <div className="premium1_1_Info_1_2_year">Year</div>
                            <div className="premium1_1_Info_1_2_years">1996</div>
                        </div>
                        <div className="premium1_1_Info_1_3">
                            <div className="premium1_1_Info_1_3_time">Time</div>
                            <div className="premium1_1_Info_1_3_times">{`${days}일 ${hours}시간 ${minutes}분 ${seconds}초`}</div>
                        </div>
                    </div>
                    <div className="premium1_1_Info_2">
                        <img src="/pic/shop_pic/canon2.png" alt="" />
                    </div>
                    <div className="premium1_1_Info_3">
                        <div className="premium1_1_Info_3_1">
                            <div className="premium1_1_Info_3_1_name">담당전문가</div>
                            <div className="premium1_1_Info_3_1_specialist">박현응</div>
                        </div>
                        <div className="premium1_1_Info_3_2">
                            <div className="premium1_1_Info_3_2_status">상품 상태</div>
                            <div className="premium1_1_Info_3_2_prodStatus">상</div>
                        </div>
                        <div className="premium1_1_Info_3_3">
                            <Link to='/payment'className="premium1_1_BuyBtn">구입하기<img src="/pic/icon_pic/buyIcon.png" alt="" className='premium1_1_buyIcon'/></Link>
                            <div className="premium1_1_BagAdd">장바구니<img src="/pic/icon_pic/basket.png" alt="" className='premium1_1_basketIcon'/></div>
                        </div>
                    </div>
                </div>
                <div className="premium1_1_BuyBag">
                    
                </div>
            </div>
        </div>
    );
};

export default Premium1_1;