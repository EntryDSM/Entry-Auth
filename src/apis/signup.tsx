import { useMutation } from 'react-query';
import { instance } from './axios';
import { useModal } from '@/hooks/useModal';
import { Button, Toast } from '@team-entry/design_system';
import { setTokens } from '@/utils/cookies';
import { AuthResponse } from './login';
import { SuccessIcon } from '@/assets/success';
import { AxiosError } from 'axios';

export const useSignUp = (redirectURL: string) => {
  const { render } = useModal();

  const signUp = useMutation(
    (body: {
      telephone_number: string;
      password: string;
      is_student: boolean;
    }) => instance.post<AuthResponse>('/user', body),
    {
      onError: (res: AxiosError<AxiosError>) => {
        console.log(res);
        switch (res.response?.data.message) {
          case 'password는 소문자, 숫자, 특수문자가 포함되어야 합니다.':
            Toast('비밀번호가 틀렸습니다.', { type: 'error' });
            break;
        }
        alert('회원가입에 실패하였습니다.');
      },
      onSuccess: (res) => {
        setTokens(res.data.access_token, res.data.refresh_token);
        render({
          title: '회원가입',
          icon: <SuccessIcon />,
          content: '가입이 완료되었습니다',
          button: (
            <Button
              kind="contained"
              color="orange"
              onClick={() => {
                window.location.href = redirectURL;
              }}
            >
              완료
            </Button>
          ),
        });
      },
    },
  );

  return {
    signUp,
  };
};
