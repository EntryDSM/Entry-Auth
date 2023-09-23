import { useMutation } from 'react-query';
import { instance } from './axios';
import { setCookies, setTokens } from '@/utils/cookies';
import { COOKIE_DOMAIN } from '@/constant/env';
import { AxiosError } from 'axios';
import { Toast } from '@team-entry/design_system';

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
      onError: (res: AxiosError<AxiosError>) => {
        switch (res.response?.data.message) {
          case 'User Not Found':
            Toast('존재하지 않는 아이디입니다.', { type: 'error' });
            break;
          case 'password는 소문자, 숫자, 특수문자가 포함되어야 합니다.':
          case 'The password is not valid':
            Toast('비밀번호가 틀렸습니다.', { type: 'error' });
            break;
          default:
            Toast('로그인에 실패하였습니다.', { type: 'error' });
            break;
        }
        console.log(res);
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
