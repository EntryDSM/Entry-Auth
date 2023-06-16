import { Routes, Route } from 'react-router';
import { Login } from '@/pages/Login';
import { BrowserRouter } from 'react-router-dom';
import { SignUp } from './pages/SignUp';
import { ChangePwd } from './pages/ChangePwd';
import { NotFound } from './pages/404';
import { Pass } from './components/Pass';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/change-pwd" element={<ChangePwd />} />
        <Route path="/pass" element={<Pass />} />
      </Routes>
    </BrowserRouter>
  );
};
