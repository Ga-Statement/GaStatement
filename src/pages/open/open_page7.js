import React, { useState, useEffect } from "react";
import TextChange from "../../components/textchange";
import './open_page7.css';
import gsap from 'gsap';
import Aos from "aos";

const Open_page7 = () => {
    // textChange가 언제 시작할 지
    const [textChangeStart, setTextChangeStart] = useState(false);
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const newScrollPercent = (scrollPosition / (documentHeight - windowHeight)) * 100;
            setScrollPercent(newScrollPercent);

            if (newScrollPercent > 50) {
                setTextChangeStart(true)
                // console.log("스크롤 위치가 98%를 넘었습니다.");
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
const items = document.querySelectorAll('.item')

const expand = (item, i) => {
  items.forEach((it, ind) => {
    if (i === ind) return
    it.clicked = false
  })
  gsap.to(items, {
    width: item.clicked ? '15vw' : '10vw',
    height: item.clicked ? '30vh' : '25vh',
    duration: 2,
    ease: 'elastic(1, .6)'
  })
  
  item.clicked = !item.clicked
  gsap.to(item, {
    width: item.clicked ? '15vw' : '17vw',
    height: item.clicked ? '30vh' : '45vh',
    duration: 2.5,
    ease: 'elastic(1, .3)'
  })
}

items.forEach((item, i) => {
  item.clicked = false
  item.addEventListener('click', () => expand(item, i))
})


    return (
        <div>
            <div id="page7_group" className="open-wrap open-title flex-col h-140vh bg-black"
                            data-aos="fade-up"
                            data-aos-offset="150"
                            data-aos-delay="50"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            data-aos-anchor-placement="top">
                <div className="open-title flex-col h-30vh">
                    <h1 id="page7_main_text" className="font-size-150 h-20vh margin-0">{textChangeStart && <TextChange/>}</h1>
                    <h3 id="page7_h3" className="font-white font-normal"
                                    data-aos="fade-up"
                                    data-aos-offset="150"
                                    data-aos-delay="700"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-in-out"
                                    data-aos-mirror="true"
                                    data-aos-once="false"
                                    data-aos-anchor-placement="bottom">서랍은 당신의 불편함과 불안함을 대신 합니다.</h3>
                </div>
                <div
                                                    data-aos="fade-up"
                                                    data-aos-offset="150"
                                                    data-aos-delay="700"
                                                    data-aos-duration="1000"
                                                    data-aos-easing="ease-in-out"
                                                    data-aos-mirror="true"
                                                    data-aos-once="false"
                                                    data-aos-anchor-placement="bottom">
                <div className="page7_step1"> SERVICE STEP.</div>
                <div className="page7_step1_text">: DRAWER :<br/></div>
                <div className="page7_step1_text2"
                                                    data-aos="fade-up"
                                    data-aos-offset="150"
                                    data-aos-delay="700"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-in-out"
                                    data-aos-mirror="true"
                                    data-aos-once="false"
                                    data-aos-anchor-placement="bottom">
                      다양한 분야 전문가들의 검수와 인증<br/>
                      세월과 기억을 담은 감각적인 마케팅 서비스<br/>
                      서랍페이로 믿을 수 있는 거래, 그리고 역경매 시스템</div>
                    </div>
                <div 
                data-aos="fade-up"
                data-aos-offset="150"
                data-aos-delay="500"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="bottom"
                id="page7_cha" className="flex just-around w-80vw h-60vh">
                    <div className="font-gray text-left">
                        <div class="item" style={{backgroundImage:'url("/pic/open_pic/005png.PNG")'}}>
                        </div>
                        <h5 className="font-size-20 margin-0 margin-top-10">음악 전문가</h5>
                    </div>
                    <div className="font-gray text-left">
                    <div class="item" style={{backgroundImage:'url("/pic/open_pic/004png.PNG")'}}>
                        </div>
                        <h5 className="font-size-20 margin-0 margin-top-10">도서 전문가</h5>
                    </div>
                    <div className="font-gray text-left">
                    <div class="item" style={{backgroundImage:'url("/pic/open_pic/002png.PNG")'}}>
                    <div className="page7_name"> &nbsp; &nbsp; 클릭하여 정보를 확인하세요!</div></div>
                        <h5 className="font-size-20 margin-0 margin-top-10"> 명품 전문가</h5>
                    </div>
                    <div className="font-gray text-left">
                    <div class="item" style={{backgroundImage:'url("/pic/open_pic/003png.PNG")'}}>
                        </div>
                        <h5 className="font-size-20 margin-0 margin-top-10">가구 전문가</h5>
                    </div>
                    <div className="font-gray text-left">
                    <div class="item" style={{backgroundImage:'url("/pic/open_pic/001png.PNG")'}}>
                        </div>
                        <h5 className="font-size-20 margin-0 margin-top-10">디지털 전문가</h5>
                    </div>
                </div>
                <div className="page7_last_text"
                                data-aos="fade-up"
                                data-aos-offset="150"
                                data-aos-delay="500"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false"
                                data-aos-anchor-placement="center-bottom">
당신의 물건은 여전히 그 가치를 품고 있음을 알기에<br/>
그 값어치를 할 수 있도록 저희 서랍은 최선을 다합니다.  <br/></div>

            </div>
        </div>
    );
}

export default Open_page7;