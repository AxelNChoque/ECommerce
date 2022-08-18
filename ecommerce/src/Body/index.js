import React from 'react'
import img1 from '../images/image-product-1.jpg'
import './index.css';


const Body = () => {
  return (
    <>
      <img src={img1} alt="" />
      <div className='title'>
        <h3>SNEAKER COMPANY</h3>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>These low-profile sneakers are your perfect casual wear companion. Featuring a
          durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
      </div>
      <div className='pricing'>
        <div className='priceContainer'>
          <h1>$125.00</h1>
          <h2 className='offer'>50%</h2>
        </div>
        <del>$250.00</del>
      </div>
    </>
  )
}

export { Body }