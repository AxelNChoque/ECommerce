import React, { useState } from 'react'
import img1 from '../images/image-product-1.jpg'
import './index.css';

const Body = () => {

  let [count, setCount] = useState(0);

  function incrementCount() {
    count = count + 1;
    setCount(count);
  }
  function decrementCount() {
    if (count > 0) {
      count = count - 1;
      setCount(count);
    }
  }

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
      {/*   <div className='inputContainer'>
        <input type="number" className="quantity" name="quantity" placeholder='0' min="1" max="99" />
      </div> */}
      <div className='inputContainer'>
        <button onClick={decrementCount}>-</button>
        <div className='count'>{count}</div>
        <button onClick={incrementCount}>+</button>
      </div>
    </>
  )
}

export { Body }