import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserData } from '../store/slices/authSlice'; // تأكد من المسار الصحيح للملف

const Login = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        setLoading(true);
        axios({
            method: "GET",
            url: "https://fakestoreapi.com/users"
        })
            .then(res => {
                setData(res.data);
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false));
    }, []);

    const Getuserid = (username, users) => {
        let user = users.filter(userid => { return userid.username === username });
        return user[0]?.id; // استخدام optional chaining لتفادي الأخطاء
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // منع إعادة تحميل الصفحة عند الإرسال
        await login(username, password);
    };

    const login = async (username, password) => {
        try {
            const response = await axios.post('https://fakestoreapi.com/auth/login', {
                username,
                password
            });

            const token = response.data.token; // الحصول على التوكن من الاستجابة
            let userid = Getuserid(username, data);
            
            localStorage.setItem('token', token); // تخزين التوكن في localStorage للاستخدام لاحقًا
            localStorage.setItem('user', userid);

            // جلب بيانات المستخدم بعد تسجيل الدخول
            const userResponse = await axios.get(`https://fakestoreapi.com/users/${userid}`);
            dispatch(setUserData(userResponse.data)); // تحديث بيانات المستخدم في Redux

            console.log('تم تسجيل الدخول بنجاح، وتم تخزين التوكن:', token);
            console.log('تم تسجيل الدخول بنجاح، وتم تخزين الاي دي :', userid);

            navigate('/user-profile/');
        } catch (error) {
            console.error('فشل تسجيل الدخول:', error);
        }
    };

    return (
        <div>
            <form className='login' onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type='password'
                    placeholder='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit'>login</button>
            </form>
        </div>
    );
};

export default Login;
