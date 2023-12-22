/* 
-------------------------------------------------------------------------
	파일명		: mystory.js
	설명		: 나의 이야기
	담당자		: 박효연
	개발날짜	: 2023/12/09
-------------------------------------------------------------------------
*/

import React, { forwardRef, useImperativeHandle, useState, useEffect } from 'react';
import { LiaToggleOffSolid } from "react-icons/lia";
import { LiaToggleOnSolid } from "react-icons/lia";
import { IoMdCloseCircle } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import './mystory.css';

const MyStory = forwardRef(({ closeMyStory }, ref) => {
    const [activeTab, setActiveTab] = useState('myInfo');
    const [isToggleOn_1, setIsToggleOn_1] = useState(false);
    const [isToggleOn_2, setIsToggleOn_2] = useState(false);
    const [isToggleOn_3, setIsToggleOn_3] = useState(false);
    const [isToggleOn_4, setIsToggleOn_4] = useState(false);

    const [cookies, setCookie] = useCookies(['token']);
    const [userInfo, setUserInfo] = useState(null);

    const toggleClick = (number) => {
        if (number=== 1) {
            setIsToggleOn_1(!isToggleOn_1)
        } else if (number=== 2) {
            setIsToggleOn_2(!isToggleOn_2)
        } else if (number=== 3) {
            setIsToggleOn_3(!isToggleOn_3)
        } else if (number=== 4) {
            setIsToggleOn_4(!isToggleOn_4)
        } 
    }

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

    useEffect(() => {
        const fetchData = async () => {
          try {
            if (cookies.token) {
              const userNO = cookies.token.userData;
    
              const res = await axios.get(`http://REACT_APP_HJ_TEST_IP:3000/user/mypage?userNO=${userNO}`);
              setUserInfo(res.data);
              console.log("data: ", res.data);
            }
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        };

        if(!cookies.token) {
            setUserInfo(null);
        }
    
        fetchData();
    }, [cookies.token]);

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
                <div className='closeMystoryBtn' onClick={closeInfo}><IoMdCloseCircle size='35' color='gray'/></div>
            </div>
            {/* 내 정보 */}
            <div className={`myInfo ${activeTab === 'myInfo' ? '' : 'close'}`}>
                <div className="basicInfoTitle">기본정보</div>
                <div className="basicInfo">
                    <div className="basicInfoContents">
                        <div className="profile">
                            <div className='profile_list'>
                                <img src='/pic/icon_pic/name.webp' className="profileIcon"/>
                                {userInfo ? <div className="name">{userInfo.userName}</div> : <div className="name">이름</div>}        
                            </div>                  
                            {/* <div className='editInfo'>수정</div> */}
                        </div>
                        <div className="emailInfo">
                            <div className='profile_list'>
                                <img src='/pic/icon_pic/mail.webp' className="emailIcon"/>
                                {userInfo ? <div className="emailInfo_address">{userInfo.userID}</div> : <div className="emailInfo_address">이메일</div>  }                         
                            </div>
                            {/* <div className='editInfo'>수정</div> */}
                        </div>
                        <div className="phoneInfo">
                            <div className='profile_list'>
                                <img src='/pic/icon_pic/phone.webp' className="phoneIcon"/>
                                {userInfo ? <div className="phoneNum">{userInfo.userPhone}</div> : <div className="phoneNum">핸드폰번호</div>}
                            </div>
                            {/* <div className='editInfo'>수정</div> */}
                        </div>
                        <div className="addressInfo">
                            <div className='profile_list'>
                                <img src='/pic/icon_pic/address.webp' className="addressIcon"/>
                                {userInfo ? <div className="addresshome">{userInfo.userAdd}, {userInfo.userSubAdd}</div> : <div className="addresshome">배송지 관리</div>}  
                            </div>
                            {/* <div className='editInfo'>수정</div> */}
                        </div>
                    </div>
                </div>
                <div className="promotionTitle">프로모션 정보수신 동의</div>
                <div className="promotion">
                    <div className="phoneAgree">
                        <div className='profile_list'>
                            <img src='/pic/icon_pic/phone.webp' className="phoneIcon"/>
                            <div>휴대전화</div>
                        </div>
                        <div className="onoffIcon" onClick={()=>{toggleClick(1)}}>{isToggleOn_1 ? 
                        <LiaToggleOffSolid  color='rgba(161, 161, 161, 0.9)' size='1.3vw'/> 
                        : <LiaToggleOnSolid color='rgba(161, 161, 161, 0.9)' size='1.3vw'/>}</div>
                    </div>
                    <div className="emailAgree">
                        <div className='profile_list'>
                            <img src='/pic/icon_pic/mail.webp' className="emailIcon"/>
                            <div>이메일</div>
                        </div>
                        <div className="onoffIcon" onClick={()=>{toggleClick(2)}}>{isToggleOn_2 ? 
                        <LiaToggleOffSolid  color='rgba(161, 161, 161, 0.9)' size='1.3vw'/> 
                        : <LiaToggleOnSolid color='rgba(161, 161, 161, 0.9)' size='1.3vw'/>}</div>
                    </div>
                </div>
                <div className="alarmTitle">게시물 알림 수신 동의</div>
                <div className="alarm">
                    <div className="phoneAgree">
                        <div className='profile_list'>
                            <img src='/pic/icon_pic/phone.webp' className="phoneIcon"/>
                            <div>휴대전화</div>
                        </div>
                        <div className="onoffIcon" onClick={()=>{toggleClick(3)}}>{isToggleOn_3 ? 
                        <LiaToggleOffSolid  color='rgba(161, 161, 161, 0.9)' size='1.3vw'/> 
                        : <LiaToggleOnSolid color='rgba(161, 161, 161, 0.9)' size='1.3vw'/>}</div>
                    </div>
                    <div className="emailAgree">
                        <div className='profile_list'>
                            <img src='/pic/icon_pic/mail.webp' className="emailIcon"/>
                            <div>이메일</div>
                        </div>
                        <div className="onoffIcon" onClick={()=>{toggleClick(4)}}>{isToggleOn_4 ? 
                        <LiaToggleOffSolid  color='rgba(161, 161, 161, 0.9)' size='1.3vw'/> 
                        : <LiaToggleOnSolid color='rgba(161, 161, 161, 0.9)' size='1.3vw'/>}</div>
                    </div>
                </div>
                <div className='editInfoBtn'>회원정보 수정 &gt;</div>
                <div className='withdrawal'>회원탈퇴 &gt;</div>
                {userInfo ? <Link to='/admin' className={`admin ${userInfo.userRole === 0 ? '' : 'hidden'}`} onClick={closeInfo}>관리자 페이지</Link> : 
                <Link to='/admin' className="admin hidden" onClick={closeInfo}>관리자 페이지</Link>}
            </div>
            {/* 나의 명세서 */}
            <div className={`specs ${activeTab === 'specs' ? '' : 'close'}`}>
                <div className='specsname'>마케팅 서비스 신청 내역</div>
                <div className='sales'>
                    <div className='salesList'>
                        <div className='salesInfo'>
                            <img src="/pic/shop_pic/chair.webp" alt="" className='salesInfoImg'/>
                            <div>
                                <div className='salesInfo_1'>영국 황실 의자</div>
                                <div className='salesInfo_2'>희망가격 : 3,500,000원</div>
                            </div>
                            <div>
                                <div className='salesInfo_3'>2023.12.17 신청</div>
                                <div className='salesInfo_4'>전문가 검수 확인중</div>
                            </div>
                            <div className='purchaseConfirmList'>
                                <div><img src="/pic/icon_pic/check.webp" alt="" className='checkProd'/></div>
                                <div className='purchaseConfirm_txt'>검수중</div>
                            </div>
                        </div>
                    </div>
                    <div className='plus'>+ 더보기</div>
                </div>
                <div className='specsname_2'>구매 내역</div>
                <div className='purchase'>
                    <div className='purchaseList'>
                        <div className='purchaseInfo'>
                            <img src="/pic/shop_pic/lamp.webp" alt="" className="purchaseInfoImg" />
                            <div>
                                <div className='purchaseInfo_1'>조명</div>
                                <div className='purchaseInfo_2'>결제금액 : 3,500,000원</div>
                            </div>
                            <div>
                                <div className='purchaseInfo_3'>2023.12.17 구매</div>
                                <div className='purchaseInfo_'>전문가 검수 진행중</div>
                            </div>
                            <div className='purchaseConfirmList'>
                                <div><img src="/pic/icon_pic/purchaseConfirm.webp" alt="" className='purchaseConfirm'/></div>
                                <div className='purchaseConfirm_txt'>구매확정</div>
                            </div>
                        </div>
                    </div>
                    <div className='plus'>+ 더보기</div>
                </div>
            </div>
            {/* 장바구니 */}
            <div className={`addToBag ${activeTab === 'addToBag' ? '' : 'close'}`}>
                <div className='shoppingBagList'>장바구니</div>
                <div className='shoppingProduct'>
                    <div className='shoppingProductInfo'>
                        <img src='/pic/shop_pic/LP.webp' className='shoppingImg_1'/>
                        <div>
                            <div className='shoppingProdName'>상품명 : The Beatles 1st LP</div>
                            <div className='shoppingPrice'>가격 : 99,200원</div>
                        </div>
                        <input type="checkbox" className='shoppingCheck'/>
                    </div>
                    <div className='shoppingProductInfo'>
                        <img src='/pic/shop_pic/cup.webp' className='shoppingImg_2'/>
                        <div>
                            <div className='shoppingProdName'>상품명 : Noritake</div>
                            <div className='shoppingPrice_2'>가격 : 148,400원</div>
                        </div>
                        <input type="checkbox" className='shoppingCheck2'/>
                    </div>
                </div>
                <Link to='/cart' className='buyButton' onClick={closeInfo}>구매하기</Link>
            </div>
        </div>
    );
});

export default MyStory;