import { useVerifyUserInfo } from '@/apis/verify';
import { AuthTemplate } from '@/components/AuthTemplate';
import { GoToAuthorization } from '@/components/GoToAuthorization';
import { OnAuthorization } from '@/components/OnAuthorization';
import { ReSetPwd } from '@/components/ResetPwd';
import { useToken } from '@/hooks/useToken';
import { useMemo } from 'react';

export const ChangePwd = () => {
  const { token } = useToken();
  const { getUserData } = useVerifyUserInfo(token.mdl_tkn);

  const Component = useMemo(() => {
    let component;
    if (getUserData.data?.data) {
      component = (
        <ReSetPwd telephone_number={getUserData.data.data.phone_number} />
      );
    } else if (token.mdl_tkn) {
      component = <OnAuthorization />;
    } else {
      component = (
        <GoToAuthorization text="본인 인증후 비밀번호를 재설정해주세요" />
      );
    }
    return component;
  }, [token.mdl_tkn, getUserData.data?.data]);

  return <AuthTemplate title="비밀번호 재설정">{Component}</AuthTemplate>;
};
