/* 
-------------------------------------------------------------------------
	파일명		: signup.js
	설명		: 회원가입
	담당자		: 박효연
	개발날짜	: 2023/12/09
-------------------------------------------------------------------------
*/

import { useState, useEffect } from 'react';
import Address from './address';
import './signup.css';

const SignUp = ({closeSignUp, signUpSuccess}) => {
    // 입력값 상태
    const [address, setAddress] = useState('');
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
        };

        const handleNicknameChange = (event) => {
            const newNickname = event.target.value;
            setNickname(newNickname);
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
        };

        const handlePasswordChange = (event) => {
            const newPassword = event.target.value;
            setPassword(newPassword);
        };
        
        const handleConfirmPasswordChange = (event) => {
            const newConfirmPassword = event.target.value;
            setConfirmPassword(newConfirmPassword);
        };

        const handleAddressChange = (address) => {
            setSelectedAddress(address);
        };

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
        // confirmPassword &&
        // isConfirmPasswordMatch &&
        nickname &&
        isNicknameValid &&
        !isNicknameDuplicate &&
        phoneNum &&
        isPhoneNumberValid &&
        selectedAddress &&
        isTermsChecked &&
        isPrivacyChecked;

        // 닫기 창을 누르면 값이 초기화되도록, navbar.js에서 props로 받아옴
        const onCloseSignUp = () => {
            closeSignUp();
            setAddress('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            setNickname('');
            setPhoneNum('');
            setSelectedAddress('');
            setIsTermsChecked(false);
            setIsPrivacyChecked(false);
        };

        // 회원가입 완료시 실행될 함수
        const handleSignUp = () => {
            const onSignUpSuccess = true;
            if (onSignUpSuccess) {
              signUpSuccess(); // 부모 항목으로 전달
            }
        };
        
    return(
        <div className="join" isFormValid={false}>
            <div className='joinTitle'>
                <div className='join_title'>회원가입</div>
                <div className='close' onClick={onCloseSignUp}><img src="/pic/icon_pic/closeBtn.png" alt="" /></div>
            </div>
            <div className="email">
                <input type="text" id="email" className='emailInput' value={email} onChange={handleEmailChange} placeholder='E-mail'/>
                {email && isEmailValid && !isEmailDuplicate && (<div className='pass'>사용 가능한 이메일입니다.</div>)}
                {email && !isEmailValid && (<div className='warning'>올바른 이메일 양식을 입력해주세요.</div>)}
                {email && isEmailDuplicate && isEmailValid && (<div className='warning'>이미 존재하는 이메일입니다.</div>)}
            </div>
            <div className="password">
                <div>
                    <input type="password" id="password" className='passwordInput' value={password} onChange={handlePasswordChange} placeholder='Password'/>
                    {password && !isPasswordValid && (<div className='warning'>비밀번호는 최소 6자 이상이어야 합니다.</div>)}
                </div>
                {/* <div>
                    <input type="password" id="passwordCheck" className='passwordCheck'value={confirmPassword} onChange={handleConfirmPasswordChange} placeholder='비밀번호 확인'/>
                    {password && confirmPassword && !isConfirmPasswordMatch && (
                    <div className='warning'>비밀번호가 일치하지 않습니다.</div>)}
                </div> */}
            </div>
            <div className="nickname">
                <input type="text" id="nickname" className='nicknameInput' value={nickname} onChange={handleNicknameChange} placeholder='Nickname'/>
                {nickname && isNicknameValid && !isNicknameDuplicate && (<div className='pass'>사용 가능한 닉네임입니다.</div>)}
                {nickname && !isNicknameValid && (<div className='warning'>올바른 형식으로 입력해주세요.</div>)}
                {nickname && isNicknameDuplicate && isNicknameValid && (<div className='warning'>이미 존재하는 닉네임입니다.</div>)}
            </div>
            <div className="phoneNum">
                <input type="tel" id="phoneNum" className='phoneNumInput' value={phoneNum}
                onChange={handlePhoneNumberChange} placeholder='PhoneNumber'/>
                {phoneNum && !isPhoneNumberValid && (
                <div className='warning'>최소 10자, 최대 11자로 숫자만 입력해주세요.</div>)}
            </div>
            <div className="address">
                <input className="addressInput" type="text" id="address" value={selectedAddress} placeholder='Address' readOnly/><br/>
                <Address setAddress={handleAddressChange}/><br/>
                <input className="detailedAddressInput" type="text" id="detailedAddress" placeholder='Address'/>
            </div>
            <div className="terms">
                <button className={`termsBtn ${isTermsChecked && isPrivacyChecked ? '' : 'invalid'}`} onClick={openPopup}>이용약관</button>
                {isPopupOpen && (
                <div className="termsContainer">
                    <div className="termsContent">
                    <label for="terms">이용약관(필수)</label><br/>
                    <textarea className='termsDesc' id="terms" readOnly>약관 내용 적기</textarea>
                    <div>동의<input type="checkbox" checked={isTermsChecked} onChange={handleTermsChange}></input></div>    
                    <label for="terms">개인정보 수집 및 동의(필수)</label><br/>
                    <textarea className='termsDesc' id="terms" readOnly>약관 내용 적기</textarea>
                    <div>동의<input type="checkbox" checked={isPrivacyChecked} onChange={handlePrivacyChange}></input></div>
                    <div>모두 동의<input type="checkbox" checked={isTermsChecked && isPrivacyChecked} onChange={handleAllAgreeChange}></input></div>
                    <button className={`termsConfirmBtn ${isTermsChecked && isPrivacyChecked ? '' : 'invalid'}`} onClick={closePopup}>확인</button> 
                    </div>
                </div>)}
            </div>
            <button className={`signUpBtn ${isFormValid ? '' : 'invalid'}`} disabled={!isFormValid} onClick={isFormValid ? handleSignUp : null}>가입하기</button>
            {isFormValid ? null : (
            <div className='totalWarning'>
                모든 필수 항목을 작성해주세요.
            </div>)}
        </div>
    )
}

export default SignUp;