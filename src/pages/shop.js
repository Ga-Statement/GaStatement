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
            <Link to='/premium' className='product_link'><img className="product_img" src="/pic/shop_pic/canon.png" alt=""/></Link> 
            <div prod_title="CERAMICMIC" className="product_name">
              CERAMICMIC
            </div>
            <div className="product_sub_name_1">
              CERAMICMIC
            </div>
        </div>
        <div className="product_container_2">
            <img className="product_img_2" src="/pic/shop_pic/jewelbox.png" alt=""/>
            <div prod_title="SOFASOFA" className="product_name_2">
              SOFASOFA
            </div>
            <div className="product_sub_name_2">
              SOFASOFA
            </div>
        </div>
        <div className="product_container_3">
            <img className="product_img_3" src="/pic/shop_pic/lamp.png" alt="" />
            <div prod_title="CHAIRCHAIR" className="product_name_3">
              CHAIRCHAIR
            </div>
            <div className="product_sub_name_3">
              CHAIRCHAIR
            </div>
        </div>
        <div className="product_container_4">
            <img className="product_img_4" src="/pic/shop_pic/teacup.png" alt="" />
            <div prod_title="CHAIRCHAIR" className="product_name_4">
              CHAIRCHAIR
            </div>
            <div className="product_sub_name_4">
              CHAIRCHAIR
            </div>
        </div>
        <div className="product_container_5">
            <img className="product_img_5" src="/open/image(1).png" alt="" />
            <div prod_title="CERAMICMIC" className="product_name_5">
              CERAMICMIC
            </div>
            <div className="product_sub_name_5">
              CERAMICMIC
            </div>
        </div>
        <div className="product_container_6">
            <img className="product_img_6" src="/open/image(5).png" alt="" />
            <div prod_title="SOFASOFA" className="product_name_6">
              SOFASOFA
            </div>
            <div className="product_sub_name_6">
              SOFASOFA
            </div>
        </div>
    </div>
  );
};

export default ShopPage;