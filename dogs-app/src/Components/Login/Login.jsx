import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Login = () => {
  return (
   <Routes>
    <Route path="/" element={<LoginForm />} />
    <Route path="criar" element={<LoginCreate />} />
    <Route path="perdeu" element={<LoginPasswordLost />} />
    <Route path="resetar" element={<LoginPasswordReset />} />
   </Routes>
  )
}

export default Login