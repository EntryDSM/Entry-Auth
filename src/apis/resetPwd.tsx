import { useMutation } from 'react-query';
import { instance } from './axios';
import { useModal } from '@/hooks/useModal';
import { SuccessIcon } from '@/assets/success';
import { Button } from '@team-entry/design_system';
import { useNavigate } from 'react-router';

export interface ResetPwdRequest {
  new_password: string;
  check_password: string;
}

export const useResetPwd = () => {
  const { render } = useModal();
  const navigate = useNavigate();

  const resetPwd = useMutation(
    (body: ResetPwdRequest) => instance.post('/password', body),
    {
      onSuccess: () => {
        render({
          title: '비밀번호 찾기',
          icon: <SuccessIcon />,
          content: '비밀번호가 변경되었습니다',
          button: (
            <Button
              kind="contained"
              color="orange"
              onClick={() => {
                navigate('/login');
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
    resetPwd,
  };
};
