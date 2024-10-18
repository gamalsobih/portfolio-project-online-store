import React from 'react';
import NavBar from './navBar';
import Footer from './footer';
import Catbar from './catbar';
import '../App.css';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Catbar />
      <main>
        <Outlet /> {/* سيعرض المحتوى الخاص بالمسارات الفرعية هنا */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
