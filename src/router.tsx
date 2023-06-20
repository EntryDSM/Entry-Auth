import { Routes, Route } from 'react-router';
import { Login } from '@/pages/Login';
import { BrowserRouter } from 'react-router-dom';
import { SignUp } from './pages/SignUp';
import { ChangePwd } from './pages/ChangePwd';
import { NotFound } from './pages/404';
import { Pass } from './components/Pass';
import { Verify } from './pages/Verify';
import { getQueryValues } from './utils/getQueryValues';
import { useEffect } from 'react';
import { getCookies } from './utils/cookies';

export const Router = () => {
  const redirectURL =
    getQueryValues().get('redirect_url') || 'https://www.entrydsm.hs.kr';

  useEffect(() => {
    const [accessToken, refreshToken] = getCookies<string[]>([
      'access_token',
      'refresh_token',
    ]);
    console.log(accessToken);
    console.log(refreshToken);
    if (accessToken && refreshToken) window.history.back();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<NotFound />} />
        <Route path="/login" element={<Login redirectURL={redirectURL} />} />
        <Route path="/sign-up" element={<SignUp redirectURL={redirectURL} />} />
        <Route path="/change-pwd" element={<ChangePwd />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/pass" element={<Pass />} />
      </Routes>
    </BrowserRouter>
  );
};
