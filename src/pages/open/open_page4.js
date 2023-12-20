import  React from "react";
import TypeIt from "typeit-react";
import './open_page4.css';

const Open_page4 = () => {
    return (
        <div className="page4_full">
            <div 
            data-aos="fade-up"
            data-aos-offset="150"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top"
            className="typelt">
            <TypeIt
            
                getBeforeInit={(instance) => {
                instance.type("오래된 것들.").pause(750)
                .delete(7).pause(500).type("중고.").pause(750)
                .delete(3).pause(600).type("헌것, 폐품.").pause(750)
                .delete(7).pause(500).type("쓸수없는.").pause(750)
                .delete(6).pause(600).type("사용할 수 없는.").pause(750)
                .delete(10).pause(600).type("고물.").pause(750)
                .delete(3).pause(600).type().pause(500)
                ;

                return instance}}
/>
            </div>
        </div>
    );
}
            {/* <div className="open-wrap h-100vh bg-black">
                <div className="w-100vw h-20vh flex">
                    <div><h1 className="font-white">오래된것들</h1></div>
                    <div><h1 className="font-white">역경매</h1></div>
                    <div><h1 className="font-white">중고</h1></div>
                </div>
                <div className="w-100vw h-20vh flex">
                    <div><h1 className="font-white">추억</h1></div>
                    <div><h1 className="font-white">헌것</h1></div>
                    <div><h1 className="font-white">폐품</h1></div>
                </div>
                <div className="w-100vw h-20vh flex">
                    <div><h1 className="font-white">쓸수없는</h1></div>
                    <div><h1 className="font-white">사용할수없는</h1></div>
                </div>
                <div className="w-100vw h-20vh flex">
                    <div><h1 className="font-white">고물</h1></div>
                    <div><h1 className="font-white">마케팅</h1></div>
                </div>
            </div> */}

export default Open_page4;

