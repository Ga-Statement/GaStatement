import  React from "react";
import "./open_page1.css";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
// Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut
import { TfiMouse } from "react-icons/tfi";
import { Aos } from "aos";

const Open_page1 = () => {
    return (
        <div className="margin-0">
            <div id="img_box" className="open-wrap h-100vh margin-0">
                <ScrollContainer>
                    <ScrollPage>
                        <div className="flex just-around">
                            <div id="div1">
                                <Animator animation={batch( MoveOut(-700, -700))}>
                                    <img id="img1" style={{position:'fixed', left:-130, top:-90}} className="w-10vw h-40vh" src="/pic/open_pic/pic_6.png" alt="" />
                                </Animator>
                            </div>
                            <div>
                                <Animator animation={batch( MoveOut(-150, -700))}>
                                    <img id="img2" className="w-20vw h-40vh" style={{position:'fixed', top:20, left:-70}} src="/pic/open_pic/pic_7.png" alt="" />
                                </Animator>
                            </div>
                            <div>
                                <Animator animation={batch( MoveOut(-20, -700))}>
                                    <img id="img4" className="w-20vw h-30vh" style={{position:'fixed', top:-100}} src="/pic/open_pic/pic_0.png" alt="" />
                                </Animator>
                            </div>
                            <div>
                                {/* Sticky() 기본값 50%, 50% */}
                                <Animator animation={batch(Sticky(50, 10))}>
                                    <img id="img3" className="open-Ldiv" src="/pic/open_pic/logo_1.png" alt="" />
                                </Animator>
                            </div>
                            <div>
                                <Animator animation={batch( MoveOut(150, -700))}>
                                    <img id="img5" className="w-20vw h-30vh" src="/pic/open_pic/pic_1.png" alt="" />
                                </Animator>
                            </div>
                            <div>
                                <Animator animation={batch( MoveOut(700, -700))}>
                                    <img id="img_camera" style={{position:'fixed', top: -100, right:-200}}src="/pic/open_pic/pic_8.png" alt="" />
                                </Animator>
                            </div>
                        </div>

                        <div className="just-center w-100vw h-30vh">
                            <div id="text_wrap"     
                                data-aos="fade-up"
                                data-aos-offset="350"
                                data-aos-delay="50"
                                data-aos-duration="700"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="false"
                                data-aos-anchor-placement="top-center"
>
                                <Animator animation={(Sticky(50, 50))}>
                                    <div style={{}}>
                                        <h2 id="OPEN" className="font-size-70 font-normal margin-0">open.</h2>
                                    </div>
                                    <div>
                                        <h1 style={{}} id="DRAWER" className="font-size-280 margin-0">DRAWER</h1>
                                    </div>
                                </Animator>
                            </div>
                        </div>
                        
                        <div className="flex just-around">
                            <div style={{position: 'fixed', left: -150, bottom:200}}>
                                <Animator animation={batch( MoveOut(-2500, 1200))}>
                                    <img id="img6" className="w-20vw h-30vh" src="/pic/open_pic/pic_9.png" alt="" />
                                </Animator>
                            </div>
                            <div style={{position: 'fixed', left: -100, bottom:-100}}>
                                <Animator animation={batch( MoveOut(-500, 800))}>
                                    <img id="img7" className="w-20vw h-30vh" src="/pic/open_pic/pic.png" alt="" />
                                </Animator>
                            </div>
                            <div style={{position: 'fixed', left:500, bottom:-30}}>
                                <Animator animation={batch( MoveOut(-150, 1200))}>
                                    <img id="img8" className="w-20vw h-40vh" src="/pic/open_pic/jang.png" alt="" />
                                </Animator>
                            </div>
                            <div style={{position: 'fixed', left:180, bottom:10}}>
                                <Animator animation={batch( MoveOut(-450, 1200))}>
                                    <img id="img9" className="w-20vw h-30vh" src="/pic/open_pic/char.png" alt="" />
                                </Animator>
                            </div>
                            <div id="mouse_logo">
                                {/* Sticky() 기본값 50%, 50% */}
                                <Animator animation={batch(Sticky(50, 95))}>
                                    <TfiMouse/>
                                </Animator>
                            </div>
                            <div style={{position: 'fixed', right:300, bottom:-50}}>
                                <Animator animation={batch( MoveOut(600, 1600))}>
                                    <img id="img10" className="w-20vw h-30vh" src="/pic/open_pic/pic_10.png" alt="" />
                                </Animator>
                            </div>
                            <div style={{position: 'fixed', right: 500}}>
                                <Animator animation={batch( MoveOut(150, 1800))}>
                                    <img id="img11" className="w-20vw h-30vh" src="/pic/open_pic/pic_5.png" alt="" />
                                </Animator>
                            </div>
                            <div style={{position: 'fixed', right: 0}}>
                                <Animator animation={batch( MoveOut(700, 1800))}>
                                    <img id="img12" className="w-30vw h-30vh" src="/pic/open_pic/pic_4.png" alt="" />
                                </Animator>
                            </div>
                            <div style={{position: 'fixed', right: -130, bottom: -90}}>
                                <Animator animation={batch( MoveOut(900, 1400))}>
                                    <img id="img13" className="w-20vw h-30vh" src="/pic/open_pic/mir.png" alt="" />
                                </Animator>
                            </div>
                            <div style={{position: 'fixed', right: -130, bottom: 230}}>
                                <Animator animation={batch( MoveOut(900, 1400))}>
                                    <img id="img14" className="w-20vw h-20vh" src="/pic/open_pic/pic_3.png" alt="" />
                                </Animator>
                            </div>
                        </div>
                    </ScrollPage>
                </ScrollContainer>
            </div>
            <div className="open-wrap h-100vh margin-0"></div>
        </div>
    );
}

export default Open_page1;