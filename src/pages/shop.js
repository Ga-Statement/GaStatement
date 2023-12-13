/* 
-------------------------------------------------------------------------
	파일명		: shop.js
	설명		: shop 페이지
	담당자		: 박효연
	개발날짜	: 2023/12/09
-------------------------------------------------------------------------
*/

import React, { useRef } from 'react';
import { useDraggable } from "react-use-draggable-scroll";
import { Link } from 'react-router-dom';
import './shop.css';

// npm install react-use-draggable-scroll

const ShopPage = () => {
  const ref = useRef();
  const { events } = useDraggable(ref);

  return (
    <div className='product_list'  {...events} ref={ref}>
        <div className="product_container_1">
          <Link to='/premium1' className='product_link'><img className="product_img" src="/pic/shop_pic/canon.png" alt=""/></Link> 
          <div prod_title="CANON-OG Camera." className="product_name">
            CANON-OG Camera.
          </div>
          <div className="product_sub_name_1">
            CANON-OG Camera.
          </div>
        </div>
        <div className="product_container_2">
          <Link to='/premium2' className='product_link'><img className="product_img_2" src="/pic/shop_pic/teacup.png" alt=""/></Link> 
          <div prod_title="Noritake" className="product_name_2">
            Noritake
          </div>
          <div className="product_sub_name_2">
            Noritake
          </div>
        </div>
        <div className="product_container_3">
          <Link to='/standard1' className='product_link'><img className="product_img_3" src="/pic/shop_pic/book.png" alt="" /></Link> 
          <div prod_title="THE Passion within" className="product_name_3">
            THE Passion within
          </div>
          <div className="product_sub_name_3">
            THE Passion within
          </div>
        </div>
        <div className="product_container_4">
          <Link to='/standard2' className='product_link'><img className="product_img_4" src="/pic/shop_pic/LP.png" alt="" /></Link> 
          <div prod_title="The Beatles 1st LP" className="product_name_4">
            The Beatles 1st LP
          </div>
          <div className="product_sub_name_4">
            The Beatles 1st LP
          </div>
        </div>
    </div>
  );
};

export default ShopPage;
