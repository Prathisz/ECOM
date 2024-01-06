import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import ImageCarousel from './Slider/ImageCarousel';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignUp from './sign up/sign';
import Pro from './Product/pro';
import Product from './Product/Product';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>}/>
    <Route path="/Signup" element={<SignUp/>}/>
    <Route path="/pro" element={<Pro/>}/>
    <Route path='/productId' element={<Product/>}/>
   </Routes>
   </BrowserRouter>
  </React.StrictMode>
);


