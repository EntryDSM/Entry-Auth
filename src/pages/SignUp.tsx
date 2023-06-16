import { useOpenPopUp } from '@/apis/popup';
import { AuthTemplate } from '@/components/AuthTemplate';
import { GoToAuthorization } from '@/components/signUp/GoToAuthorization';
import { OnAuthorization } from '@/components/signUp/OnAuthorization';
import { useModal } from '@/hooks/useModal';
import styled from '@emotion/styled';
import { Button, Text } from '@team-entry/design_system';

export const SignUp = () => {
  const { render, close } = useModal();
  const { onAuthorization, changeAuthorizationStatus } = useOpenPopUp();

  // render({
  //   title: '회원가입',
  //   content: '가입이 완료되었습니다',
  //   button: (
  //     <Button kind="contained" color="orange" onClick={close}>
  //       완료
  //     </Button>
  //   ),
  // });

  return (
    <AuthTemplate title="회원가입">
      {onAuthorization ? (
        <OnAuthorization />
      ) : (
        <GoToAuthorization
          changeAuthorizationStatus={changeAuthorizationStatus}
        />
      )}
    </AuthTemplate>
  );
};
