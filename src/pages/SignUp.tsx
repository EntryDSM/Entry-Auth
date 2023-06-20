import { RedirectURL } from '@/apis/login';
import { useVerifyUserInfo } from '@/apis/verify';
import { AuthTemplate } from '@/components/AuthTemplate';
import { GoToAuthorization } from '@/components/signUp/GoToAuthorization';
import { InsertUserInfo } from '@/components/signUp/InsertUserInfo';
import { OnAuthorization } from '@/components/signUp/OnAuthorization';
import { useToken } from '@/hooks/useToken';
import { removeLocalStorageItem } from '@/utils/localstorage';
import { useEffect, useMemo } from 'react';

export const SignUp = ({ redirectURL }: RedirectURL) => {
  const { token } = useToken();

  useEffect(() => {
    removeLocalStorageItem('isVerified');
  }, []);
  const { getUserData } = useVerifyUserInfo(token.mdl_tkn);

  const RenderedComponent = useMemo(() => {
    let component;
    if (getUserData.data?.data) {
      component = <InsertUserInfo redirectURL={redirectURL} />;
    } else if (token.mdl_tkn) {
      component = <OnAuthorization />;
    } else {
      component = <GoToAuthorization />;
    }
    return component;
  }, [redirectURL, getUserData.data?.data, token.mdl_tkn]);

  return <AuthTemplate title="회원가입">{RenderedComponent}</AuthTemplate>;
};
