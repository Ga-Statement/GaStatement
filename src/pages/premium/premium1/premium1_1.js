import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CiClock2 } from "react-icons/ci";
import { useCookies } from 'react-cookie';
import axios from 'axios';
import './premium1_1.css';

const Premium1_1 = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date('2023-12-20T23:59:59'));

    const timeDiff = endTime.getTime() - currentTime.getTime();
    const secondsRemaining = Math.floor(timeDiff / 1000);

    const days = Math.floor(secondsRemaining / (3600 * 24));
    const hours = Math.floor((secondsRemaining % (3600 * 24)) / 3600);
    const minutes = Math.floor((secondsRemaining % 3600) / 60);
    const seconds = secondsRemaining % 60;

    const initialValue = 450000;
    const decrementRate = initialValue * 0.01;
    const interval = 2000;
    const restartIntervalTime = 10000;

    const [ pdData, setPdData ] = useState({});

    // localStorage에서 값을 불러와서 초기 상태를 설정
    const storedCount = localStorage.getItem('count_1');
    const [count_1, setCount_1] = useState(storedCount ? parseFloat(storedCount) : initialValue);

    const intervalIdRef = React.useRef(null);
    const timerRef = React.useRef(null);

    const myInfoRef = useRef();
    const [cookies, setCookie] = useCookies(["token"]);
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        const getToken = cookies.token;
        if (getToken) {
            setIsLogin(true);
        }
    }, [cookies]);

    useEffect(() => {
        intervalIdRef.current = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalIdRef.current);
    }, []);

    useEffect(() => {
        timerRef.current = setInterval(() => {
            setCount_1((prevCount) => Math.max(prevCount - decrementRate, 0));
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
                setCount_1((prevCount) => Math.max(prevCount - decrementRate, 0));
            }, interval);
        }, restartIntervalTime);
    };

    useEffect(() => {
        // 페이지가 로드될 때 localStorage에 초기값을 저장
        localStorage.setItem('count_1', count_1);
    }, [count_1]);

    const handleResetClick = () => {
        setCount_1(initialValue);
        };

    // useEffect(() => {
    //     // count_2가 0이 되면 자동으로 초기값으로 리셋
    //     if (count_2 === 0) {
    //         handleResetClick();
    //     }
    // }, [count_2]);

    useEffect(() => {
        // count_2가 0이 되면 정지
        if (count_1 <= 200000) {
            
            clearInterval(intervalIdRef.current);
            clearInterval(timerRef.current);
        }
    }, [count_1]);

    const productData = async () => {
        const { data } = await axios.get(
            `http://localhost:3000/product/1`
        );
        setPdData(data);
    }

    useEffect(() => {
        productData();
    }, []);
    
    return(
        <div className='premium1_1_Container'>
            <div className="premium1_1_Wrapper">
                {/* <CiClock2 className="premium1_1_CiClock2" color="white" size="30"/> */}
                <div className='premium1_1_originalPrice'>{pdData.pdMaxPrice}</div>
                <div className="premium1_1_currentPrice">{count_1?.toLocaleString()}</div>
                {/* <div className="premium1_1_Info_name">{pdData.pdName}</div> */}
                <div className="premium1_1_Info">
                    <div className="premium1_1_Info_1">
                        <div className="premium1_1_Info_1_1">
                            <div className="premium1_1_Info_1_1_brand">Time</div>
                            <div className="premium1_1_Info_1_1_brands">{`${days}일 ${hours}시간 ${minutes}분 ${seconds}초`}</div>
                        </div>
                        <div className="premium1_1_Info_1_2">
                            <div className="premium1_1_Info_1_2_year">Brand</div>
                            <div className="premium1_1_Info_1_2_years">{pdData.pdBrand}</div>
                        </div>
                        <div className="premium1_1_Info_1_3">
                            <div className="premium1_1_Info_1_3_time">Year</div>
                            <div className="premium1_1_Info_1_3_times">{pdData.pdYears}</div>
                        </div>
                    </div>
                    <div className="premium1_1_Info_2">
                        <img src={pdData.pdImage} alt="" />
                    </div>
                    <div className="premium1_1_Info_3">
                        <div className="premium1_1_Info_3_1">
                            <div className="premium1_1_Info_3_1_name">담당전문가</div>
                            <div className="premium1_1_Info_3_1_specialist">{pdData.pdMaster}</div>
                        </div>
                        <div className="premium1_1_Info_3_2">
                            <div className="premium1_1_Info_3_2_status">상품 상태</div>
                            <div className="premium1_1_Info_3_2_prodStatus">{pdData.pdState}</div>
                        </div>
                        <div className="premium1_1_Info_3_3">
                            {!isLogin ? <div className="premium1_1_BuyBtn" onClick={() => alert("로그인을 해주세요")}>구매하기<img src="/pic/icon_pic/buyIcon.webp" alt="" className='premium1_1_buyIcon'/></div>
                            : <Link to='/payment1' className="premium1_1_BuyBtn">구매하기<img src="/pic/icon_pic/buyIcon.webp" alt="" className='premium1_1_buyIcon'/></Link>}
                            <div className="premium1_1_BagAdd" onClick={() => (!isLogin ? alert("로그인을 해주세요") : handleButtonClick())}>장바구니<img src="/pic/icon_pic/basket.png" alt="" className='premium1_1_basketIcon'/></div>
                        </div>
                    </div>
                </div>
                <div className="premium1_1_BuyBag">
                    {/* <button onClick={handleResetClick}>값 초기화</button> */}
                </div>
            </div>
        </div>
    );
};

export default Premium1_1;