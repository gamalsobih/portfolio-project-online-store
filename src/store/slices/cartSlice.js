// src/store/slices/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCartItems(state, action) {
            state.cartItems = action.payload;
        },
        clearCart(state) {
            state.cartItems = [];
        },
        addToCart(state, action) {
            // تحقق مما إذا كان المنتج موجودًا بالفعل في السلة
            const existingItem = state.cartItems.find(item => item.id === action.payload.id);
            if (existingItem) {
                // إذا كان موجودًا، يمكنك زيادة الكمية أو إجراء أي عملية أخرى
                existingItem.quantity = (existingItem.quantity || 1) + 1; // زيادة الكمية
            } else {
                // إذا لم يكن موجودًا، أضفه إلى السلة
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },
    },
});

export const { setCartItems, clearCart, addToCart } = cartSlice.actions; // إضافة addToCart
export default cartSlice.reducer;
