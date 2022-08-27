import React from 'react';
import "./productList.css"
import Product from "../product/Product";
import {products}from "./../../data"


const ProductList=()=> {
  return (
    <div className='pl'>
        <div className="pl-texts">
            <p className="pl-desc">
                 Create & inspire.It's Piyush
            </p>
            <h3 className="pl-title">Lets Work Together</h3>
        </div>
        <div className="pl-list">
          {products.map((e)=>(
              <Product key={e.id} img={e.img} link={e.link} />
          ))}
            
        </div>
        
    </div>
  );
}

export default ProductList;
