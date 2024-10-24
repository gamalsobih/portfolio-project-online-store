import React from 'react'
import sale1 from "./images/sale1.jfif";
import sale2 from "./images/sale2 .jpeg";
import sale3 from "./images/sale3.png";
import sale4 from "./images/sale4.jpg";

const Promotions = () => {
  return (
    <div className='promotionCon'>
        <div className='promotionCard'><img src={sale1} className='promotionphoto'/></div>
        <div className='promotionCard'><img src={sale2} className='promotionphoto'/></div>
        <div className='promotionCard'><img src={sale3} className='promotionphoto'/></div>
        <div className='promotionCard'><img src={sale4} className='promotionphoto'/></div>
        <div className='promotionCard'><img src={sale4} className='promotionphoto'/></div>
      
    </div>
  )
}

export default Promotions
