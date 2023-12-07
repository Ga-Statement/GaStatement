import  React from "react";

const Open_page6 = () => {
    return (
        <div>
            <div className="open-wrap h-100vh flex align-down">
                <div className="w-100vw h-80vh flex just-around">
                    <video muted autoPlay loop>
                        <source src="/pic/open_pic/statement.mp4" type="video/mp4" />
                    </video>
                    <div className="w-40vw h-80vh flex flex-col align-down">
                        <h1 className="font-size-80 font-normal margin-0">잊혀진 서랍속을</h1>
                        <h1 className="font-size-80 font-normal margin-0">열어보세요</h1>
                        <h3 className="font-size-40 font-normal font-gray margin-0">잠들어있는 당신의 추억을</h3>
                        <h3 className="font-size-40 font-normal font-gray margin-0">포장해드립니다.</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Open_page6;