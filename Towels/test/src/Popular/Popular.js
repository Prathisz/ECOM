import React from 'react'
import data_product from '../Assets/data';
import './Popular.css';
import Item from '../Item/item';
function Popular() {
  return (
    <div className='popular'>
    <h1>Popular Collection</h1>
    <img src='https://softweave.co.in/wp-content/uploads/2018/12/border-icon.png'></img>

    <div className="popular-item">
      {data_product.map((item,i)=>{
        return <Item key={i} id={item.id} name={item.name} image={item.image}  new_price={item.new_price}  old_price={item.old_price}/>
      })}
    </div>
    </div>
  )
}

export default Popular
