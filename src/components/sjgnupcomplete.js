/* 
-------------------------------------------------------------------------
	파일명		: signupcomplete.js
	설명		: 회원가입 완료창
	담당자		: 박효연
	개발날짜	: 2023/12/09
-------------------------------------------------------------------------
*/

const SignUpComplete = ({closeSignUpBtn}) => {
    const closeSignUpCompleteBtn = () => {
        closeSignUpBtn();
    }
    return(
        <div>
            <div>~~님 환영합니다. 회원가입을 완료하였습니다.</div>
            <div><button onClick={closeSignUpCompleteBtn}>확인</button></div>
        </div>
    )
}

export default SignUpComplete