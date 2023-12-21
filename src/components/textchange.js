/* 
-------------------------------------------------------------------------
	파일명		: textchange.js
	설명		: 글자 변화 애니메이션
	담당자		: 박효연
	개발날짜	: 2023/12/09
-------------------------------------------------------------------------
*/

import React, { useState, useEffect } from 'react';

const TextChange = () => {
    const [text, setText] = useState('');
    const [counter, setCounter] = useState(0);

    // 컴포넌트의 LifeCycle마다 어떤 동작을 수행할 것인지?
    // (마운트될 때, 업데이트 될 때, 언마운트 될 때)
    // 컴포넌트가 렌더링 될 때마다 특정한 동작을 수행하도록
    useEffect(() => {
        const characters =  ['헌 것', '폐 품', '중 고', '추 억', '고 물', '기 억', '모든것'];
        const randomText = setInterval(() => {
        // setInterval: "시간(ms)"을 간격으로 "콜백함수"를 반복 호출 하는 함수
            if (counter === 20) {
                setText('"서 랍"');
                clearInterval(randomText);
                // clearInterval(변수)를 호출하여 반복을 중단
            } else {
                const randomChars = characters[Math.floor(Math.random() * characters.length)]
                // Math.random : 0~1(1은 미포함) 구간에서 부동소수점의 난수를 생성
                // Math.floor : 내림
                setText(randomChars);
                setCounter((prevCounter) => prevCounter + 1)
                // prevState는 컴포넌트의 이전 상태를 기반으로 함
                // 단어가 한 번 나올 때마다 1씩 증가
            };
        }, 40); // 1000ms = 1s

        return () => clearInterval(randomText);
        // return을 사용하지 않으면 새로운 useEffect를 수행하기 전에 아무런 작업을 하지 않는 것으로 인식
        // clearInterval을 해주지 않으면 메모리가 낭비될 수 있으므로
        // 컴포넌트가 끝나면 중단할 수 있게 clearInterval 사용
        // else문에는 clearInterval이 없음
    }, [text, counter]);
    // []를 넣으면 초기 페이지가 로딩되고 처음 한 번만 실행
    // [text]를 넣어서, text값이 변할 때마다 실행되도록 설정 - 의존성 배열

    return (
        <div>{text}</div>
    );
};

export default TextChange;
