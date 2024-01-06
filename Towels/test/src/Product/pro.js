import React from 'react'
import Navbar from '../Nav/Navbar'
import all_product from '../Assets/all_product'
import Item from '../Item/item'
import './pro.css';
import Footer from '../Footer/Footer';
import dropdown_icon from '../Assets/dropdown_icon.png';
import { Link } from 'react-router-dom';
function Pro() {
  return (
    <>
    <Navbar/>
    <div className='indexSort'>
      <p>
        <span>Showing 1-12</span> out of 36 product
      </p>
  
        
        <div className='sort'>
          Sort by <img src={dropdown_icon} alt=''/> 
         </div>
         </div>
         
    <div className='product-item'>
    {all_product.map((item,i)=>{
      return (
        
        <Item key={i} id={item.id} name={item.name} image={item.image}  new_price={item.new_price}  old_price={item.old_price}/>
        
      ) 
    })}
    </div>
   
   
<Footer/>
    </>
  )
}

export default Pro
