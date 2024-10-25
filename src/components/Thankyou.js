import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Thankyou = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Set a timer to redirect after 5 seconds
    const timer = setTimeout(() => {
      navigate('/'); // Redirect to home page
    }, 2000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className='thankyou'>
      <h1>Thank you for your order</h1> <br/>
      <h3>You will be redirected to the Home page</h3>
      </div>
  );
}

export default Thankyou;