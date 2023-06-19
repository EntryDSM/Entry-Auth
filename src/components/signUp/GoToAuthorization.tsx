import { useOpenPopUp } from '@/apis/popup';
import { BASE_URL } from '@/constant/env';
import styled from '@emotion/styled';
import { Button, Text } from '@team-entry/design_system';

export const GoToAuthorization = () => {
  const { openPopUp } = useOpenPopUp();
  const goToAuthorization = () => {
    openPopUp.mutate(`${BASE_URL}/verify`);
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
