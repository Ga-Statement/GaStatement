import  React from "react";
import './open_page6.css';
import gsap from 'gsap';

const Open_page6 = () => {
    return (
        
        <div>
            <div className="open-wrap h-100vh flex align-down">
                <div className="w-100vw h-80vh flex just-around">
                    <video muted autoPlay loop
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="40"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top">
                        <source src="/pic/open_pic/statement.mp4" type="video/mp4" />
                    </video>
                    <div id="page6_move" className="w-40vw h-80vh flex flex-col align-down">
                        <div className="flex-col"
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-delay="10"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top">
                        <div className="page6_main1">잊혀진 서랍속을</div>
                        <div className="page6_main2">열어보세요</div>
                        <div id="page6_text">잠들어있는 당신의 추억을 포장해드립니다.</div>
                        <div className="page6_text2">
                            기억명세서는 기억과 기억을 연결합니다.<br/><br/>

                            책장에 오랫동안 자리를 지키고 있는 절판된 책,<br/>
                            그 시절 아버지의 청춘을 책임지던 LP판,<br/>
                            유럽 여행 중 벼룩시장에서 우연히 발견한 손때 묻은 오르골, 
                            <br/>…
                            <br/><br/>

                            당신의 기억 속 주연으로 조연으로 함께한 물건을 기다립니다.<br/>
                            지금도 그 쓰임으로 가치를 증명하며, 세월이라는 이름으로 새로이 칠해져<br/>
                            <br/> <br/> 
                            <strong><h2>기억명세서에서 이제는 <br/>누군가의 기억으로 갈 준비를 합니다.</h2></strong></div>
                        </div>
                    </div>
                
                </div>
            </div>
            </div>
    );
}

export default Open_page6;