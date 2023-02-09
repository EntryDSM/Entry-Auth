import { AuthTemplate } from '@/components/AuthTemplate';
import styled from '@emotion/styled';

export const SignUp = () => {
  return (
    <AuthTemplate>
      <_Title>회원가입</_Title>
      <p>이름</p>
      <_Input />
      <p>전화번호</p>
      <_Input />
      <p>비밀번호</p>
      <_Input />
      <p>비밀번호 확인</p>
      <_Input />
      <_Button>본인 인증</_Button>
    </AuthTemplate>
  );
};

const _Title = styled.h1`
  font-weight: 500;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  margin-bottom: 33px;
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
  margin-top: 33px;
`;
