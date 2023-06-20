import { useMutation } from 'react-query';
import { instance } from './axios';
import { setTokens } from '@/utils/cookies';

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
      onSuccess: (res) => {
        window.location.href = redirectURL;
        setTokens(res.data.access_token, res.data.refresh_token);
      },
    },
  );
};
