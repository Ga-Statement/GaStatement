import React, { useState, useEffect } from "react";
import anime from 'animejs';
import './drawer_page1.css';

const Drawer_page1 = () => {
    const [animationExecuted, setAnimationExecuted] = useState(false);

    useEffect(() => {
        if (!animationExecuted) {
            const animation = anime({
                targets: '.line',
                scaleY: [0, 1],
                easing: 'easeInOutQuad',
                duration: 2500,
                loop: false
            });

            animation.finished.then(() => {
                setAnimationExecuted(true);
            });

            return () => {
                animation.pause();
            };
        }
    }, [animationExecuted]);

    return(
        <div>
            <div className="DrawerPage1">
                <div className="DrawerPage1_list">
                    <div className="DrawerPage1_1">open</div>
                    <div className="DrawerPage1_2">서랍</div>
                    <div className="DrawerPage1_3">DRAWERS</div>
                    <svg width="100" height="280" className="svg">
                        <circle className="circle" cx="50" cy="7" r="7" fill="white" stroke="black" strokeWidth="1" />
                        <line className="line" x1="50" y1="7" x2="50" y2="280" stroke="white" strokeWidth="1"/>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Drawer_page1;