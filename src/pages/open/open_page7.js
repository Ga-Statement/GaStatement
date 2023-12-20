import React, { useState, useEffect } from "react";
import TextChange from "../../components/textchange";

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

            if (newScrollPercent > 60) {
                setTextChangeStart(true)
                // console.log("스크롤 위치가 98%를 넘었습니다.");
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className="open-wrap open-title flex-col h-100vh bg-black">
                <div className="open-title flex-col h-30vh">
                    <h1 className="font-size-150 h-20vh margin-0 font-white">{textChangeStart && <TextChange/>}</h1>
                    <h3 className="font-size-50 h-20vh margin-0 font-gray font-normal">각 분야의 전문가와 함께 합니다.</h3>
                </div>
                <div className="flex just-around w-80vw h-30vh">
                    <div className="font-gray text-left">
                        <img src="/pic/open_pic/005png.png" alt="" />
                        <h5 className="font-size-20 margin-0 margin-top-10">가구 전문가</h5>
                        <h5 className="font-size-20 margin-0">이정윤</h5>
                    </div>
                    <div className="font-gray text-left">
                        <img src="/pic/open_pic/004png.PNG" alt="" />
                        <h5 className="font-size-20 margin-0 margin-top-10">명품 전문가</h5>
                        <h5 className="font-size-20 margin-0">이주원</h5>
                    </div>
                    <div className="font-gray text-left">
                        <img src="/pic/open_pic/002png.PNG" alt="" />
                        <h5 className="font-size-20 margin-0 margin-top-10">전자기기 전문가</h5>
                        <h5 className="font-size-20 margin-0">박현응</h5>
                    </div>
                    <div className="font-gray text-left">
                        <img src="/pic/open_pic/003png.PNG" alt="" />
                        <h5 className="font-size-20 margin-0 margin-top-10">도서 전문가</h5>
                        <h5 className="font-size-20 margin-0">박효연</h5>
                    </div>
                    <div className="font-gray text-left">
                        <img src="/pic/open_pic/001png.PNG" alt="" />
                        <h5 className="font-size-20 margin-0 margin-top-10">카메라 전문가</h5>
                        <h5 className="font-size-20 margin-0">김진수</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Open_page7;