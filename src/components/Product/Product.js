import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = ({handleAddToCart, product}) => {
    // const {handleAddToCart, product} = props;
    const {name, img, seller, price, ratings} =product;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                 <p className='product-name'>{name}</p>
                 <p>Price: ${price}</p>
                 <p><small>Seller: {seller}</small></p>
                 <p><small>Rating: {ratings}</small></p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-card'>
                <p>Add To Cart</p> 
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};


export default Product; 