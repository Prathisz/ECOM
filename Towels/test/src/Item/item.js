import React from 'react'
import './item.css';
import { Link } from 'react-router-dom';
const Item = (props) => {
  return (
    <div className='item'>
      <Link to={"/productId"} state={props}>  <img src={props.image}></img></Link>
        <p>{props.name}</p>
        <div className='item-prices'> 
        <div className='item-price-now'>
        ₹{props.new_price}
        </div>
        <div className='item-price-old'>
        ₹ {props.old_price}
        </div>

        </div>
    </div>
  )
}

export default Item

