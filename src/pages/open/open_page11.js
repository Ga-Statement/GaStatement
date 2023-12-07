import React from "react";
import { Link } from "react-router-dom";

const Open_page11 = () => {
    return (
        <div>
            <div className="open-title flex-col h-100vh">
                <Link to="/"><img src="/pic/open_pic/logo_1.png" alt="" /></Link>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <h5 className="font-size-40 font-lighter font-black margin-0 margin-top-30">서랍 열기</h5>
                </Link>
            </div>
        </div>
    );
}

export default Open_page11;