/* 
-------------------------------------------------------------------------
	파일명		: standard2.js
	설명		: 기본 패키지 상품 페이지 2
	담당자		: 박효연
	개발날짜	: 2023/12/12
-------------------------------------------------------------------------
*/

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CiClock2 } from "react-icons/ci";
import axios from 'axios';
import './standard2.css';

const Standard2 = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date('2023-12-25T23:59:59')); // 종료 날짜 및 시간 설정

    const timeDiff = endTime.getTime() - currentTime.getTime();
    const secondsRemaining = Math.floor(timeDiff / 1000);

    const days = Math.floor(secondsRemaining / (3600 * 24));
    const hours = Math.floor((secondsRemaining % (3600 * 24)) / 3600);
    const minutes = Math.floor((secondsRemaining % 3600) / 60);
    const seconds = secondsRemaining % 60;
    
    const [randomNumber, setRandomNumber] = useState(null);
    const [isRunning, setIsRunning] = useState(true);

    const [ pdData, setPdData ] = useState({});

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
    
          setRandomNumber(111600); // 마지막에 나올 숫자
        }, 3000); // 2초동안 랜덤 숫자 나오도록
    
        return () => clearInterval(intervalId);
    }, []);

    const productData = async () => {
        const { data } = await axios.get(
            `http://localhost:3000/product/4`
        );
        setPdData(data);
    }

    useEffect(() => {
        productData();
    }, []);
    
    return(
        <div className='standard2_Container'>
            <div className="standard2_Wrapper">
                <CiClock2 className="standard2_CiClock2" color="gray" size="50"/>
                <div className='standard2_originalPrice'>{pdData.pdMaxPrice}</div>
                <div className="standard2_currentPrice">{randomNumber?.toLocaleString()}</div>
                {/* <div className="standard2_Info_name">{pdData.pdName}</div> */}
                <div className="standard2_Info">
                    <div className="standard2_Info_1">
                        <div className="standard2_Info_1_1">
                            <div className="standard2_Info_1_1_brand">Brand</div>
                            <div className="standard2_Info_1_1_brands">{pdData.pdBrand}</div>
                        </div>
                        <div className="standard2_Info_1_2">
                            <div className="standard2_Info_1_2_year">Year</div>
                            <div className="standard2_Info_1_2_years">{pdData.pdYears}</div>
                        </div>
                        <div className="standard2_Info_1_3">
                            <div className="standard2_Info_1_3_time">Time</div>
                            <div className="standard2_Info_1_3_times">{`${days}일 ${hours}시간 ${minutes}분 ${seconds}초`}</div>
                        </div>
                    </div>
                    <div className="standard2_Info_2">
                        <img src={pdData.pdImage} alt="" className='standard2_Info_2_img'/>
                        <img src="/pic/shop_pic/lp_logo.webp" alt="" className='standard2_Info_2_logo'/>
                    </div>
                    <div className="standard2_Info_3">
                        <div className="standard2_Info_3_1">
                            <div className="standard2_Info_3_1_name">{pdData.pdMaster}</div>
                            <div className="standard2_Info_3_1_specialist">담당전문가</div>
                        </div>
                        <div className="standard2_Info_3_2">
                            <div className="standard2_Info_3_2_status">{pdData.pdState}</div>
                            <div className="standard2_Info_3_2_prodStatus">제품상태</div>
                        </div>
                        <div className="standard2_Info_3_3">
                            <Link to='/payment'className="standard2_BuyBtn">구입하기<img src="/pic/icon_pic/buyIcon.png" alt="" className='standard2_buyIcon'/></Link>
                            <div className="standard2_BagAdd">장바구니<img src="/pic/icon_pic/basket.png" alt="" className='standard2_basketIcon'/></div>
                        </div>
                    </div>
                </div>
                <div className="standard2_BuyBag">
                    
                </div>
            </div>
        </div>
    );
};

export default Standard2;