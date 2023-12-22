/* 
-------------------------------------------------------------------------
	파일명		: admin.js
	설명		: 개발자 페이지
	담당자		: 김진수
	개발날짜	: 2023/12/15
-------------------------------------------------------------------------
*/

import React, { useState, useEffect } from "react";
import axios from "axios";
import './admin.css';

const Admin = () => {
    const [ userData, setUserData ] = useState({});
    const [ pdData, setPdData ] = useState({});

    console.log("userData : ", userData);
    console.log("pdData : ", pdData);

    const adminUserData = async () => {
        const { data } = await axios.get(
            `http://REACT_APP_HJ_TEST_IP:3000/user/admin/admin_user`
        );
        setUserData(data);
    }

    const adminPdData = async () => {
        const { data } = await axios.get(
            `http://REACT_APP_HJ_TEST_IP:3000/product/admin/admin_product`
        );
        setPdData(data);
    }

    useEffect(() => {
        adminUserData();
        adminPdData();
    }, []);

    return (
        <div>
            <div className="w-100vw h-50vh">
                <table className="table">
                    <thead>
                        <tr>
                            <th>유저 NO</th>
                            <th>유저 아이디</th>
                            <th>유저 패스워드</th>
                            <th>유저 이름</th>
                            <th>유저 분류</th>
                            <th>유저 회원상태</th>
                            <th>유저 전화번호</th>
                            <th>유저 주소</th>
                            <th>유저 상세주소</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.values(userData).map((user) => (
                            <tr key={user.userNO}>
                                <td>{user.userNO}</td>
                                <td>{user.userID}</td>
                                <td>{user.userPW}</td>
                                <td>{user.userName}</td>
                                <td>{user.userRole === 0 ? '관리자' : '유저'}</td>
                                <td>{user.userStat === 0 ? '회원 탈퇴' : '회원 가입'}</td>
                                <td>{user.userPhone}</td>
                                <td>{user.userAdd}</td>
                                <td>{user.userSubAdd}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="w-100vw h-50vh">
                <table className="table">
                    <thead>
                        <tr>
                            <th>상품 NO</th>
                            <th>상품명</th>
                            <th>상품 브랜드</th>
                            <th>상품 년도</th>
                            <th>상품 최고가격</th>
                            <th>상품 상태</th>
                            <th>상품 담당 전문가</th>
                            <th>상품 패키지</th>
                            <th>상품 이미지</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.values(pdData).map((pd) => (
                            <tr key={pd.pdNO}>
                                <td>{pd.pdNO}</td>
                                <td>{pd.pdName}</td>
                                <td>{pd.pdBrand}</td>
                                <td>{pd.pdYears}</td>
                                <td>{pd.pdMaxPrice}</td>
                                <td>{pd.pdState}</td>
                                <td>{pd.pdMaster}</td>
                                <td>{pd.pdPackage === 0 ? '기본 마케팅' : '프리미엄 마케팅'}</td>
                                <td>{pd.pdImage}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admin;