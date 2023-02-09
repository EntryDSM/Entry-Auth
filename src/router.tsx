import { Routes, Route } from 'react-router';
import { Login } from '@/pages/Login';
import { BrowserRouter } from 'react-router-dom';
import { SignUp } from './pages/SignUp';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<div>404</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};
