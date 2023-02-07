import { AuthTemplate } from '@/components/AuthTemplate';
import { AuthLinks } from '@/components/Links';
import { useQueryValues } from '@/hooks/useQueryValues';
import styled from '@emotion/styled';

export const Login = () => {
  const redirectionURI =
    useQueryValues().get('redirection_uri') || 'http://localhost:3000';
  return (
    <AuthTemplate>
      <_Wrapper>
        <_Title>로그인</_Title>
        <p>전화번호</p>
        <_Input />
        <p>비밀번호</p>
        <_Input />
        <_Button>로그인</_Button>
        <AuthLinks />
      </_Wrapper>
    </AuthTemplate>
  );
};

const _Wrapper = styled.div`
  padding: 50px 0;
`;

const _Title = styled.h1`
  font-weight: 500;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  ::after {
    content: '';
    margin-top: 20px;
    width: 50px;
    height: 2px;
    background-color: #ffa26e;
  }
`;

const _Input = styled.div`
  width: 100%;
  height: 42px;
  background-color: #bdbdbd;
`;

const _Button = styled.button`
  width: 100%;
  height: 42px;
  background-color: #ff7e36;
  color: #ffffff;
  margin-top: 45px;
`;
