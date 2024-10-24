import React from 'react'
import Product from './product'
import { useParams } from 'react-router-dom'

const Hero = () => {
  const cat = useParams();
  return (
    <div className='hero'>
        <Product cat={cat.rat}/>
    </div>
  )
}

export default Hero
