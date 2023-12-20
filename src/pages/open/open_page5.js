import  React from "react";
import './open_page5.css';
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";

const Open_page5 = () => {
    
    return (
        <div className="page5">
            <div className="open-title w-100vw h-75vh bg-white">
                <div>
                    <div>
                        <h3 className="font-size-70 h-10vh margin-0">New create</h3>
                    </div>
                    <div>
                        <h1 className="font-size-150 h-20vh margin-0">기억명세서</h1>
                    </div>
                    <div>
                        <h5 className="font-size-70 h-10vh margin-20 font-lighter">를 만나 새로워집니다.</h5>
                    </div>
                </div>
            </div>
            <div className="black_one"></div>

                <div className="black_two"></div>
        </div>
    );
}

export default Open_page5;