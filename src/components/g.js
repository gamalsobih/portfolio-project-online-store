import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const UserProfile = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

useEffect(() => {
  const token = localStorage.getItem('token');
  if (token) {
    setIsLoggedIn(true);
    navigate('/user-profile');

  }
}, []);
    const handleLogout = () => {
    localStorage.removeItem('token'); // إزالة التوكن عند تسجيل الخروج
    setIsLoggedIn(false);
    navigate('/');

  };

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token'); // جلب التوكن من localStorage
        const users = await axios.get('https://fakestoreapi.com/users')
            console.log(users);
        const response = await axios.get('https://fakestoreapi.com/users/1', {
          headers: {
            Authorization: `Bearer ${token}` // إرسال التوكن في رأس الطلب
          }
        });
        
        setUserData(response.data); // تخزين بيانات المستخدم في الحالة
        setLoading(false);
      } catch (error) {
        console.error('cannot get user informations:', error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <p>loading user information</p>;
  }

  if (!userData) {
    return <p>no data found.</p>;
  }

  return (
    <div className="user-profile">
      <h1>Hello {userData.name.firstname}</h1>
      <p>Email: {userData.email}</p>
      <p>phone: {userData.phone}</p>
      <p>adress: {userData.address.street+"-"+userData.address.city}</p>
      <button onClick={handleLogout}>log out </button>
    </div>
  );
};

export default UserProfile;
