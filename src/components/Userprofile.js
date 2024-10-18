import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userid = localStorage.getItem('user');
    if (userid) {
      fetchUserData(userid);
    }
  }, []);

  const fetchUserData = async (userId) => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/users/${userId}`);
      setUserData(response.data);
    } catch (error) {
      console.log('Cannot get user information:', error);
    }
  };

  const handleLogout = () => {
    // حذف التوكن ومعرف المستخدم من localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/'); // توجيه المستخدم إلى الصفحة الرئيسية
  };

  return (
    <div>
      {userData ? (
        <div>
          <h2>Welcome, {userData.name.firstname}!</h2>
          <p>Email: {userData.email}</p>
          {/* أضف معلومات أخرى حول المستخدم حسب الحاجة */}
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <h2>Loading user data...</h2>
      )}
    </div>
  );
};

export default UserProfile;
