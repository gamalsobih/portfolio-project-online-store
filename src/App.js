import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/layout';
import Home from './components/home';
import UserProfile from './components/Userprofile';
import Cart from './components/Cart';
import Login from './components/Login';
import Hero from './components/Hero'
import { useDispatch } from 'react-redux';
import { setUserData } from './store/slices/authSlice'; // تأكد من وجود هذا الـ slice
import { useEffect } from 'react';
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
      // محاولة جلب بيانات المستخدم من Local Storage
      const storedUserData = localStorage.getItem('userData');
      if (storedUserData) {
          dispatch(setUserData(JSON.parse(storedUserData))); // تحديث حالة Redux
      }
  }, [dispatch]);

  // تعريف التوجيه باستخدام createBrowserRouter
  const routing = createBrowserRouter([
      {
          path: "/",
          element: <Layout />, // تأكد من وجود مكون Layout
          children: [
              { index: true, element: <Home /> },
              { path: "products", element: <Hero /> },
              { path: "products/:rat", element: <Hero /> },
              { path: "login", element: <Login /> },
              { path: "user-profile", element: <UserProfile /> },
              { path: "mycart", element: <Cart /> }
          ]
      }
  ]);

  return (
      <RouterProvider router={routing} />
  );
};

export default App;
