import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import sale1 from "./images/sale1.jfif";
import sale2 from "./images/sale2.webp";
import sale3 from "./images/sale3.jpg";
import sale4 from "./images/sale4.jpg";
import { Link } from 'react-router-dom';

const Slider = () => {
  return (<> <div className="slidercon">
<div className="slider" >
<Slide className="slider"
  autoplay={true}
  onChange={function noRefCheck(){}}
  onStartChange={function noRefCheck(){}}
>
  <div className="each-slide-effect">
    <div className='sliderBanner'
      style={{
        backgroundImage: 'url(https://m.media-amazon.com/images/I/71YNv9GOOWL._SX3000_.jpg)'
      }}
    >
      <span>
      </span>
    </div>
  </div>
  <div className="each-slide-effect">
    <div className='sliderBanner'
      style={{
        backgroundImage: 'url(https://m.media-amazon.com/images/I/61tnNKVn6UL._SX3000_.jpg)'
      }}
    >
      <span>
      </span>
    </div>
  </div>
  <div className="each-slide-effect">
    <div className='sliderBanner'
      style={{
        backgroundImage: 'url(https://m.media-amazon.com/images/I/71+-EWETpML._SX3000_.jpg)'
      }}
    >
      <span>
      </span>
    </div>
  </div>
</Slide></div>
<div className='promotionCon'>
<div className='promotionCard'><Link to ={`/products/electronics`}  ><img src={sale1} className='promotionphoto'/></Link></div>
<div className='promotionCard'><Link to ={`/products/jewelery`}  > <img src={sale2} className='promotionphoto'/></Link></div>
<div className='promotionCard'><Link to ={`/products/men's%20clothing`}  > <img src={sale3} className='promotionphoto'/></Link></div>
<div className='promotionCard'><Link to ={`/products/women's%20clothing`}  > <img src={sale4} className='promotionphoto'/></Link></div>
<div className='promotionCard'><Link to ={`/products/`}  > <img src={sale4} className='promotionphoto'/></Link></div>
      
</div>
</div>
</>


  )
}

export default Slider
