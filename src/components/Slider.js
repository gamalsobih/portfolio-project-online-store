import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const Slider = () => {
  return (<><div className="slider" >
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
    <div className='promotionCard'>promotion 1</div>
    <div className='promotionCard'>promotion 2</div>
    <div className='promotionCard'>promotion 3</div>
    <div className='promotionCard'>promotion 4</div>
    <div className='promotionCard'>promotion 5</div>
  
</div>
</>


  )
}

export default Slider
