import  React from "react";
import "./open_page1.css";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
// Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut
import { Aos } from "aos";
import { motion } from "framer-motion";
import { GiExitDoor } from "react-icons/gi";
import { Link } from "react-router-dom";

const Open_page1 = () => {
    return (
        <div>
        <div className='pageone_wrap'>
        <ScrollContainer>
          <ScrollPage>
        <div className="gird_wrap">
          <motion.div className="girdbox1"
          animate={{x:[-90,-10, -20], y:[-80, -10, -40]}}
          transition={{
            duration: 1,
            ease: "easeOut"
          }}>
                  <Animator animation={batch( MoveOut(-150, -700))}>
                  <img className='box1_img' src="pic/open_pic/web_light.webp" alt="" />
                  </Animator>
          </motion.div>
          <motion.div className="girdbox2"
          initial={{x:-160}}
          animate={{x:-160, y:[-90, -20, -30]}}
          transition={{
            duration: 1,
            ease: "easeOut"}}>
                    <Animator animation={batch( MoveOut(-150, -700))}>
                  <img className='box2_img' src="pic/open_pic/web_book.webp" alt="" />
                    </Animator>
          </motion.div>
          <motion.div className="girdbox3"
                initial={{x:-80}}
                animate={{x:-80, y:[-80, -30, -40]}}
                transition={{
                  duration: 1,
                  ease:"easeOut"}}>
                    <Animator animation={batch( MoveOut(-10, -300))}>
                    <img className='box3_img' src="pic/open_pic/web_hang.webp" alt="" />
                    </Animator>
          </motion.div>
          <motion.div className="girdbox4"
          initial={{scale:1, x:120}}
          animate={{x:120 ,y:[-80,110,100], scale:[2]}}
          transition={{
            duration:1,
            ease: "easeOut"
          }}>
            <Animator animation={batch( MoveOut(150, -300))}>
            <img className='box4_img' src="pic/open_pic/web_pic2.webp" alt="" />
            </Animator>
          </motion.div>
          <motion.div className="girdbox5"
                initial={{x:90, y:-80}}
                animate={{x:[90,30,40]}}
                transition={{
                duration:1,
                ease: "easeOut"}}
                >
                  <Animator animation={batch( MoveOut(400, -300))}>
            <img className='box5_img' src="pic/open_pic/web_water_bottle.webp" alt="" />
                  </Animator>
          </motion.div>
      {/* 상단박스 END ------------------------------------------------- */}
          <motion.div className="girdbox6"
                initial={{x:-80, y:40}}
                animate={{x:[-80, -10, -20], y:40}}
                transition={{
                  duration:1,
                  ease: "easeOut"
                }}>
            <Animator animation={batch( MoveOut(-750, 200))}>
            <img className='box6_img' src="pic/open_pic/web_chair.webp" alt="" />
            </Animator>
          </motion.div>

    <div className="Word">
    </div>
          <div className="girdbox7">
            <div className='font_wrap'>
<div className="text_open"> open. </div>
<div className="text_drawer"> DRAWER </div>
<Link to="/main">
<div className="text_putin"> <GiExitDoor size={55}/></div>
</Link>
            </div>
          </div>
          <motion.div className="girdbox8"
                        initial={{x:150}}
                animate={{x:[300, 160, 170]}}
                transition={{
                  duration:1,
                  ease: "easeOut"
                }}>
            <Animator animation={batch( MoveOut(500, 100))}>
            <img className='box8_img' src="pic/open_pic/web_camera1.webp" alt="" />
            </Animator>
          </motion.div>
          <motion.div className='gridbox8_1'
                                  initial={{x:0}}
                                  animate={{x:[0, -100, -80]}}
                                  transition={{
                                    duration:1,
                                    ease: "easeOut"}}>
          <Animator animation={batch( MoveOut(500, 900))}>
            <img className="box8_1_img" src="pic/open_pic/web_table.webp" alt="" />
            </Animator>
          </motion.div>
        </div>
      {/* 중간박스 END -------------------------------------------------*/}
      <div className="endbox_wrap">
          <motion.div className="girdbox9"
                      initial={{x:-20, y:0}}
                      animate={{x:[-20, 20, -30], y:[0, -150, -140]}}>
          <Animator animation={batch( MoveOut(-1000, -100))}>
            < img className='box9_img' src="pic/open_pic/web_pic1.webp" alt="" />
          </Animator>
          </motion.div>
          <motion.div className="girdbox10"
              initial={{y:50}}
              animate={{y:[50,-60,-50]}}
              transition={{
              duration:1,
              ease: "easeOut"}}>
          <Animator animation={batch( MoveOut(-500, 800))}>
            <img className='box10_img' src="pic/open_pic/web_jang2.webp" alt="" />
          </Animator>
          </motion.div>
          <motion.div className="girdbox11"
          initial={{y:0}}
          animate={{y:[0,-100,-90]}}
          transition={{
          duration:1,
          ease: "easeOut"}}>
                      <Animator animation={batch( MoveOut(-100, 500))}>
            <img className='box11_img' src="pic/open_pic/web_chair3.webp" alt="" />
            </Animator>
          </motion.div>
          <motion.div className="girdbox12"
          initial={{y:-20, x:-80}}
          animate={{y:[-40, -180, -160], x:-80}}>
            <Animator animation={batch ( MoveOut(50, 800))}>
            <img className='box12_img' src="pic/open_pic/web_pur.webp" alt="" />
            </Animator>
          </motion.div>
          <motion.div className="girdbox13"
          animate={{y:[70, -140, -120]}}>
          <Animator animation={batch( MoveOut(360, 360))}>
            <img className='box13_img' src="pic/open_pic/web_jang.webp" alt="" />
          </Animator>
          </motion.div>
          <motion.div className="girdbox14"
          initial={{x:20}}
          animate={{x:[20,-30,-20],y:[70, -140, -120]}}>
          <Animator animation={batch( MoveOut(360, 360))}>
            <img className='box14_img' src="pic/open_pic/web_hang2.webp" alt="" />
          </Animator>
          </motion.div>
        </div>
        </ScrollPage>
        </ScrollContainer>
        </div>
        <div className="black"></div>
        </div>
      );
    }


export default Open_page1;