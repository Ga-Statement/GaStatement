/* 
-------------------------------------------------------------------------
	파일명		: mystory.js
	설명		: 나의 이야기
	담당자		: 박효연
	개발날짜	: 2023/12/09
-------------------------------------------------------------------------
*/

import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaToggleOff } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import './mystory.css';

const MyStory = forwardRef(({ closeMyStory }, ref) => {
    const [activeTab, setActiveTab] = useState('myInfo');

    const closeInfo = () => {
        closeMyStory();
        setActiveTab('myInfo');
    }

    const setMyInfo = () => {
        setActiveTab('myInfo');
    }

    useImperativeHandle(ref, () => ({
        setMyInfo
    }));

    return (
        <div className="my_story">
            <div className='myStoryTitle'>
                <div className={`myInfoTitle ${activeTab === 'myInfo' ? '' : 'none'}`} onClick={() => setActiveTab('myInfo')}>
                    내 정보
                </div>
                <div className="borderR"></div>
                <div className={`specsTitle ${activeTab === 'specs' ? '' : 'none'}`}  onClick={() => setActiveTab('specs')}>
                    나의 명세서
                </div>
                <div className="borderR"></div>
                <div className={`shoppingBag ${activeTab === 'addToBag' ? '' : 'none'}`}  onClick={() => setActiveTab('addToBag')}>
                    장바구니
                </div>
                <div className='closeMystoryBtn' onClick={closeInfo}><img src="/pic/icon_pic/closeBtn.png" alt="" /></div>
            </div>
            {/* 내 정보 */}
            <div className={`myInfo ${activeTab === 'myInfo' ? '' : 'close'}`}>
                <div className="basicInfoTitle">기본정보</div>
                <div className="basicInfo">
                    <div className="basicInfoContents">
                        <div className="profile">
                            <CgProfile className="profileIcon" color='rgba(161, 161, 161, 0.9)'/>
                            <div className="name">이름</div>                        
                            <div>수정</div>
                        </div>
                        <div className="emailInfo">
                            <MdOutlineEmail className="emailIcon" color='rgba(161, 161, 161, 0.9)'/>
                            <div className="emailInfo_address">이메일</div>                        
                            <div>수정</div>
                        </div>
                        <div className="phoneInfo">
                            <MdOutlinePhoneAndroid className="phoneIcon" color='rgba(161, 161, 161, 0.9)'/>
                            <div className="phoneNum">핸드폰번호</div>
                            <div>수정</div>
                        </div>
                        <div className="addressInfo">
                            <FaLocationDot className="addressIcon" color='rgba(161, 161, 161, 0.9)'/>
                            <div className="addresshome">자택 주소</div>
                            <div>수정</div>
                        </div>
                    </div>
                </div>
                <div className="promotionTitle">프로모션 정보수신 동의</div>
                <div className="promotion">
                    <div className="phoneAgree">
                        <MdOutlinePhoneAndroid className="phoneIcon" color='rgba(161, 161, 161, 0.9)'/>
                        <div>휴대폰</div>
                        <FaToggleOff className="onoffIcon" color='rgba(161, 161, 161, 0.9)'/>
                    </div>
                    <div className="emailAgree">
                        <MdOutlineEmail className="emailIcon" color='rgba(161, 161, 161, 0.9)'/>
                        <div>이메일</div>
                        <FaToggleOff className="onoffIcon" color='rgba(161, 161, 161, 0.9)'/>
                    </div>
                </div>
                <div className="alarmTitle">게시물 조치 알림 수신 동의</div>
                <div className="alarm">
                    <div className="phoneAgree">
                        <MdOutlinePhoneAndroid className="phoneIcon" color='rgba(161, 161, 161, 0.9)'/>
                        <div>휴대폰</div>
                        <FaToggleOff className="onoffIcon" color='rgba(161, 161, 161, 0.9)'/>
                    </div>
                    <div className="emailAgree">
                        <MdOutlineEmail className="emailIcon" color='rgba(161, 161, 161, 0.9)'/>
                        <div>이메일</div>
                        <FaToggleOff className="onoffIcon" color='rgba(161, 161, 161, 0.9)'/>
                    </div>
                </div>
            </div>
            {/* 나의 명세서 */}
            <div className={`specs ${activeTab === 'specs' ? '' : 'close'}`}>
                <div className='specsname'>추억의 물품 판매 신청 내역</div>
                <div className='sales'>
                    <div className='salesList'>
                        <div className='date'>날짜</div>
                        <div className='salesInfo'>
                            <div>이미지</div>
                            <div>
                                <div>물품명</div>
                                <div>희망가격</div>
                            </div>
                            <div>전문가 검수 확인중</div>
                            <div>검수중 아이콘</div>
                        </div>
                    </div>
                    <div className='salesList'>
                        <div className='date'>날짜</div>
                        <div className='salesInfo'>
                            <div>이미지</div>
                            <div>
                                <div>물품명</div>
                                <div>희망가격</div>
                            </div>
                            <div>전문가 검수 확인중</div>
                            <div>검수중 아이콘</div>
                        </div>
                    </div>
                    <div className='plus'>+ 더보기</div>
                </div>
                <div className='specsname'>구매 내역</div>
                <div className='purchase'>
                    <div className='purchaseList'>
                        <div className='date'>날짜</div>
                        <div className='purchaseInfo'>
                            <div>이미지</div>
                            <div>
                                <div>물품명</div>
                                <div>가격</div>
                            </div>
                            <div>구매확정완료</div>
                        </div>
                    </div>
                    <div className='purchaseList'>
                        <div className='date'>날짜</div>
                        <div className='purchaseInfo'>
                            <div>이미지</div>
                            <div>
                                <div>물품명</div>
                                <div>가격</div>
                            </div>
                            <div>구매확정완료</div>
                        </div>
                    </div>
                    <div className='plus'>+ 더보기</div>
                </div>
            </div>
            {/* 장바구니 */}
            <div className={`addToBag ${activeTab === 'addToBag' ? '' : 'close'}`}>
                <div className='shoppingBagList'>장바구니 내역</div>
                <div className='shoppingProduct'>
                    <div className='shoppingProductInfo'>
                        <div className='shoppingImg'>상품 이미지</div>
                        <div className='shoppingProdName'>상품명</div>
                        <div className='shoppingPrice'>가격</div>
                        <input type="checkbox" />
                    </div>
                    <div className='shoppingProductInfo'>
                        <div className='shoppingImg'>상품 이미지</div>
                        <div className='shoppingProdName'>상품명</div>
                        <div className='shoppingPrice'>가격</div>
                        <input type="checkbox" />
                    </div>
                </div>
                <Link to='/payment' className='buyButton' onClick={closeInfo}>구매하기</Link>
            </div>
            <div className='withdrawal'>회원탈퇴 &gt;</div>
            {/* <Link to='/admin' className='admin' onClick={closeInfo}>관리자 페이지</Link> */}
        </div>
    );
});

export default MyStory;