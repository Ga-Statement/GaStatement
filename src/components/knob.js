/* 
-------------------------------------------------------------------------
	파일명		: knob.js
	설명		: 서랍 - 신청서
	담당자		: 박효연
	개발날짜	: 2023/12/10
-------------------------------------------------------------------------
*/

import { useState, useEffect, useRef  } from 'react';
import { useCookies } from 'react-cookie';
import { IoMdCloseCircle } from "react-icons/io";
import axios from 'axios';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import Address from './address';
import './knob.css';

const Knob = ({closeKnobBtn}) => {
    const [agreed, setAgreed] = useState(false);
    const isCheckBoxClicked = () => {
        setAgreed(!agreed);
    }
    
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_kjs", "template_qxrwnmk", form.current, "dhigA1EAdSIMx2fze")
        .then((result) => {
            if (result && agreed == true) {
                console.log(result.text);
            // alert("성공적으로 이메일이 전송되었습니다.");
                Swal.fire({
                    icon: "success",
                    title: '성공적으로 이메일이 전송되었습니다.',
                    showConfirmButton: true,
                    timer: 2500
                });
            } else if (result && agreed == false) {
                Swal.fire({
                    icon: "error",
                    title: '동의 체크를 해주세요.',
                });
            }
        }, (error) => {
            console.log(error.text);
            // alert("이메일 전송이 실패되었습니다.")
            Swal.fire({
                icon: "error",
                title: "이메일 전송이 실패되었습니다.",
              });
        });
    };

    const closeKnob = () =>{
        closeKnobBtn();

        setKnobProd('');
        setKnobBrand('');
        setknobYear('');
        setKnobName('');
        setKnobPhone('');
        setKnobAddress('');
        setKnobEmail('');
        setKnobPrice('');
        setKnobDesc('');
        setKnobAdd('');
    }
    
    const [knobProd, setKnobProd] = useState('');
    const [knobBrand, setKnobBrand] = useState('');
    const [knobYear, setknobYear] = useState('');
    const [knobName, setKnobName] = useState('');
    const [knobPhone, setKnobPhone] = useState('');
    const [knobAddress, setKnobAddress] = useState('');
    const [knobEmail, setKnobEmail] = useState('');
    const [knobPrice, setKnobPrice] = useState('');
    const [knobDesc, setKnobDesc] = useState('');
    const [knobAdd, setKnobAdd] = useState('');

    const [cookies, setCookie] = useCookies(["token"]);
    const [userInfo, setUserInfo] = useState(null);

    const handleProd = (event) => {
        const newProd = event.target.value;
        setKnobProd(newProd);
    }

    const handleBrand = (event) => {
        const newBrand = event.target.value;
        setKnobBrand(newBrand);
    }

    const handleYear = (event) => {
        const newYear = event.target.value;
        setknobYear(newYear);
    }

    const handleName = (event) => {
        const newName = event.target.value;
        setKnobName(newName);
    }

    const handlePhone = (event) => {
        const newPhone = event.target.value;
        setKnobPhone(newPhone);
    }

    const handleAddr = (event) => {
        const newAddr = event.target.value;
        setKnobAddress(newAddr);
    }

    const handleEmail = (event) => {
        const newEmail = event.target.value;
        setKnobEmail(newEmail);
    }

    const handlePrice = (event) => {
        const newPrice = event.target.value;
        setKnobPrice(newPrice);
    }

    const handleDesc = (event) => {
        const newDesc = event.target.value;
        setKnobDesc(newDesc);
    }

    const handleAdd = (event) => {
        const newAdd = event.target.value;
        setKnobAdd(newAdd);
    };

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

    useEffect(() => {
        if (userInfo) {
          setKnobName(userInfo.userName || '');  // 빈 문자열로 기본값 설정
          setKnobPhone(userInfo.userPhone || '');
          setKnobAdd(userInfo.userAdd || '');
          setKnobAddress(userInfo.userSubAdd || '');
          setKnobEmail(userInfo.userID || '');
          // 다른 필요한 초기값도 설정할 수 있습니다.
        } else {
            setKnobName('');  // 빈 문자열로 기본값 설정
            setKnobPhone('');
            setKnobAdd('');
            setKnobAddress('');
            setKnobEmail('');
        }
    }, [userInfo]);

    const placeholderText = '“기억명세서에게 당신의 기억을 들려주세요”\n\n(프리미엄 마케팅 신청 시 작성)\n당신의 추억과 기억을 가지고 맞춤형 상세 페이지를 제작합니다. 신청하시는 물건과 관련된 기억을 자유롭게 적어 주세요!';
    
    const placeholderText2 = '유의 사항\n1. ※파일첨부※: 영수증(없으면 구매 내역/카드사용전표/계좌이체 기록 등), 물건 사진(3장 이상)\n2. 신청 후 물건이 도착하면 전문가의 검수가 시작됩니다. (검수가 끝나면 판매자님께 연락드립니다)\n3. 진행 과정은 ‘나의이야기-나의 명세서’에서 확인할 수 있습니다.\n4. 판매가 불가능한 상품일 경우 반품 될 수 있습니다. (판매자님 동의 시 폐기 처리해 드립니다)\n5. 판매 금액의 일정 부분 수수료가 발생합니다.\n6. 판매가 시작된 상품은 취소할 수 없습니다.\n7. 판매 금액은 신청 시 희망가격과 다를 수 있습니다.';

    return(
        <div className="knob_container">
            <form ref={form} onSubmit={sendEmail} className='knob_container_form'>
                <div className='knob_title_container'>
                    <div className='knob_title'>마케팅 서비스 신청</div>
                    <div className='knobCloseBtn' onClick={closeKnob}><IoMdCloseCircle color='gray' size='35'/></div>
                </div>
                <div className="check">
                    <div className='check_p'><label>프리미엄 마케팅<input type="radio" name="user_package" value="프리미엄 마케팅"/></label></div>
                    <div className='check_b'><label>기본 마케팅<input type="radio" name="user_package" value="기본 마케팅"/></label></div>
                </div>
                <div><input className='knob_email' type="text" placeholder='이메일' name="user_email" value={knobEmail} onChange={handleEmail}/></div>
                <div><input className='applicant_name' type="text" placeholder='신청자 성함' name="user_name" value={knobName} onChange={handleName}/></div>
                <div><input className='applicant_phone' type="text" placeholder='전화번호' name="user_phone" value={knobPhone} onChange={handlePhone}/></div>
                <div><input className='knob_address' type="text" placeholder='주소' name="user_add" value={knobAdd} onChange={handleAdd} /></div>
                <div><input className="knob_address" type="text" placeholder='상세주소' name="user_subadd" value={knobAddress} onChange={handleAddr}/></div>
                <div className='knobInfo'>닫기 버튼을 누르면 신청서가 초기화 됩니다!</div>
                <div><input className='prod_name' type="text" placeholder='상품명' name="pd_name" value={knobProd} onChange={handleProd}/></div>
                <div><input className='prod_brand' type="text" placeholder='브랜드' name="pd_brand" value={knobBrand} onChange={handleBrand}/></div>
                <div><input className='when_buy' type="text" placeholder='구입시기' name="pd_years" value={knobYear} onChange={handleYear}/></div>
                <div><input className='knob_price' type="text" placeholder='구입가격/희망가격' name="pd_price" value={knobPrice} onChange={handlePrice}/></div>
                <div><input className='knob_file' type="file" placeholder='첨부파일(제품이미지, 영수증, 구매내역)' name="pd_file" accept='image/jpeg, image/png, image/webp' multiple/></div>
                <textarea className="knob_desc" 
                placeholder={placeholderText}
                name="user_desc" value={knobDesc} onChange={handleDesc}/>
                <textarea className="knob_notice" 
                placeholder={placeholderText2} readOnly/>
                <div className='notice_agree_list'><div className='notice_agree_txt'>동의</div><input type="checkbox" name="" className='notice_agree' onClick={isCheckBoxClicked}/></div>
                <input className='go_knob' type='submit' value="신청하기" />
            </form>
        </div>
    )
}

export default Knob;