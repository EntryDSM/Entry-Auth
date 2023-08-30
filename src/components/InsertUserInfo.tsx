import { useVerifyUserInfo } from '@/apis/verify';
import { useToken } from '@/hooks/useToken';
import { SubmitForm } from './SubmitForm';
import { Button, Input, Text } from '@team-entry/design_system';
import { useForm } from '@/hooks/useForm';
import { useSignUp } from '@/apis/signup';
import styled from '@emotion/styled';
import { RedirectURL } from '@/apis/login';

interface IInsertUserInfo extends RedirectURL {
  isStudent: boolean;
}

export const InsertUserInfo = ({ isStudent, redirectURL }: IInsertUserInfo) => {
  const { token } = useToken();
  const { getUserData } = useVerifyUserInfo(token.mdl_tkn);

  const { name, phone_number } = getUserData.data?.data || {
    name: '',
    phone_number: '',
  };

  const { onChangeInputValue, state } = useForm<{
    password: string;
    rePassword: string;
  }>({
    password: '',
    rePassword: '',
  });
  const { signUp } = useSignUp(redirectURL);

  if (!getUserData.data?.data) return null;

  return (
    <SubmitForm>
      <Input
        type="text"
        value={name}
        label="이름"
        width="100%"
        placeholder=""
      />
      <Input
        type="tel"
        value={phone_number}
        label="전화번호"
        width="100%"
        placeholder=""
        margin={['top', 16]}
      />
      <div>
        <Input
          type="password"
          value={state.password}
          name="password"
          label="비밀번호"
          width="100%"
          placeholder="비밀번호"
          margin={['top', 16]}
          onChange={onChangeInputValue}
        />
        <Text color="black500" size="body3" margin={['top', 10]}>
          영문 대소문자, 숫자, 특수문자가 포함되어야 하며
          <br />
          8자 이상, 32자 이내여야 합니다
        </Text>
      </div>
      <Input
        type="password"
        name="rePassword"
        value={state.rePassword}
        label="비밀번호 확인"
        width="100%"
        placeholder="비밀번호 확인"
        margin={['top', 16]}
        onChange={onChangeInputValue}
      />
      <_Button
        margin={['top', 32]}
        onClick={() => {
          signUp.mutate({
            telephone_number: phone_number,
            password: state.password,
            is_student: isStudent,
          });
        }}
        color="orange"
        disabled={state.rePassword !== state.password}
      >
        회원가입
      </_Button>
    </SubmitForm>
  );
};

const _Button = styled(Button)`
  width: 100%;
`;
