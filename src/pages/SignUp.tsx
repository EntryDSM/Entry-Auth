import { AuthTemplate } from '@/components/AuthTemplate';
import styled from '@emotion/styled';
import { Input, Text } from '@team-entry/design_system';

export const SignUp = () => {
  return (
    <AuthTemplate>
      <Text align="center" color="black900" size="header2">
        회원가입
      </Text>
      <Input
        margin={['top', 30]}
        width={382}
        unit=""
        label="이름"
        type="text"
        placeholder="이름"
      />
      <Input
        margin={['top', 70]}
        width={382}
        unit=""
        label="전화번호"
        type="text"
        placeholder="전화번호"
      />
      <Input
        margin={['top', 70]}
        width={382}
        unit=""
        label="비밀번호"
        type="password"
        placeholder="비밀번호"
      />
      <Input
        margin={[70, 0, 90, 0]}
        width={382}
        unit=""
        label="비밀번호 확인"
        type="password"
        placeholder="비밀번호 확인"
      />
      <_Button>본인 인증</_Button>
    </AuthTemplate>
  );
};

const _Button = styled.button`
  width: 100%;
  height: 42px;
  background-color: #ff7e36;
  color: #ffffff;
  outline: 0;
  border: 0;
  border-radius: 5px;
`;
