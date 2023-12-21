/* 
-------------------------------------------------------------------------
	파일명		: signup.js
	설명		: 회원가입
	담당자		: 박효연
	개발날짜	: 2023/12/09
-------------------------------------------------------------------------
*/

import { useState, useEffect } from 'react';
import { IoMdCloseCircle } from "react-icons/io";
import axios from 'axios';
import Swal from "sweetalert2";
import Address from './address';
import './signup.css';

const SignUp = ({closeSignUp, signUpSuccess}) => {
    // 입력값 상태
    const [address, setAddress] = useState('');
    const [subaddress, setSubaddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [nickname, setNickname] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [selectedAddress, setSelectedAddress] = useState('');

    // 중복 여부
    const [isEmailDuplicate, setIsEmailDuplicate] = useState(false);
    const [isNicknameDuplicate, setIsNicknameDuplicate] = useState(false);

    // 유효성
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true); 
    const [isNicknameValid, setIsNicknameValid] = useState(true);
    const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(true);   

    // 비밀번호 일치 여부
    const [isConfirmPasswordMatch, setIsConfirmPasswordMatch] = useState(true);

    // 약관동의 체크 여부
    const [isTermsChecked, setIsTermsChecked] = useState(false);
    const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);

    const [emailValidate, setEmailValidate] = useState(false);
    const [isEmailChecked, setIsEmailChecked] = useState(false);

    // 데이터 상태 업데이트
    const [userData, setUserData] = useState({
        userID: email,
        userPW: password,
        userName: nickname,
        userRole: '1',      // 1: 유저로 가입
        userStat: '1',      // 0: 회원 탈퇴 / 1: 회원 가입
        userPhone: phoneNum,
        userAdd: address,
        userSubAdd: subaddress,
    });

    // 유효성 검사
    useEffect(() => {
        // const isEmailDuplicate = UserData.some((user) => user.email === email);
        // setIsEmailDuplicate(isEmailDuplicate);
        
        // ^ : 문자열의 시작
        // / 와 / 사이에 입력
        // [a-zA-Z0-9_.-] : a부터 z, A부터 Z, 0부터 9, _.-만 사용 가능 
        // \. : .을 의미
        // $ : 문자열의 끝
        const emailForm = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        setIsEmailValid(emailForm.test(email));

        // const isNicknameDuplicate = UserData.some((user) => user.nickname === nickname);
        // setIsNicknameDuplicate(isNicknameDuplicate);

        const nicknameForm = /^[a-zA-Z가-힣0-9]+$/;
        setIsNicknameValid(nicknameForm.test(nickname));

        const phoneForm = /^\d{10,11}$/;
        setIsPhoneNumberValid(phoneForm.test(phoneNum));

        setIsPasswordValid(password.length >= 6);

        setIsConfirmPasswordMatch(password === confirmPassword);
        }, [email, nickname, phoneNum, password, confirmPassword]);

        // 값이 변경되면 새로운 값으로 업데이트
        const handleEmailChange = (event) => {
            const newEmail = event.target.value;
            setEmail(newEmail);

            // data값 업데이트
            setUserData((prevData) => ({
                ...prevData,
                userID: newEmail,
            }));
        };

        const handleNicknameChange = (event) => {
            const newNickname = event.target.value;
            setNickname(newNickname);

            // data값 업데이트
            setUserData((prevData) => ({
                ...prevData,
                userName: newNickname,
            }));
        };

        const handleTermsChange = (event) => {
            setIsTermsChecked(event.target.checked);
        };
      
        const handlePrivacyChange = (event) => {
            setIsPrivacyChecked(event.target.checked);
        };

        const handlePhoneNumberChange = (event) => {
            const newPhoneNumber = event.target.value;
            setPhoneNum(newPhoneNumber);

            // data값 업데이트
            setUserData((prevData) => ({
                ...prevData,
                userPhone: newPhoneNumber,
            }));
        };

        const handlePasswordChange = (event) => {
            const newPassword = event.target.value;
            setPassword(newPassword);

            // data값 업데이트
            setUserData((prevData) => ({
                ...prevData,
                userPW: newPassword,
            }));
        };
        
        const handleConfirmPasswordChange = (event) => {
            const newConfirmPassword = event.target.value;
            setConfirmPassword(newConfirmPassword);
        };

        const handleAddressChange = (address) => {
            setSelectedAddress(address);

            // data값 업데이트
            setUserData((prevData) => ({
                ...prevData,
                userAdd: address,
            }));
        };

        const handleSubAddressChange = (event) => {
            const newSubaddress = event.target.value;
            setSubaddress(newSubaddress);
    
            // data값 업데이트
            setUserData((prevData) => ({
                ...prevData,
                userSubAdd: newSubaddress,
            }));
        }

        const handleAllAgreeChange = (event) => {
            const isChecked = event.target.checked;
            setIsTermsChecked(isChecked);
            setIsPrivacyChecked(isChecked);
        };

        // 약관 동의 레이어팝업
        const [isPopupOpen, setIsPopupOpen] = useState(false);

        const openPopup = () => {
            setIsPopupOpen(true);
        };

        const closePopup = () => {
            setIsPopupOpen(false);
        };

        // 전체 항목이 다 작성됐는지, 중복된 것이나 유효성 검사에서도 통과됐는지?
        const isFormValid =
        email &&
        isEmailValid &&
        !isEmailDuplicate &&
        password &&
        isPasswordValid &&
        confirmPassword &&
        isConfirmPasswordMatch &&
        // nickname &&
        // isNicknameValid &&
        // !isNicknameDuplicate &&
        phoneNum &&
        isPhoneNumberValid &&
        subaddress &&
        selectedAddress &&
        isTermsChecked &&
        isPrivacyChecked;

        // 닫기 창을 누르면 값이 초기화되도록, navbar.js에서 props로 받아옴
        const onCloseSignUp = () => {
            closeSignUp();
            setAddress('');
            setSubaddress('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setNickname('');
            setPhoneNum('');
            setSelectedAddress('');
            setIsTermsChecked(false);
            setIsPrivacyChecked(false);
            setIsEmailChecked(false);
            setEmailValidate(false);
        };

        // 회원가입 완료시 실행될 함수
        const handleSignUp = async () => {
            const onSignUpSuccess = true;
            if (onSignUpSuccess) {
                signUpSuccess(); // 부모 항목으로 전달
                onCloseSignUp();
                try {
                    const res = await axios.post(
                        'http://localhost:3000/user/signup', userData
                    );
                    console.log("요청 성공 : ", res);
                    // alert("회원가입이 완료되었습니다.");
                    Swal.fire({
                        icon: "success",
                        title: '회원가입이 완료되었습니다.',
                        showConfirmButton: false,
                        timer: 1500,
                        confirmButtonText: '확인',
                        customClass: {
                            popup: 'custom-swal-popup', // 팝업 창
                            title: 'custom-swal-title', // 제목
                            icon: 'custom-swal-icon' // 아이콘
                        }
                      });
                } catch (error) {
                    console.error("요청 실패: ", error);
                }
            }
        };

        const isCheck = async () => {
            if (email != null && email != "" && isEmailValid) {
                try {
                    const { data } = await axios.post(
                        'http://localhost:3000/user/validate/email', {userID: userData.userID}
                    );
                    setIsEmailChecked(true);
                    if (data.result) {
                        setEmailValidate(true);
                    } else {
                        setEmailValidate(false);
                    }
                } catch (error) {
                    console.error("중복 요청 실패: ", error);
                }
            } else {
                Swal.fire({
                    icon: "error",
                    title: "이메일을 입력하세요.",
                    confirmButtonText: '확인',
                    customClass: {
                        popup: 'custom-swal-popup', // 팝업 창
                        title: 'custom-swal-title', // 제목
                        icon: 'custom-swal-icon' // 아이콘
                    }
                });
                setIsEmailChecked(false);
                setEmailValidate(false);
            }
        };
        
    return(
        <div className="join" isFormValid={false}>
            <div className='joinTitle'>
                <div className='join_title'>회원가입</div>
                <div className='close' onClick={onCloseSignUp}><IoMdCloseCircle size='35' color='gray'/></div>
            </div>
            <div className="email">
                <input type="text" id="email" className='emailInput' value={email} onChange={handleEmailChange} placeholder='이메일'/>
                {isEmailChecked && emailValidate && <div className='pass'>사용 가능한 이메일입니다.</div>}
                {isEmailChecked && !emailValidate && <div className='warning'>이미 존재하는 이메일입니다.</div>}
                {email && !isEmailValid && <div className='warning'>올바른 이메일 양식을 입력해주세요.</div>}
            </div>
            <button className={`validBtn ${isFormValid ? '' : 'invalid'}`} onClick={isCheck}>중복 체크</button>
            <div className="password">
                <div>
                    <input type="password" id="password" className='passwordInput' value={password} onChange={handlePasswordChange} 
                    placeholder='비밀번호 (6자 이상)'/>
                    {password && !isPasswordValid && (<div className='warning'>비밀번호는 최소 6자 이상이어야 합니다.</div>)}
                </div>
                <div>
                    <input type="password" id="passwordCheck" className='passwordCheck'value={confirmPassword} onChange={handleConfirmPasswordChange} placeholder='비밀번호 확인'/>
                    {password && confirmPassword && !isConfirmPasswordMatch && (
                    <div className='warning'>비밀번호가 일치하지 않습니다.</div>)}
                </div>
            </div>
            <div className="nickname">
                <input type="text" id="nickname" className='nicknameInput' value={nickname} onChange={handleNicknameChange} placeholder='이름'/>
                {/* {nickname && isNicknameValid && !isNicknameDuplicate && (<div className='pass'>사용 가능한 닉네임입니다.</div>)}
                {nickname && !isNicknameValid && (<div className='warning'>올바른 형식으로 입력해주세요.</div>)}
                {nickname && isNicknameDuplicate && isNicknameValid && (<div className='warning'>이미 존재하는 닉네임입니다.</div>)} */}
            </div>
            <div className="phoneNum">
                <input type="tel" id="phoneNum" className='phoneNumInput' value={phoneNum}
                onChange={handlePhoneNumberChange} placeholder='휴대전화'/>
                {phoneNum && !isPhoneNumberValid && (
                <div className='warning'>최소 10자, 최대 11자로 숫자만 입력해주세요.</div>)}
            </div>
            <div className="address">
                <input className="addressInput" type="text" id="address" value={selectedAddress} placeholder='주소' readOnly/><br/>
                <Address setAddress={handleAddressChange}/><br/>
                <input className="detailedAddressInput" type="text" id="detailedAddress" value={subaddress} onChange={handleSubAddressChange} placeholder='상세주소'/>
            </div>
            <div className="terms">
                <button className={`termsBtn ${isTermsChecked && isPrivacyChecked ? '' : 'invalid'}`} onClick={openPopup}>이용약관</button>
                {isPopupOpen && (
                <div className="termsContainer">
                    <div className="termsContent">
                    <label for="terms">이용약관(필수)</label><br/>
                    <textarea className='termsDesc' id="terms" readOnly>
                        기억명세서 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다. 본 약관은 다양한 기억명세서 서비스의 이용과 관련하여 기억명세서 서비스를 제공하는 기억명세서 주식회사(이하 ‘기억명세서’)와 이를 이용하는 기억명세서 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 기억명세서 서비스 이용에 도움이 될 수 있는 유익한 정보를 포함하고 있습니다.&#13;&#10;

                        기억명세서 서비스를 이용하시거나 기억명세서 서비스 회원으로 가입하실 경우 여러분은 본 약관 및 관련 운영 정책을 확인하거나 동의하게 되므로, 잠시 시간을 내시어 주의 깊게 살펴봐 주시기 바랍니다.

                        기억명세서는 기본적으로 여러분 모두에게 동일한 내용의 서비스를 제공합니다. 다만, '청소년보호법' 등 관련 법령이나 기타 개별 서비스 제공에서의 특별한 필요에 의해서 연령 또는 일정한 등급을 기준으로 이용자를 구분하여 제공하는 서비스의 내용, 이용 시간, 이용 횟수 등을 다르게 하는 등 일부 이용을 제한하는 경우가 있습니다. 자세한 내용은 역시 각 서비스 상의 안내, 공지사항, 고객센터 도움말 등에서 확인하실 수 있습니다.</textarea>
                    <div>동의<input type="checkbox" checked={isTermsChecked} onChange={handleTermsChange}></input></div>    
                    <label for="terms">개인정보 수집 및 동의(필수)</label><br/>
                    <textarea className='termsDesc' id="terms" readOnly>
                        개인정보보호법에 따라 기억명세서에 회원가입 신청하시는 분께 수집하는 개인정보의 항목, 개인정보의 수집 및 이용목적, 개인정보의 보유 및 이용기간, 동의 거부권 및 동의 거부 시 불이익에 관한 사항을 안내 드리오니 자세히 읽은 후 동의하여 주시기 바랍니다.
                        *수집하는 개인정보
                        이용자는 회원가입을 하지 않아도 정보 검색, 뉴스 보기 등 대부분의 기억명세서 서비스를 회원과 동일하게 이용할 수 있습니다. 이용자가 메일, 캘린더, 카페, 블로그 등과 같이 개인화 혹은 회원제 서비스를 이용하기 위해 회원가입을 할 경우, 기억명세서는 서비스 이용을 위해 필요한 최소한의 개인정보를 수집합니다.

                        회원가입 시점에 기억명세서가 이용자로부터 수집하는 개인정보는 아래와 같습니다.
                        - 회원 가입 시 필수항목으로 아이디, 비밀번호, 이름, 생년월일, 성별, 휴대전화번호를, 선택항목으로 본인확인 이메일주소를 수집합니다. 실명 인증된 아이디로 가입 시, 암호화된 동일인 식별정보(CI), 중복가입 확인정보(DI), 내외국인 정보를 함께 수집합니다. 만14세 미만 아동의 경우, 법정대리인 정보(법정대리인의 이름, 생년월일, 성별, 중복가입확인정보(DI), 휴대전화번호)를 추가로 수집합니다.
                        - 비밀번호 없이 회원 가입 시에는 필수항목으로 아이디, 이름, 생년월일, 휴대전화번호를, 선택항목으로 비밀번호를 수집합니다.
                        - 단체 회원가입 시 필수 항목으로 단체아이디, 비밀번호, 단체이름, 이메일주소, 휴대전화번호를, 선택항목으로 단체 대표자명을 수집합니다.
                        서비스 이용 과정에서 이용자로부터 수집하는 개인정보는 아래와 같습니다.
                        - 회원정보 또는 개별 서비스에서 프로필 정보(별명, 프로필 사진)를 설정할 수 있습니다. 회원정보에 별명을 입력하지 않은 경우에는 마스킹 처리된 아이디가 별명으로 자동 입력됩니다.
                        - 기억명세서 내의 개별 서비스 이용, 이벤트 응모 및 경품 신청 과정에서 해당 서비스의 이용자에 한해 추가 개인정보 수집이 발생할 수 있습니다. 추가로 개인정보를 수집할 경우에는 해당 개인정보 수집 시점에서 이용자에게 ‘수집하는 개인정보 항목, 개인정보의 수집 및 이용목적, 개인정보의 보관기간’에 대해 안내 드리고 동의를 받습니다.
                    </textarea>
                    <div>동의<input type="checkbox" checked={isPrivacyChecked} onChange={handlePrivacyChange}></input></div>
                    <div>모두 동의<input type="checkbox" checked={isTermsChecked && isPrivacyChecked} onChange={handleAllAgreeChange}></input></div>
                    <button className={`termsConfirmBtn ${isTermsChecked && isPrivacyChecked ? '' : 'invalid'}`} onClick={closePopup}>확인</button> 
                    </div>
                </div>)}
            </div>
            <button className={`signUpBtn ${isEmailChecked && emailValidate && isFormValid ? '' : 'invalid'}`} disabled={!isFormValid} onClick={isEmailChecked && emailValidate && isFormValid ? handleSignUp : null}>회원가입</button>
            {isFormValid ? null : (
            <div className='totalWarning'>
                모든 항목을 작성해주세요.
            </div>)}
        </div>
    )
}

export default SignUp;