/* 
-------------------------------------------------------------------------
	파일명		: shop.js
	설명		: shop 페이지
	담당자		: 박효연
	개발날짜	: 2023/12/09
-------------------------------------------------------------------------
*/

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './shop.css';

const useHorizontalScroll = () => {
  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = (e) => {
        if (e.deltaY === 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY*6,
          behavior: "smooth",
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return elRef;
}

const ShopPage = () => {
  const containerRef = useHorizontalScroll();
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  const handleMouseDown = (e) => {
    const isImage = e.target.classList.contains('product_img') || e.target.classList.contains('product_img_2') || e.target.classList.contains('product_img_3') || e.target.classList.contains('product_img_4') || e.target.classList.contains('product_img_5') || e.target.classList.contains('product_img_6') || e.target.classList.contains('product_img_7') || e.target.classList.contains('product_img_8');

    if (!isImage) {
      setDragging(true);
      setDragStart({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      const moveX = e.clientX - dragStart.x;
      const moveY = e.clientY - dragStart.y;
  
      // 좌우 스크롤
      containerRef.current.scrollLeft -= moveX;
  
      // 위아래 스크롤
      containerRef.current.scrollTop -= moveY;
  
      setDragStart({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div className='product_list' ref={containerRef} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp} onMouseMove={handleMouseMove}>
        <div className="product_container_9">
          <Link to='#' className='product_link'><img className="product_img_9" src="/pic/shop_pic/table.webp" alt="" /></Link> 
          <div prod_title="Hansen Table" className="product_name_9">
            Hansen Table
          </div>
          <div className="product_sub_name_9">
            Hansen Table
          </div>
        </div>
        <div className="product_container_1">
          <Link to='/premium1' className='product_link'><img className="product_img" src="/pic/shop_pic/canon.webp" alt=""/></Link> 
          <div prod_title="CANON-OG Camera." className="product_name">
            CANON-OG Camera.
          </div>
          <div className="product_sub_name_1">
            CANON-OG Camera.
          </div>
        </div>
        <div className="product_container_2">
          <Link to='/premium2' className='product_link'><img className="product_img_2" src="/pic/shop_pic/cup.webp" alt=""/></Link> 
          <div prod_title="Noritake Duetto" className="product_name_2">
            Noritake Duetto
          </div>
          <div className="product_sub_name_2">
            Noritake Duetto
          </div>
        </div>
        <div className="product_container_3">
          <Link to='/standard1' className='product_link'><img className="product_img_3" src="/pic/shop_pic/book.webp" alt="" /></Link> 
          <div prod_title="THE Passion within" className="product_name_3">
            THE Passion within
          </div>
          <div className="product_sub_name_3">
            THE Passion within
          </div>
        </div>
        <div className="product_container_4">
          <Link to='/standard2' className='product_link'><img className="product_img_4" src="/pic/shop_pic/LP.webp" alt="" /></Link> 
          <div prod_title="The Beatles 1st LP" className="product_name_4">
            The Beatles 1st LP
          </div>
          <div className="product_sub_name_4">
            The Beatles 1st LP
          </div>
        </div>
        <div className="product_container_5">
          <Link to='#' className='product_link'><img className="product_img_5" src="/pic/shop_pic/bottle.webp" alt="" /></Link> 
          <div prod_title="Ceramic (1870)" className="product_name_5">
            Ceramic (1870)
          </div>
          <div className="product_sub_name_5">
            Ceramic (1870)
          </div>
        </div>
        <div className="product_container_6">
          <Link to='#' className='product_link'><img className="product_img_6" src="/pic/shop_pic/lamp.webp" alt="" /></Link> 
          <div prod_title="Baroque Lamp " className="product_name_6">
            Baroque Lamp 
          </div>
          <div className="product_sub_name_6">
            Baroque Lamp 
          </div>
        </div>
        <div className="product_container_7">
          <Link to='#' className='product_link'><img className="product_img_7" src="/pic/shop_pic/perfume.webp" alt="" /></Link> 
          <div prod_title="D&G Perfume" className="product_name_7">
            D&G Perfume
          </div>
          <div className="product_sub_name_7">
            D&G Perfume
          </div>
        </div>
        <div className="product_container_8">
          <Link to='#' className='product_link'><img className="product_img_8" src="/pic/shop_pic/wardrobe.webp" alt="" /></Link> 
          <div prod_title="Antique Drawer" className="product_name_8">
            Antique Drawer
          </div>
          <div className="product_sub_name_8">
            Antique Drawer
          </div>
        </div>
        <div className="product_container_10">
          <Link to='#' className='product_link'><img className="product_img_10" src="/pic/shop_pic/thebook.webp" alt="" /></Link> 
          <div prod_title="This Immortal" className="product_name_10">
            This Immortal
          </div>
          <div className="product_sub_name_10">
            This Immortal
          </div>
        </div>
    </div>
  );
};

export default ShopPage;
