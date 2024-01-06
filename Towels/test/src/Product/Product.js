import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../Context/Context'
import { useParams } from 'react-router-dom';
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import Breadcrum from '../Breadcrum/Breadcrum';
import { useLocation } from 'react-router-dom';
const Product = () => {

    const location = useLocation();
    // useEffect(()=>{},[location])
//the data here will be an object since an object was

// if(location.state){
    const data = location.state;
    // const {all_product} = useContext(ShopContext);
    // const {productId} = useParams();
    // const product=all_product.find((e)=>e.id===Number(data));
  return (
    <div>
        <Breadcrum product={data} />
      <ProductDisplay product={data}/>
    </div>
  )}
// }

export default Product
