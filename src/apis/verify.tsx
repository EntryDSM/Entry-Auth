import { useQuery } from 'react-query';
import { instance } from './axios';
import { useModal } from '@/hooks/useModal';
import { Button } from '@team-entry/design_system';
import { getLocalStorage } from '@/utils/localstorage';
import { useEffect, useState } from 'react';

export const useVerifyUserInfo = (mdl_tkn: string | null) => {
  const { render, close } = useModal();

  const [isVerified, setIsVerified] = useState<string | null>(null);

  const onFocus = () => {
    setIsVerified(getLocalStorage('isVerified'));
  };

  useEffect(() => {
    window.addEventListener('focus', onFocus);
    return () => {
      window.removeEventListener('focus', onFocus);
    };
  }, []);

  const getUserData = useQuery(
    ['getUserInfo', mdl_tkn],
    () => instance.get(`/user/verify/info?mdl_tkn=${mdl_tkn || ''}`),
    {
      refetchOnWindowFocus: true,
      retry: 0,
      enabled: mdl_tkn !== null && isVerified !== null,
      staleTime: 0,
      onSuccess: () => {
        render({
          title: '회원가입',
          content: '가입이 완료되었습니다',
          button: (
            <Button kind="contained" color="orange" onClick={close}>
              완료
            </Button>
          ),
        });
      },
    },
  );

  return {
    getUserData,
  };
};
