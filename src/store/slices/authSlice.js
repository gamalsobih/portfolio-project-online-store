import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        userData: null,
    },
    reducers: {
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.userData = null;
        },
        setUserData(state, action) {
            state.userData = action.payload; // تحديث بيانات المستخدم
        }
    }
});

export const { login, logout, setUserData } = authSlice.actions;

export default authSlice.reducer;
