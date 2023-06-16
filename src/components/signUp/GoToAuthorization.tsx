import { useOpenPopUp } from '@/apis/popup';
import styled from '@emotion/styled';
import { Button, Text } from '@team-entry/design_system';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  changeAuthorizationStatus: Dispatch<SetStateAction<boolean>>;
}

export const GoToAuthorization = ({ changeAuthorizationStatus }: Props) => {
  const { openPopUp } = useOpenPopUp();
  const goToAuthorization = () => {
    setTimeout(() => {
      changeAuthorizationStatus(true);
    }, 600);
    openPopUp.mutate();
  };
  return (
    <>
      <Text color="#000000" size="18" align="center" margin={['top', 33]}>
        본인 인증 후 회원가입을 진행해 주세요.
      </Text>
      <_Button
        kind="contained"
        color="orange"
        cursor="pointer"
        onClick={goToAuthorization}
      >
        본인 인증
      </_Button>
    </>
  );
};

const _Button = styled(Button)`
  width: 100%;
  margin-top: 33px;
`;
