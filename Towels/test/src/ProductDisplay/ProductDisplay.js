import React from 'react'
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png"
import { useLocation } from 'react-router-dom';
import all_product from '../Assets/all_product';
import { KeyboardCommandKeyOutlined } from '@mui/icons-material';
//const ProductDisplay = (props) => {
//const {product}=props;
const ProductDisplay=()=>{
  const location=useLocation();
  const res=location.state&&location.state;
  console.log(res)
  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
        <div className='productdisplay-img-list'>
            <img src={all_product[res-1].image} ></img>
        </div>
        <div className='productdisplay-img'>
            <img src={all_product[res-1].image} className='productdisplay-main-img'></img>
        </div>
      </div>
      <div className='productdisplay-right'>
        <h1>{all_product[res-1].name}</h1>
        <div className='productdisplay-right-star'>
            <img src={star_icon} ></img>
            <img src={star_icon} ></img>
            <img src={star_icon} ></img>
            <img src={star_icon} ></img>
            <img src={star_dull_icon} ></img>
            <p>{all_product[res-1].new_price}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay

