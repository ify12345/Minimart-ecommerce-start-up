import React from 'react'
import pimage from "../assets/images/arm-chair-01.jpg"
import "../styles/productcard.css"
import { Col } from 'reactstrap'


const ProductCard = () => {
  return (
     <Col lg="3" md="4">
         <div className='product_item'>
        <div className="product_img">
            <img src={pimage} alt="" />
        </div>

      <h3 className="product_name">
        Modern Armchair
      </h3>

      <span>Chair</span>

      <div className="product_card-bottom">
        <span className="price">
            $299
        </span>
        <span>
            <i className="ri-add-line"></i>
        </span>
      </div>

    </div>
     </Col>
  )
}

export default ProductCard
