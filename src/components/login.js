/* 
-------------------------------------------------------------------------
	파일명		: login.js
	설명		: 로그인
	담당자		: 박효연
	개발날짜	: 2023/12/09
-------------------------------------------------------------------------
*/

import { useState, useEffect } from 'react';
import { useCookies } from "react-cookie";
import { IoMdCloseCircle } from "react-icons/io";
import axios from "axios";
import Swal from "sweetalert2";
import './login.css';

const Login = ({goToSignUp, closeLogin}) => {

    // 회원가입창 실행 - navbar에서 불러옴
    const goSignUp = () => {  
        setEmailId('');
        SetPassword('');
        goToSignUp();
    };

    // 로그인 창 닫기 - navbar에서 불러옴
    const closeLoginBtn = () => {
        setEmailId('');
        SetPassword('');
        closeLogin();
    };

    // 입력값 상태
    const [emailId, setEmailId] = useState('');
    const [password, SetPassword] = useState('');
    const [cookies, setCookie, removeCookie] = useCookies(["token"]);

    // 값이 들어오면 새로운 값으로 업데이트
    const idChange = (e) => {
        const newId = e.target.value;
        setEmailId(newId);
    };
    const pwChange = (e) => {
        const newPw = e.target.value;
        SetPassword(newPw);
    };

    const handleLogin = async (e) => {
        try {
          const { data } = await axios.post("http://localhost:3000/user/signin", {
            userID: emailId,
            userPW: password,
          });
          if (data.result) {
            closeLoginBtn();
            // alert("로그인이 완료되었습니다");
            // Swal.fire('로그인이 완료되었습니다');
            Swal.fire({
              icon: "success",
              title: '로그인 되었습니다',
              showConfirmButton: true,
              timer: 2500,
              confirmButtonText: '확인',
              customClass: {
                popup: 'custom-swal-popup', // 팝업 창
                title: 'custom-swal-title', // 제목
                icon: 'custom-swal-icon' // 아이콘
              }
            });
            setCookie("token", {userData: data.userData});
          } else {
            // alert("아이디 / 비밀번호가 틀렸습니다.");
            Swal.fire({
              icon: "error",
              title: "아이디 / 비밀번호가 틀렸습니다.",
              confirmButtonText: '확인',
              customClass: {
                popup: 'custom-swal-popup', // 팝업 창
                title: 'custom-swal-title', // 제목
                icon: 'custom-swal-icon' // 아이콘
              }
            });
          }
        } catch (error) {
          console.error("요청 실패: ", error);
        }
      };

    // 아이디, 비밀번호가 회원정보와 맞는지
    const [idPwConfirm, setIdPwConfirm] = useState(false);

    const isIdEmpty = emailId.trim() !== ''; // 값이 있으면 true
    const isPwEmpty = password.trim() !== ''; // 값이 있으면 true

    // // 유효성 검사
    useEffect(()=>{
        const idPwMatch = emailId && password;
        setIdPwConfirm(idPwMatch);
    }, [emailId, password]);

    return(
        <div>
            <div className='login_1'>
                <div className='loginTitle'>로그인</div>
                <div className='goToSignUp' onClick={goSignUp}>회원가입 &gt;</div>
                <div className='closeIcon' onClick={closeLoginBtn}><IoMdCloseCircle size='35' color='gray'/></div>
            </div>
            <div className="login_2">
                <input type="text" id='id' value={emailId} onChange={idChange} className='idInput' placeholder='아이디를 입력하세요'/>
                <input type="password" id='pw' value={password} className='pwInput' onChange={pwChange} placeholder='비밀번호를 입력하세요'/>
            </div>
            <div className="login_3">
                <div className="id_pw_find">아이디 찾기 | 비밀번호 찾기</div>
                <button className='loginBtn' disabled={!idPwConfirm} onClick={handleLogin}>로그인</button>
                {/* {(!isIdEmpty || !isPwEmpty) && (<div className='idPwNotMatch'>아이디와 비밀번호를 입력해주세요.</div>)} */}
                {isIdEmpty && isPwEmpty && !idPwConfirm && (<div className='idPwNotMatch'>아이디와 비밀번호가 일치하지 않습니다.</div>)}
            </div>
        </div>
    );
};

export default Login;