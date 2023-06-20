import { useToken } from '@/hooks/useToken';
import styled from '@emotion/styled';
import { Button, Text } from '@team-entry/design_system';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export const OnAuthorization = () => {
  const navigate = useNavigate();
  const { token } = useToken();

  const goToPreviosPage = () => {
    if (token.mdl_tkn) window.open(`/pass?mdl_tkn=${token.mdl_tkn}`, '_blank');
    else navigate('/login');
  };

  const blockReload = (event: BeforeUnloadEvent) => {
    event.preventDefault();
    // eslint-disable-next-line no-param-reassign
    event.returnValue = '';
  };

  useEffect(() => {
    window.addEventListener('beforeunload', blockReload);
    return () => window.removeEventListener('beforeunload', blockReload);
  }, []);

  return (
    <>
      <Text color="#000000" size="18" align="center" margin={['top', 33]}>
        PASS에서 인증을 완료하세요
      </Text>
      <_Button
        kind="outlined"
        color="black"
        cursor="pointer"
        onClick={goToPreviosPage}
      >
        이전
      </_Button>
    </>
  );
};

const _Button = styled(Button)`
  width: 100%;
  margin-top: 33px;
`;
