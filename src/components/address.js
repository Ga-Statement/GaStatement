/* 
-------------------------------------------------------------------------
	파일명		: address.js
	설명		: 다음 주소 API
	담당자		: 박효연
	개발날짜	: 2023/12/09
-------------------------------------------------------------------------
*/

import DaumPostcode from 'react-daum-postcode';
import { useState } from 'react';
import './address.css';

// npm install react-daum-postcode

const Address = ({setAddress}) => {
    const [address, setLocalAddress] = useState('');

    const openPostcode = (data) => {
        setLocalAddress(data.address);
        setAddress(data.address);
    };

    const onClosePostcode = () => {
    };
        
    const openAddress = () => {
        new window.daum.Postcode({
            onComplete: openPostcode,
            onClose: onClosePostcode
        }).open();
        setLocalAddress(true);
    };

    return (
        <>
            <DaumPostcode className='daumAddress'/>
            <button className='searchAddress' onClick={openAddress}>주소검색</button>
        </>
    );
}

export default Address;
