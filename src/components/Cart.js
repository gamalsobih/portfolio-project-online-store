import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setCartItems } from '../store/slices/cartSlice'; // تأكد من وجود هذا الـ slice
import Login from './Login';

const Cart = () => {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.auth.userData);
    const isLoggedIn = !!userData;
    const [carts, setCarts] = useState([]); // لتخزين العربات
    const [productDetails, setProductDetails] = useState({}); // لتخزين تفاصيل المنتجات

    useEffect(() => {
        if (isLoggedIn) {
            fetchCarts(userData.id);
        }
    }, [isLoggedIn, userData]);

    const fetchCarts = async (userId) => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/carts/user/${userId}`);
            dispatch(setCartItems(response.data)); // تحديث حالة العربة في Redux
            setCarts(response.data); // تخزين العربات في الحالة
            
            // جلب تفاصيل المنتجات
            const productIds = response.data.flatMap(cart => cart.products.map(product => product.productId));
            const uniqueProductIds = [...new Set(productIds)];
            fetchProductDetails(uniqueProductIds);
        } catch (error) {
            console.log('Cannot get cart items:', error);
        }
    };

    const fetchProductDetails = async (productIds) => {
        try {
            const productRequests = productIds.map(id =>
                axios.get(`https://fakestoreapi.com/products/${id}`)
            );
            const productResponses = await Promise.all(productRequests);
            const products = productResponses.reduce((acc, response) => {
                acc[response.data.id] = response.data; // تخزين البيانات باستخدام productId كمفتاح
                return acc;
            }, {});
            setProductDetails(products); // تخزين تفاصيل المنتجات
        } catch (error) {
            console.log('Cannot get product details:', error);
        }
    };

    if (!isLoggedIn) {
        return (
            <>
                <div>Please login first</div>
                <Login />
            </>
        );
    }

    return (
        <div >
            <h1>Your Carts</h1>
            {carts.length > 0 ? (
                carts.map((cart, index) => (
                    <div key={index} >
                       <div className='cartadress'> <h3>Cart {index + 1}</h3></div>
                        <div className='cartcon'>
                        {cart.products.map(item => {
                            const product = productDetails[item.productId];
                            return (
                                <div key={item.productId} className='cartproduct' >
                                    {product ? (
                                        <div  >                                           
                                        
                                            <h4>Product Title: {product.title}</h4>
                                            <p>Quantity: {item.quantity}</p>
                                            <p>Price: ${product.price}</p>
                                            <img src={product.image} alt={product.title} style={{ width: '50px' }} />
                                              </div>
                                    ) : (
                                        <p>Loading product details...</p>
                                    )}
                                </div>
                            );
                        })}
                    <button className='proceedtobuy'><h3>proceed to buy</h3></button></div>
                    </div>
                ))
            ) : (
                <div>No items in cart</div>
            )}
        </div>
    );
};

export default Cart;
