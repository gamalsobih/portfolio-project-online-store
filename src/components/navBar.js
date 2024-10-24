import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Amazon from "./images/Amazon.png";
import Egy from "./images/Egy.png";
import cart from "./images/cart.svg";
import '../App.css';

const NavBar = () => {
    const userData = useSelector((state) => state.auth.userData); // استخدام Redux لجلب بيانات المستخدم
    const isLoggedIn = !!userData; // تحقق مما إذا كان المستخدم مسجلاً للدخول

    // قراءة عناصر السلة من Redux
    const cartItems = useSelector((state) => state.cart.cartItems);
    const totalItems = cartItems.reduce((total, item) => total + (item.quantity || 1), 0); // حساب العدد الإجمالي للعناصر

    useEffect(() => {
        if (isLoggedIn) {
            // يمكنك تنفيذ أي إجراءات تحتاج إلى تنفيذها عند تسجيل الدخول، إذا لزم الأمر
        }
    }, [isLoggedIn]);

    return (
        <div className='Navbar'>
            <Link to={"/"}>
                <div className='logocontainer'>
                    <img src={Amazon} className='logo' alt="logo" />
                </div>
            </Link>
            <div className='location'>
                <div>Deliver to {isLoggedIn ? userData.name.firstname : 'Guest'}</div>
                <div>@ {isLoggedIn ? userData.address.city : 'Location'}</div>
            </div>
            <div className='search'>
                <button className='searchb'>all</button>
               <input type='textbox' className='searchinput' placeholder='Search...' />
                <button className='searchb'>search</button>
            </div>
            <div className='lang'>
                <img src={Egy} className='egy' alt="egy flag" />En
            </div>
            <div>
                <Link to={isLoggedIn ? "/user-profile" : "/login"}>
                    <div>Hello, {isLoggedIn ? userData.name.firstname : 'User'}</div>
                    <div className='Acc'>Account & Lists</div>
                </Link>
            </div>
            <Link to={"/mycart"}>
                <div>
                    <img src={cart} className='cartlogonav' alt="cart" />
                    {totalItems > 0 && <span className="cart-count">{totalItems}</span>} {/* عرض العدد */}
                </div>
            </Link>
        </div>
    );
};

export default NavBar;
