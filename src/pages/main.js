/* 
-------------------------------------------------------------------------
	파일명		: main.js
	설명		: 메인 페이지
	담당자		: 박효연
	개발날짜	: 2023/12/10
-------------------------------------------------------------------------
*/

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-spring-3d-carousel';
import { useSpring, animated, config } from 'react-spring';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import './main.css';

// npm i react-spring-3d-carousel react-spring

const Mainpage = () => {
	const slides = [
	  {
		key: 1,
		content: (
		  <div className="contents_1">
			<div className="prodImg_1">
			  <img src="/pic/main_pic/canon.png" alt="이미지"/>
			</div>
			<div className="desc_one">
			  <div className='desc_1'>색감을 담으세요</div>
			  <div className='desc_2'>CANON-OG Camera.</div>
			  <Link to='/premium' className='desc_3'>바로가기 &gt;</Link>
			</div>
		  </div>
		),
	  },
	  {
		key: 2,
		content: (
		  <div className="contents_2">
			<div className="prodImg_2">
				<img src="/pic/main_pic/jewelbox.png" alt="이미지2"/>
			</div>
			<div className="desc_two">
				<div  className='desc_1'>보석을 담으세요</div>
				<div className='desc_2'>PEARL JEWEL BOX</div>
				<div className='desc_3'>바로가기 &gt;</div>
			</div> 
			</div>
		),
	  },
	  {
		key: 3,
		content: (
		  <div className="contents_3">
			<div className="prodImg_3">
			  <img src="/pic/main_pic/lamp.png" alt="이미지3"/>
			</div>
			<div className="desc_three">
			  <div className='desc_1'>빛을 느껴보세요</div>
			  <div className='desc_2'>PEARL JEWEL BOX</div>
			  <div className='desc_3'>바로가기 &gt;</div>
			</div> 
			</div>
		),
	  },
	  {
		key: 4,
		content: (
		  <div className="contents_4">
			<div className="prodImg_4">
			  <img src="/pic/main_pic/teacup.png" alt="이미지4"/>
			</div>
			<div className="desc_four">
			  <div className='desc_1'>마음을 담으세요</div>
			  <div className='desc_2'>CANON-OG Camera.</div>
			  <div className='desc_3'>바로가기 &gt;</div>
			</div>
		  </div>
		),
	  },
	];
  
	const [currentSlide, setCurrentSlide] = useState(0); // 인덱스 번호
  
	const nextSlide = () => {
	  setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
	};
  
	const prevSlide = () => {
	  setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
	};
  
	useEffect(() => {
	  const intervalId = setInterval(nextSlide, 6000);
  
	  return () => clearInterval(intervalId);
	}, []);
  
	const springProps = useSpring({
	  from: { opacity: 0, transform: 'scale(0.5)' }, // 초기 상태
	  to: { opacity: 1, transform: 'scale(1)' }, // 끝날 때 상태
	  config: config.molasses // 천천히 슬라이딩 되도록
	});
  
	const handleSlideClick = (index) => {
	  setCurrentSlide(index);
	};
  
	return (
	  <div className="carouselContainer">
		<IoIosArrowBack className='moveBtn' onClick={prevSlide}/>
		<Carousel
		  slides={slides}
		  goToSlide={currentSlide}
		  animationConfig={springProps}
		  // onClick={handleSlideClick}
		/>
		{slides.map((slide, index) => (
		  <div
			key={slide.key}
			className={`description ${index === currentSlide ? 'visible' : 'hidden'}`}
			// onClick={() => handleSlideClick(index)}
		  >
			{slide.content.props.children[1].props.children}
		  </div>
		))}
		<IoIosArrowForward className='moveBtn' onClick={nextSlide}/>
	  </div>
	);
  };
  
  export default Mainpage;