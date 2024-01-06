import React, { useContext } from 'react'
import { ShopContext } from '../Context/Context'
import { useParams } from 'react-router-dom';
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import Breadcrum from '../Breadcrum/Breadcrum';
import { useLocation } from 'react-router-dom';
const Product = () => {
    const {all_product} = useContext(ShopContext);
    const {productId} = useParams();
    const product=all_product.find((e)=>e.id===Number(productId));
  return (
    <div>
        <Breadcrum product={product} />
      <ProductDisplay product={product}/>
    </div>
  )
}

export default Product
