import React from 'react';
import "./product.css"

export default function Product({img,link}) {
  return (
  <div className='p'>
      <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="norefer">
          <img src={img} alt="" className="p-img" />
        </a>
  </div>
  );
}
