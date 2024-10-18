import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';

const Product = ({ cat }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products"
    })
      .then(res => {
        console.log(res.data);  // تحقق من جميع البيانات المستلمة من API
        setData(res.data);
      })
      .catch(e => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  const maxlength = (title) => {
    return title.length > 20 ? title.slice(0, 20) + " ..." : title;
  };

  const deslength = (des) => {
    return des.length > 60 ? des.slice(0, 60) + " ..." : des;
  };

  let filteredProducts =data;
  if(cat){
  filteredProducts = data.filter(product => {
    return product.category === cat;
  });}
  
  return (
    <div className='Product'>
      {loading && (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
      {!loading && filteredProducts.length > 0 ? (
        filteredProducts.map(product => (
          <div key={product.id} className='card'>
            <div className='proimgdiv'>
              <img src={product.image} alt={product.title} className='proimgsrc' />
            </div>
            <div>
              <h5>{maxlength(product.title)}</h5>
            </div>
            <div className='pricecon'>
              <div className='categorycon'>{product.category}</div>
              <div className='price'>{product.price} <b>SD</b></div>
            </div>
            <div className='des'>{deslength(product.description)}</div>
          </div>
        ))
      ) : (
        <h2>No products found in this category.</h2>  // رسالة في حال عدم وجود منتجات
      )}
    </div>
  );
};

export default Product;
