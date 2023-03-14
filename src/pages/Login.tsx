import { AuthTemplate } from '@/components/AuthTemplate';
import { AuthLinks } from '@/components/Links';
import { useQueryValues } from '@/hooks/useQueryValues';
import styled from '@emotion/styled';
import { Button, Input, Text } from '@team-entry/design_system';

export const Login = () => {
  const redirectionURI =
    useQueryValues().get('redirection_uri') || 'http://localhost:3000';
  return (
    <AuthTemplate>
      <_Wrapper>
        <_Title align="center" color="black900" size="header2">
          로그인
        </_Title>
        <Input
          margin={['top', 42]}
          width={382}
          unit=""
          label="전화번호"
          type="text"
          placeholder="전화번호"
        />
        <Input
          margin={[80, 0, 40, 0]}
          width={382}
          unit=""
          label="비밀번호"
          type="password"
          placeholder="비밀번호"
        />
        <_Button>로그인</_Button>
        <AuthLinks />
      </_Wrapper>
    </AuthTemplate>
  );
};

const _Wrapper = styled.div`
  padding: 50px 0;
`;

const _Title = styled(Text)`
  ::after {
    content: '';
    margin-top: 20px;
    width: 50px;
    height: 2px;
    background-color: #ffa26e;
  }
`;

const _Button = styled.button`
  width: 100%;
  height: 42px;
  background-color: #ff7e36;
  border: 0;
  outline: 0;
  border-radius: 5px;
  color: #ffffff;
  margin-top: 45px;
`;
