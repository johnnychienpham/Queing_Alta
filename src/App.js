import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Profile from './pages/Profile/profile';

import ForgetPass from './pages/ForgetPass/ForgetPass';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/forget-password" element={<ForgetPass />}></Route>



        </Routes>
    );
}

export default App;