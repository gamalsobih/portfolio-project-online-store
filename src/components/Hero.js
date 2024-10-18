import React from 'react'
import Product from './product'
import { useParams } from 'react-router-dom'

const Hero = () => {
  const cat = useParams();
  return (
    <div className='hero'>
        <div className='sidebar'  >this is my sidebar </div>
        <div>
        <Product cat={cat.rat}/>
        </div>
    </div>
  )
}

export default Hero
