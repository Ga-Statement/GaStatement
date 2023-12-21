import React from "react";
import { Link } from "react-router-dom";

const Open_page8 = () => {
    return (
        <div>
            <div className="open-title flex-col h-100vh bg-black">
                <Link to="/main"><img src="/pic/open_pic/open_page_last.gif" alt="" /></Link>
                <Link to="/main" style={{textDecoration: 'none'}}>
                    <h5 className="font-size-20 font-lighter font-white">서랍 열기</h5>
                </Link>
            </div>
        </div>
    );
}

export default Open_page8;