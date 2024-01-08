import React from 'react'
import './item.css';
import { Link, useNavigate } from 'react-router-dom';
const Item = (props) => {
  const navigate=useNavigate();
  return (
    <div className='item'>
      {/* <Link to={`/product/${props.id}`}>  </Link> */}
      <img src={props.image} onClick={()=>navigate("/productid",{state:props.id})}></img>
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

