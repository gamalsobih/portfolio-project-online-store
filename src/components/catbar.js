import React from 'react';
import { useState, useEffect } from 'react'; // Import React hooks
import axios from 'axios'; // Import axios for making HTTP requests
import '../App.css'; // Import CSS styles
import { Link } from 'react-router-dom'; // Import Link for navigation

const Catbar = () => {
  const [loading, setLoading] = useState(false); // State to manage loading status
  const [data, setData] = useState([]); // State to store fetched categories

  useEffect(() => {
    // Fetch categories from the API when the component mounts
    setLoading(true); // Set loading to true before making the request
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products/categories" // API endpoint for categories
    })
    .then(res => {
      setData(res.data); // Set the fetched categories to state
    })
    .catch((e) => console.log(e)) // Log any errors that occur during the request
    .finally(() => setLoading(false)); // Set loading to false after the request completes
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <div className='catbar' key="1">
      {/* Link to all products */}
      <Link to={`/products`}>
        <div key="0" className='cat'>All</div>
      </Link>
      
      {/* Map through categories and create links for each */}
      {data.map((category, index) => (
        <Link to={`/products/${category}`} key={index}>
          <div className='cat'>{category}</div> {/* Display category name */}
        </Link>
      ))}
    </div>
  );
}

export default Catbar; // Export the Catbar component