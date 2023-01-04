import { Routes, Route } from 'react-router';
import { Login } from '@/pages/Login';
import { BrowserRouter } from 'react-router-dom';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<div>404</div>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
