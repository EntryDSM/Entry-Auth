import { useMutation } from 'react-query';
import { instance } from './axios';
import { setCookies, setTokens } from '@/utils/cookies';
import { COOKIE_DOMAIN } from '@/constant/env';

export interface RedirectURL {
  redirectURL: string;
}
export interface AuthResponse {
  access_token: string;
  refresh_token: string;
}

interface LoginProps {
  telephone_number: string;
  password: string;
}

export const useLogin = (redirectURL: string) => {
  return useMutation(
    ({ telephone_number, password }: LoginProps) =>
      instance.post<AuthResponse>('/user/auth', {
        telephone_number,
        password,
      }),
    {
      onError: () => {
        alert('로그인에 실패하였습니다.');
      },
      onSuccess: (res) => {
        window.location.href = redirectURL;
        setTokens(res.data.access_token, res.data.refresh_token);
        setCookies('authority', 'user', {
          path: '/',
          secure: true,
          sameSite: 'none',
          domain: COOKIE_DOMAIN,
        });
      },
    },
  );
};
