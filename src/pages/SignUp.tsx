import { RedirectURL } from '@/apis/login';
import { useVerifyUserInfo } from '@/apis/verify';
import { AuthTemplate } from '@/components/AuthTemplate';
import { GoToAuthorization } from '@/components/GoToAuthorization';
import { InsertUserInfo } from '@/components/InsertUserInfo';
import { OnAuthorization } from '@/components/OnAuthorization';
import { useToken } from '@/hooks/useToken';
import { removeLocalStorageItem } from '@/utils/localstorage';
import { useEffect, useMemo } from 'react';

export const SignUp = ({ redirectURL }: RedirectURL) => {
  const { token } = useToken();
  const { getUserData } = useVerifyUserInfo(token.mdl_tkn);

  useEffect(() => {
    removeLocalStorageItem('isVerified');
  }, []);

  const RenderedComponent = useMemo(() => {
    let component;
    if (getUserData.data?.data) {
      component = <InsertUserInfo redirectURL={redirectURL} />;
    } else if (token.mdl_tkn) {
      component = <OnAuthorization />;
    } else {
      component = (
        <GoToAuthorization text="본인 인증후 회원가입을 진행해 주세요" />
      );
    }
    return component;
  }, [redirectURL, getUserData.data?.data, token.mdl_tkn]);

  return <AuthTemplate title="회원가입">{RenderedComponent}</AuthTemplate>;
};
