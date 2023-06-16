import { useMutation } from 'react-query';
import { instance } from './axios';

interface LoginProps {
  tel: string;
  password: string;
  redirectionURI: string;
}

export const useLogin = ({ tel, password, redirectionURI }: LoginProps) => {
  return useMutation(
    () => instance.post('/user/auth', {
      telephone_number: tel,
      password,
    }),
    {
      onSuccess: () => {
        window.location.replace(redirectionURI);
      },
    },
  );
};
