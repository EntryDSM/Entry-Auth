import { useMutation } from 'react-query';
import { instance } from './axios';
import { setCookies, setTokens } from '@/utils/cookies';
import { AuthResponse } from './login';
import { COOKIE_DOMAIN } from '@/constant/env';

interface AdminLoginProps {
  id: string;
  password: string;
}

export const useAdminLogin = (redirectURL: string) => {
  return useMutation(
    ({ id, password }: AdminLoginProps) =>
      instance.post<AuthResponse>('/admin/auth', {
        id,
        password,
      }),
    {
      onError: () => {
        alert('로그인에 실패하였습니다.');
      },
      onSuccess: (res) => {
        window.location.href = redirectURL;
        setTokens(res.data.access_token, res.data.refresh_token);
        setCookies('authority', 'admin', {
          path: '/',
          secure: true,
          sameSite: 'none',
          domain: COOKIE_DOMAIN,
        });
      },
    },
  );
};
