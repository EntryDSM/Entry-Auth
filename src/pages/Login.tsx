import { useAdminLogin } from '@/apis/adminLogin';
import { RedirectURL, useLogin } from '@/apis/login';
import { AuthTemplate } from '@/components/AuthTemplate';
import { AuthLinks } from '@/components/Links';
import { SubmitForm } from '@/components/SubmitForm';
import { useForm } from '@/hooks/useForm';
import { isTruthValues } from '@/utils/isTruthValues';
import styled from '@emotion/styled';
import { Button, Input } from '@team-entry/design_system';

interface ILogin extends RedirectURL {
  isAdmin?: boolean;
}

export const Login = ({ redirectURL, isAdmin = false }: ILogin) => {
  const { state, onChangeInputValue } = useForm({
    telephone_number: '',
    password: '',
  });

  const { mutate: userLogin } = useLogin(redirectURL);
  const { mutate: adminLogin } = useAdminLogin(redirectURL);

  return (
    <SubmitForm>
      <AuthTemplate
        title="로그인"
        padding="102px 50px"
        withUnderLine
        isAdmin={isAdmin}
      >
        <Input
          margin={['top', 20]}
          width="100%"
          unit=""
          label={isAdmin ? '아이디' : '전화번호'}
          type={isAdmin ? 'text' : 'tel'}
          placeholder={isAdmin ? '아이디' : '전화번호'}
          name="telephone_number"
          onChange={onChangeInputValue}
          value={state.telephone_number}
        />
        <Input
          margin={['top', 35]}
          width="100%"
          unit=""
          label="비밀번호"
          type="password"
          placeholder="비밀번호"
          name="password"
          onChange={onChangeInputValue}
          value={state.password}
        />
        <_Button
          kind="contained"
          onClick={() =>
            isAdmin
              ? adminLogin({
                  id: state.telephone_number,
                  password: state.password,
                })
              : userLogin({
                  telephone_number: state.telephone_number.replace(/-/g, ''),
                  password: state.password,
                })
          }
          margin={['top', 45]}
          color={isAdmin ? 'green' : 'orange'}
          disabled={!isTruthValues([state.telephone_number, state.password])}
        >
          로그인
        </_Button>
        <AuthLinks isAdmin={isAdmin} />
        <_Button
          kind="outlined"
          color="black"
          onClick={() => {
            window.location.href = redirectURL;
          }}
        >
          홈으로 돌아가기
        </_Button>
      </AuthTemplate>
    </SubmitForm>
  );
};

const _Button = styled(Button)`
  width: 100%;
`;
