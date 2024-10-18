import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import { Link } from 'react-router-dom';
const Catbar = () => {
        const[loading,setLoading] =useState(false);
        const[data,setData]= useState([]);
    useEffect(()=>{
        axios({
            method:"GET",
            url:"https://fakestoreapi.com/products/categories"

        }).then(res=>{
            setData(res.data)
        }).catch((e)=>console.log(e))
        .finally(()=>setLoading(false));
    },[])
  return (
    <div className='catbar' key="1" >
      <Link to ={`/products`}>  <div key= "0" className='cat'>All</div></Link>
        {data.map((category,index)=>(
          <Link to ={`/products/${category}`}  key={index}>  <div className='cat'>{category}</div></Link>

        ))}
      
    </div>
  )
}

export default Catbar
