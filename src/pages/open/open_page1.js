import  React from "react";
import { Animator, ScrollContainer, ScrollPage, batch, MoveOut, Sticky } from "react-scroll-motion";
// Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut

const Open_page1 = () => {
    return (
        <div>
            <div className="open-wrap h-100vh">
                <ScrollContainer>
                    <ScrollPage>
                        <div className="flex just-around">
                            <div>
                                <Animator animation={batch( MoveOut(-700, -700))}>
                                    <img className="w-20vw h-30vh" src="/pic/open_pic/pic_6.png" alt="" />
                                </Animator>
                            </div>
                            <div>
                                <Animator animation={batch( MoveOut(-150, -700))}>
                                    <img className="w-20vw h-30vh" src="/pic/open_pic/pic_7.png" alt="" />
                                </Animator>
                            </div>
                            <div>
                                {/* Sticky() 기본값 50%, 50% */}
                                <Animator animation={batch(Sticky(50, 10))}>
                                    <img className="open-Ldiv" src="/pic/open_pic/logo_1.png" alt="" />
                                </Animator>
                            </div>
                            <div>
                                <Animator animation={batch( MoveOut(150, -700))}>
                                    <img className="w-20vw h-30vh" src="/pic/open_pic/pic_1.png" alt="" />
                                </Animator>
                            </div>
                            <div>
                                <Animator animation={batch( MoveOut(700, -700))}>
                                    <img className="w-20vw h-30vh" src="/pic/open_pic/pic_8.png" alt="" />
                                </Animator>
                            </div>
                        </div>

                        <div className="just-center w-100vw h-30vh flex">
                            <div className="open-title w-60vw h-30vh flex-col">
                                <Animator animation={batch(Sticky())}>
                                    <div>
                                        <h3 className="font-size-50 h-10vh margin-0 margin-bottom-d50 font-normal">OPEN</h3>
                                    </div>
                                    <div>
                                        <h1 className="font-size-150 h-20vh margin-0">DRAWER</h1>
                                    </div>
                                    <div>
                                        <h5 className="font-size-30 h-5vh margin-0 font-lighter">기억명세서</h5>
                                    </div>
                                </Animator>
                            </div>
                        </div>
                        <div className="flex just-around">
                            <div style={{position: 'fixed', left: 50}}>
                                <Animator animation={batch( MoveOut(-700, 1800))}>
                                    <img className="w-20vw h-30vh" src="/pic/open_pic/pic_9.png" alt="" />
                                </Animator>
                            </div>
                            <div style={{position: 'fixed', left: 500}}>
                                <Animator animation={batch( MoveOut(-150, 1800))}>
                                    <img className="w-20vw h-30vh" src="/pic/open_pic/pic_3.png" alt="" />
                                </Animator>
                            </div>
                            <div>
                                {/* Sticky() 기본값 50%, 50% */}
                                <Animator animation={batch(Sticky(50, 80))}>
                                    <img className="w-5vw h-10vh margin-top-100" src="/pic/open_pic/down.png" alt="" />
                                </Animator>
                            </div>
                            <div style={{position: 'fixed', right: 500}}>
                                <Animator animation={batch( MoveOut(150, 1800))}>
                                    <img className="w-20vw h-30vh" src="/pic/open_pic/pic_5.png" alt="" />
                                </Animator>
                            </div>
                            <div style={{position: 'fixed', right: 50}}>
                                <Animator animation={batch( MoveOut(700, 1800))}>
                                    <img className="w-20vw h-30vh" src="/pic/open_pic/pic_4.png" alt="" />
                                </Animator>
                            </div>
                        </div>
                    </ScrollPage>
                </ScrollContainer>
            </div>
            <div className="open-wrap h-100vh"></div>
        </div>
    );
}

export default Open_page1;