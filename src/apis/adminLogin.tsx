import { useMutation } from 'react-query';
import { instance } from './axios';
import { setCookies, setTokens } from '@/utils/cookies';
import { AuthResponse } from './login';
import { COOKIE_DOMAIN } from '@/constant/env';
import { AxiosError } from 'axios';

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
      onError: (res: AxiosError<AxiosError>) => {
        switch (res.response?.data.message) {
        }
        alert('로그인에 실패하였습니다.');
        console.log(res);
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
