import { useVerifyUserInfo } from '@/apis/verify';
import { AuthTemplate } from '@/components/AuthTemplate';
import { GoToAuthorization } from '@/components/signUp/GoToAuthorization';
import { OnAuthorization } from '@/components/signUp/OnAuthorization';
import { useToken } from '@/hooks/useToken';
import { removeLocalStorageItem } from '@/utils/localstorage';
import { useEffect } from 'react';

export const SignUp = () => {
  const { token } = useToken();
  useEffect(() => {
    removeLocalStorageItem('isVerified');
  }, []);
  useVerifyUserInfo(token.mdl_tkn);

  return (
    <AuthTemplate title="회원가입">
      {token.mdl_tkn ? <OnAuthorization /> : <GoToAuthorization />}
    </AuthTemplate>
  );
};
