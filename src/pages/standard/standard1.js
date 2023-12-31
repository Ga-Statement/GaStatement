/* 
-------------------------------------------------------------------------
	파일명		: standard1.js
	설명		: 기본 패키지 상품 페이지 1
	담당자		: 박효연
	개발날짜	: 2023/12/12
-------------------------------------------------------------------------
*/

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";
import { useCookies } from 'react-cookie';
import axios from 'axios';
import './standard1.css';

const Standard1 = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date('2023-12-29T23:59:59'));

    const timeDiff = endTime.getTime() - currentTime.getTime();
    const secondsRemaining = Math.floor(timeDiff / 1000);

    const days = Math.floor(secondsRemaining / (3600 * 24));
    const hours = Math.floor((secondsRemaining % (3600 * 24)) / 3600);
    const minutes = Math.floor((secondsRemaining % 3600) / 60);
    const seconds = secondsRemaining % 60;

    const initialValue = 76000;
    const decrementRate = initialValue * 0.01;
    const interval = 2000;
    const restartIntervalTime = 10000;

    const [ pdData, setPdData ] = useState({});

    // localStorage에서 값을 불러와서 초기 상태를 설정
    const storedCount = localStorage.getItem('count_3');
    const [count_3, setCount_3] = useState(storedCount ? parseFloat(storedCount) : initialValue);

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
            setCount_3((prevCount) => Math.max(prevCount - decrementRate, 0));
        }, interval);

        return () => clearInterval(timerRef.current);
    }, [decrementRate, interval]);

    const handleButtonClick = () => {
        clearInterval(intervalIdRef.current);
        clearInterval(timerRef.current);
        // alert('상품이 장바구니에 담겼습니다.');
        Swal.fire({
            icon: "success",
            title: '상품이 장바구니에 담겼습니다.',
            showConfirmButton: false,
            timer: 1500,
            confirmButtonText: '확인',
            customClass: {
                popup: 'custom-swal-popup', // 팝업 창
                title: 'custom-swal-title', // 제목
                icon: 'custom-swal-icon' // 아이콘
            }
          });
        setTimeout(() => {
            intervalIdRef.current = setInterval(() => {
                setCurrentTime(new Date());
            }, 1000);

            timerRef.current = setInterval(() => {
                setCount_3((prevCount) => Math.max(prevCount - decrementRate, 0));
            }, interval);
        }, restartIntervalTime);
    };

    useEffect(() => {
        // 페이지가 로드될 때 localStorage에 초기값을 저장
        localStorage.setItem('count_3', count_3);
    }, [count_3]);

    const handleResetClick = () => {
    setCount_3(initialValue);
    };

    useEffect(() => {
        // count_3이 0이 되면 자동으로 초기값으로 리셋
        if (count_3 === 0) {
            handleResetClick();
        }
    }, [count_3]);

    // useEffect(() => {
    //     // count_3이 40000 이하가 되면 정지
    //     if (count_3 <= 40000) {
            
    //         clearInterval(intervalIdRef.current);
    //         clearInterval(timerRef.current);
    //     }
    // }, [count_3]);

    const productData = async () => {
        const { data } = await axios.get(
            `http://${process.env.REACT_APP_HJ_TEST_IP}:3000/product/3`
        );
        setPdData(data);
    }

    useEffect(() => {
        productData();
    }, []);
    
    return(
        <div className='standard1_Container'>
            <div className="standard1_Wrapper">
                {/* <CiClock2 className="standard1_CiClock2" color="gray" size="50"/> */}
                <div className='standard1_originalPrice'>{pdData.pdMaxPrice}</div>
                <div className="standard1_currentPrice">{count_3?.toLocaleString()}</div>
                {/* <div className="standard1_Info_name">{pdData.pdName}</div> */}
                <div className="standard1_Info">
                    <div className="standard1_Info_1">
                        <div className="standard1_Info_1_1">
                            <div className="standard1_Info_1_1_brand">Time</div>
                            <div className="standard1_Info_1_1_brands">{`${days}일 ${hours}시간 ${minutes}분 ${seconds}초`}</div>
                        </div>
                        <div className="standard1_Info_1_2">
                            <div className="standard1_Info_1_2_year">Brand</div>
                            <div className="standard1_Info_1_2_years">{pdData.pdBrand}</div>
                        </div>
                        <div className="standard1_Info_1_3">
                            <div className="standard1_Info_1_3_time">Year</div>
                            <div className="standard1_Info_1_3_times">{pdData.pdYears}</div>
                        </div>
                    </div>
                    <div className="standard1_Info_2">
                        <img src={pdData.pdImage} alt="" className='standard1_Info_2_img'/>
                        {/* <img src="/pic/shop_pic/book_logo.webp" alt="" className='standard1_Info_2_logo'/> */}
                    </div>
                    <div className="standard1_Info_3">
                        <div className="standard1_Info_3_1">
                            <div className="standard1_Info_3_1_name">{pdData.pdMaster}</div>
                            <div className="standard1_Info_3_1_specialist">Expert</div>
                        </div>
                        {/* <div className="standard1_Info_3_1_desc">
                                현재 구하고 싶어도 구할 수 없는<br/>
                                1300년대 페트라르카 작가<br/>
                                대표작 내면의열정<br/>
                        </div> */}
                        <div className="standard1_Info_3_2">
                            <div className="standard1_Info_3_2_status">{pdData.pdState}</div>
                            <div className="standard1_Info_3_2_prodStatus">Condition</div>
                        </div>
                        <div className="standard1_Info_3_3">
                            {!isLogin ? <div className="standard1_BuyBtn" onClick={() => 
                            // alert("로그인을 해주세요")
                            Swal.fire({
                                title: "로그인 해주세요!",
                                icon: "info",
                                confirmButtonText: '확인',
                                customClass: {
                                    popup: 'custom-swal-popup', // 팝업 창
                                    title: 'custom-swal-title', // 제목
                                    icon: 'custom-swal-icon' // 아이콘
                                }
                              })
                        }><img src="/pic/icon_pic/buyIcon.png" alt="" className='standard1_buyIcon'/>구매하기</div>
                            : <Link to='/payment3'className="standard1_BuyBtn"><img src="/pic/icon_pic/buyIcon.png" alt="" className='standard1_buyIcon'/>구매하기</Link>}
                            <div className="standard1_BagAdd" onClick={() => (!isLogin ? 
                                // alert("로그인을 해주세요") 
                                Swal.fire({
                                    title: "로그인 해주세요!",
                                    icon: "info",
                                    confirmButtonText: '확인',
                                    customClass: {
                                        popup: 'custom-swal-popup', // 팝업 창
                                        title: 'custom-swal-title', // 제목
                                        icon: 'custom-swal-icon' // 아이콘
                                    }
                                  })
                                : handleButtonClick())}><img src="/pic/icon_pic/basket.png" alt="" className='standard1_basketIcon'/>장바구니</div>
                        </div>
                    </div>
                </div>
                <div className="standard1_BuyBag">
                    {/* <button onClick={handleResetClick}>값 초기화</button> */}
                </div>
            </div>
        </div>
    );
};

export default Standard1;