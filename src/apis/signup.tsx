import { useMutation } from 'react-query';
import { instance } from './axios';
import { useModal } from '@/hooks/useModal';
import { Button } from '@team-entry/design_system';
import { setTokens } from '@/utils/cookies';
import { AuthResponse } from './login';
import { SuccessIcon } from '@/assets/success';

export const useSignUp = (redirectURL: string) => {
  const { render } = useModal();

  const signUp = useMutation(
    (body: {
      telephone_number: string;
      password: string;
      is_student: boolean;
    }) => instance.post<AuthResponse>('/user', body),
    {
      onError: () => {
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
