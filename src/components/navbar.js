/* 
-------------------------------------------------------------------------
	파일명		: navbar.js
	설명		: 하단 Nav
	담당자		: 박효연
	개발날짜	: 2023/12/09
-------------------------------------------------------------------------
*/

import { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes, FaPlus } from 'react-icons/fa';
import { FiMinus } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import './navbar.css';
import SignUp from './signup';
import SignUpComplete from './sjgnupcomplete';
import Login from './login';
import MyStory from './mystory';
import ChannelTalk from './channeltalk';
import Knob from './knob';

//npm install react-icons

const Navbar = () => {
    // useRef 사용하여 mystory 컴포넌트 함수에 접근
    const myInfoRef = useRef();

    // 기본 화면 메뉴
    const [nav_1, setNav_1] = useState(false);
    const [nav_2, setNav_2] = useState(false);
    const [nav_3, setNav_3] = useState(false);
    const [nav_4, setNav_4] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(["token"]);
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        const getToken = cookies.token;
        if (getToken) {
            setIsLogin(true);
        }
    }, [cookies]);

    const Logout = () => {
        removeCookie('token');
        setIsLogin(false);
        alert("로그아웃 되었습니다");

        setNav_1(false);
        setNav_2(false);
        setNav_3(false);
        setNav_4(false);
        setActiveCategory(null);
        myInfoRef.current.setMyInfo();
    }

    // 버튼 누르면 선택된 메뉴만 상태 변경
    const navBtn = (categoryNumber) => {
        setNav_1(false);
        setNav_2(false);
        setNav_3(false);
        setNav_4(false);

        if (categoryNumber === 1) {
            setNav_1(!nav_1);
        } else if (categoryNumber === 2) {
            setNav_2(!nav_2);
        } else if (categoryNumber === 3) {
            setNav_3(!nav_3);
        } else if (categoryNumber === 4) {
            setNav_4(!nav_4);
        };
    };

    // 작은 화면 햄버거 메뉴
    const [subMenuOpen, setSubMenuOpen] = useState(false);

    // 햄버거 메뉴 열고 닫기
    const showSidebar = () => {
        sideMenuBtn(!subMenuOpen);
        setSubMenuOpen(!subMenuOpen);
    }

    // 햄버거 메뉴의 리스트 상태
    const [sideMenu_1, setSideMenu_1] = useState(false);
    const [sideMenu_2, setSideMenu_2] = useState(false);
    const [sideMenu_3, setSideMenu_3] = useState(false);
    const [sideMenu_4, setSideMenu_4] = useState(false);
    const [sideMenu_5, setSideMenu_5] = useState(false);
    
    // 햄버거 메뉴 리스트 열고 닫고
    const sideMenuBtn = (menuNumber) => {
        setSideMenu_1(false);
        setSideMenu_2(false);
        setSideMenu_3(false);
        setSideMenu_4(false);
        setSideMenu_5(false);

        if (menuNumber === 1) {
            setSideMenu_1(!sideMenu_1);
        } else if (menuNumber === 2) {
            setSideMenu_2(!sideMenu_2);
        } else if (menuNumber === 3) {
            setSideMenu_3(!sideMenu_3);
        } else if (menuNumber === 4) {
            setSideMenu_4(!sideMenu_4);
        } else if (menuNumber === 5) {
            setSideMenu_5(!sideMenu_5);
        }
    };

    // 카테고리 활성화 여부 (클릭되었는지)
    // 아무것도 클릭되지 않은 상태 : null로 정의
    const [activeCategory, setActiveCategory] = useState(null);

    // 기본 메뉴 열고 닫기
    const handleCategoryClick = (categoryNumber) => {
        if (activeCategory === categoryNumber) {
        // 현재 열려있는 카테고리 메뉴와 클릭한 카테고리 메뉴가 같으면 상태를 초기화 (메뉴 닫기)
            setNav_1(false);
            setNav_2(false);
            setNav_3(false);
            setNav_4(false);
            setActiveCategory(null);
            myInfoRef.current.setMyInfo();
        } else {
        // 그렇지 않으면 클릭된 카테고리를 활성화(메뉴 글자 색상)하고 해당 카테고리의 메뉴가 열리도록
            setActiveCategory(categoryNumber);
            navBtn(categoryNumber);
            myInfoRef.current.setMyInfo();
        }
    };  

    // .head 외의 화면을 클릭했을 때 메뉴 상태가 false가 되도록
    // closest() 함수는 현재 element에서 가장 가까운 조상을 반환
    // 그러므로 클릭한 요소의 조상인 요소의 클래스에 head가 없으면 if문을 실행
    const handleOutsideClick = (e) => {
        if (e.target.closest(".head, .navbar") === null) {
            setNav_1(false);
            setNav_2(false);
            // setNav_3(false);
            setActiveCategory(null);
            myInfoRef.current.setMyInfo();
        }
    };
      
    // mousedown되면(메뉴 외의 화면 클릭하면) handleOutsideClick이 실행
    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
    
        return () => {
          document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    // 화면 크기 변하면 메뉴 닫히고, 글자 색 초기화되도록
    useEffect(() => {
        const handleResize = () => {
            setSubMenuOpen(false); // 햄버거메뉴
            setSubMenuOpen(prevSubMenuOpen => !prevSubMenuOpen); // 경고 발생해서, 함수형 업데이트로 수정
            setNav_1(false);
            setNav_2(false);
            // setNav_3(false);
            // setNav_4(false);
            setSideMenu_1(false);
            setSideMenu_2(false);
            setSideMenu_3(false);
            setSideMenu_4(false);
            setSideMenu_5(false);
            setActiveCategory(null);
            myInfoRef.current.setMyInfo();
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
        // 컴포넌트가 언마운트될 때 실행되며, 여기에서 리스너를 제거
        // remove 하는 이유 : 메모리 누수를 방지하기 위해?
    }, []);

    // 뒤로가기 눌렀을 때 메뉴 닫히도록
    useEffect(() => {
        const handlePopstate = () => {
            setNav_1(false);
            setNav_2(false);
            setNav_3(false);
            setNav_4(false);
            setSideMenu_1(false);
            setSideMenu_2(false);
            setSideMenu_3(false);
            setSideMenu_4(false);
            setSideMenu_5(false);
            setActiveCategory(null);
            myInfoRef.current.setMyInfo();
        };

        window.addEventListener('popstate', handlePopstate);

        return () => {
            window.removeEventListener('popstate', handlePopstate);
        };
    }, []);

    // 회원가입 항목이 모두 작성되었는지 - signUp.js로 전달
    // 초기에는 작성되지 않았으므로 기본값 false
    const [signUpSuccess, setSignUpSuccess] = useState(false);

    const handleSignUpSuccess = () => {
    setSignUpSuccess(true);
    };

    // 회원가입 완료창 닫기
    const closeSignUpComplete = () => {
        setSignUpSuccess(false);
        setNav_3(false);
    };

    // mystory 창 닫힐 때, 내 정보가 기본으로 되도록
    // const [activeMyInfo, setActiveMyInfo] = useState('myInfo');
    // const closemystory = () => {
    //     handleCategoryClick(null)
    //     setActiveMyInfo('myInfo');
    // };
    
    return (
        <header>
            <div className="navbar">
                <div div className="head">
                    <nav>
                        <div className='category'>
                            <Link to="/drawer" className="category_1" onClick={() => handleCategoryClick(null)}>서랍</Link>
                            <Link to="/shop" className="category_2" onClick={() => handleCategoryClick(null)}>SHOP</Link>
                            <Link to="/main" className="home" onClick={() => handleCategoryClick(null)}><img src="/pic/icon_pic/logo.png" className="home_logo"/></Link>
                            <div className={`category_3 ${activeCategory === 1 ? 'active' : ''}`} onClick={() => {!isLogin ? alert("로그인을 해주세요") : handleCategoryClick(1)}}>나의이야기</div>
                        </div>        
                    </nav>
                    <div className='login'>
                        {!isLogin ? <div className={`loginPage ${activeCategory === 2 ? 'active' : ''}`} onClick={() => handleCategoryClick(2)}>로그인</div> : <div onClick={Logout}>로그아웃</div>}
                    </div>
                </div>
                <div className='categoryList'>
                    <div className={`myStory ${nav_1 ? '' : 'close'}`}>
                        <MyStory closeMyStory={()=>{handleCategoryClick(null)}} ref={myInfoRef}/>
                    </div>
                    <div className={`loginContainer ${nav_2 ? '' : 'close'}`}>
                        <Login goToSignUp={()=>{handleCategoryClick(3)}} closeLogin={()=>{handleCategoryClick(null)}}/>
                    </div>
                    <div className={`signUp ${nav_3 ? '' : 'close'}`} > 
                        {signUpSuccess ? <SignUpComplete closeSignUpBtn={closeSignUpComplete}/> : <SignUp signUpSuccess={handleSignUpSuccess} closeSignUp={() => { handleCategoryClick(null) }} />}
                    </div>
                    <div className={`drawerApply ${nav_4 ? '' : 'close'}`} > 
                        <Knob closeKnobBtn={()=>{handleCategoryClick(null)}} />
                    </div>
                </div>
                <ChannelTalk/>
                <img src='/pic/icon_pic/drawerIcon.webp' className='drawerBtn' onClick={() => {!isLogin ? alert("로그인을 해주세요") : handleCategoryClick(4)}}/>
                <div className="drawerApplyTxt">서랍 신청</div>
            </div>
            <div className="sidebar" subMenuOpen={false}>
                <nav className={`openSidebar ${subMenuOpen ? '' : 'hide'}`}>
                    <div className="list">
                        <ul>
                            <div className="borderTop"></div>
                            <li><div><Link to='/' className='homeSideBar' onClick={showSidebar}>HOME</Link></div></li>
                            <li><div onClick={()=>{sideMenuBtn(1)}}>서랍
                                <FaPlus onClick={()=>{sideMenuBtn(1)}} className={`sellBuyBtnP ${sideMenu_1 ? 'hidden' : 'visible'}`}/>
                                <FiMinus onClick={()=>{sideMenuBtn(1)}} className={`sellBuyBtnM ${sideMenu_1 ? 'visible' : 'hidden'}`}/></div>
                                <ul className={`sellBuy ${sideMenu_1 ? '' : 'hide'}`}>
                                    <li><Link to='#' className='sellBuyLink' onClick={showSidebar}>서랍</Link></li>
                                    <li><Link to='#' className='sellBuyLink' onClick={showSidebar}>서랍</Link></li>
                                </ul>
                            </li>
                            <li><div onClick={()=>{sideMenuBtn(2)}}>메뉴1
                                <FaPlus onClick={()=>{sideMenuBtn(2)}} className={`communityBtnP ${sideMenu_2 ? 'hidden' : 'visible'}`}/>
                                <FiMinus onClick={()=>{sideMenuBtn(2)}} className={`communityBtnM ${sideMenu_2 ? 'visible' : 'hidden'}`}/></div>
                                <ul className={`community ${sideMenu_2 ? '' : 'hide'}`}>
                                    <li><Link to='#' className='communityLink' onClick={showSidebar}>메뉴1</Link></li>
                                    <li><Link to='#' className='communityLink' onClick={showSidebar}>메뉴1</Link></li>
                                </ul>
                            </li>
                            <li><div onClick={()=>{sideMenuBtn(3)}}>메뉴2
                                <FaPlus onClick={()=>{sideMenuBtn(3)}} className={`introBtnP ${sideMenu_3 ? 'hidden' : 'visible'}`}/>
                                <FiMinus onClick={()=>{sideMenuBtn(3)}} className={`introBtnM ${sideMenu_3 ? 'visible' : 'hidden'}`}/></div>
                                <ul className={`intro ${sideMenu_3 ? '' : 'hide'}`}>
                                    <li><Link to='#' className='drawerLink' onClick={showSidebar}>메뉴2</Link></li>
                                    <li><Link to='#' className='drawerLink' onClick={showSidebar}>메뉴2</Link></li>
                                </ul>
                            </li>
                            <li><div onClick={()=>{sideMenuBtn(4)}}>메뉴3
                                <FaPlus onClick={()=>{sideMenuBtn(4)}} className={`infoBtnP ${sideMenu_4 ? 'hidden' : 'visible'}`}/>
                                <FiMinus onClick={()=>{sideMenuBtn(4)}} className={`infoBtnM ${sideMenu_4 ? 'visible' : 'hidden'}`}/></div>
                                <ul className={`info ${sideMenu_4 ? '' : 'hide'}`}>
                                    <li><Link to='#' className='myStoryLink' onClick={showSidebar}>메뉴3</Link></li>
                                    <li><Link to='#' className='myStoryLink' onClick={showSidebar}>메뉴3</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <Link to="/login" className='sideLoginBtn' onClick={showSidebar}>로그인</Link>
                    <button className={`sideCloseBtn ${subMenuOpen ? '' : 'visible'}`} onClick={showSidebar}>
                        <FaTimes/> {/* 닫기 아이콘 */}
                    </button>
                </nav>
                <button className={`sideOpenBtn ${subMenuOpen ? 'visible' : ''}`} onClick={showSidebar}>
                    <FaBars/> {/* 햄버거 아이콘 */}
                </button>
            </div>
        </header>
    );
};

export default Navbar;