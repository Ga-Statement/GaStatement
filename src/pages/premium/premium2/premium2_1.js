import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CiClock2 } from "react-icons/ci";
import axios from 'axios';
import './premium2_1.css';

const Premium2_1 = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date('2023-12-20T23:59:59'));

    const timeDiff = endTime.getTime() - currentTime.getTime();
    const secondsRemaining = Math.floor(timeDiff / 1000);

    const days = Math.floor(secondsRemaining / (3600 * 24));
    const hours = Math.floor((secondsRemaining % (3600 * 24)) / 3600);
    const minutes = Math.floor((secondsRemaining % 3600) / 60);
    const seconds = secondsRemaining % 60;

    const initialValue = 280000;
    const decrementRate = initialValue * 0.01;
    const interval = 2000;
    const restartIntervalTime = 10000;

    const [ pdData, setPdData ] = useState({});

    // localStorage에서 값을 불러와서 초기 상태를 설정
    const storedCount = localStorage.getItem('count_2');
    const [count_2, setCount_2] = useState(storedCount ? parseFloat(storedCount) : initialValue);

    const intervalIdRef = React.useRef(null);
    const timerRef = React.useRef(null);

    useEffect(() => {
        intervalIdRef.current = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalIdRef.current);
    }, []);

    useEffect(() => {
        timerRef.current = setInterval(() => {
            setCount_2((prevCount) => Math.max(prevCount - decrementRate, 0));
        }, interval);

        return () => clearInterval(timerRef.current);
    }, [decrementRate, interval]);

    const handleButtonClick = () => {
        clearInterval(intervalIdRef.current);
        clearInterval(timerRef.current);
        alert('상품이 장바구니에 담겼습니다.');

        setTimeout(() => {
            intervalIdRef.current = setInterval(() => {
                setCurrentTime(new Date());
            }, 1000);

            timerRef.current = setInterval(() => {
                setCount_2((prevCount) => Math.max(prevCount - decrementRate, 0));
            }, interval);
        }, restartIntervalTime);
    };

    useEffect(() => {
        // 페이지가 로드될 때 localStorage에 초기값을 저장
        localStorage.setItem('count_2', count_2);
    }, [count_2]);

    const handleResetClick = () => {
        setCount_2(initialValue);
        };

 
    const productData = async () => {
        const { data } = await axios.get(
            `http://localhost:3000/product/2`
        );
        setPdData(data);
    }

    useEffect(() => {
        productData();
    }, []);
    
    return(
        <div className='premium2_1_Container'>
            <div className="premium2_1_Wrapper">
                <CiClock2 className="CiClock2" color="gray" size="50"/>
                <div className='premium2_1_originalPrice'>{pdData.pdMaxPrice}</div>
                <div className="premium2_1_currentPrice">{count_2?.toLocaleString()}</div>
                {/* <div className="premium2_1_Info_name">{pdData.pdName}</div> */}
                <div className="premium2_1_Info">
                    <div className="premium2_1_Info_1">
                        <div className="premium2_1_Info_1_1">
                            <div className="premium2_1_Info_1_1_brand">Time</div>
                            <div className="premium2_1_Info_1_1_brands">{`${days}일 ${hours}시간 ${minutes}분 ${seconds}초`}</div>
                        </div>
                        <div className="premium2_1_Info_1_2">
                            <div className="premium2_1_Info_1_2_year">Brand</div>
                            <div className="premium2_1_Info_1_2_years">{pdData.pdBrand}</div>
                        </div>
                        <div className="premium2_1_Info_1_3">
                            <div className="premium2_1_Info_1_3_time">Year</div>
                            <div className="premium2_1_Info_1_3_times">{pdData.pdYears}</div>
                        </div>
                    </div>
                    <div className="premium2_1_Info_2">
                        <img src={pdData.pdImage} alt="" className='premium2_1_Info_2_img'/>
                        <img src="/pic/shop_pic/teacup_logo.webp" alt="" className='premium2_1_Info_2_logo'/>
                    </div>
                    <div className="premium2_1_Info_3">
                        <div className="premium2_1_Info_3_1">
                            <div className="premium2_1_Info_3_1_name">{pdData.pdMaster}</div>
                            <div className="premium2_1_Info_3_1_specialist">담당전문가</div>
                        </div>
                        <div className="premium2_1_Info_3_2">
                            <div className="premium2_1_Info_3_2_status">{pdData.pdState}</div>
                            <div className="premium2_1_Info_3_2_prodStatus">제품상태</div>
                        </div>
                        <div className="premium2_1_Info_3_3">
                            <Link to='/payment2'className="premium2_1_BuyBtn">구입하기<img src="/pic/icon_pic/buyIcon.webp" alt="" className='premium2_1_buyIcon'/></Link>
                            <div className="premium2_1_BagAdd" onClick={handleButtonClick}>장바구니<img src="/pic/icon_pic/basket.png" alt="" className='premium2_1_basketIcon'/></div>
                        </div>
                    </div>
                </div>
                <div className="premium2_1_BuyBag">
                    {/* <button onClick={handleResetClick}>값 초기화</button> */}
                </div>
            </div>
        </div>
    );
};

export default Premium2_1;