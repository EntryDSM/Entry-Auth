import { useLogin } from '@/apis/login';
import { AuthTemplate } from '@/components/AuthTemplate';
import { AuthLinks } from '@/components/Links';
import { useForm } from '@/hooks/useForm';
import { useQueryValues } from '@/hooks/useQueryValues';
import { isTruthValues } from '@/utils/isTruthValues';
import styled from '@emotion/styled';
import { Button, Input, Text } from '@team-entry/design_system';

export const Login = () => {
  const redirectionURI =
    useQueryValues().get('redirection_uri') || 'https://www.entrydsm.hs.kr';
  const { state, onChangeInputValue } = useForm({
    telephone_number: '',
    password: '',
  });

  const { mutate } = useLogin({
    tel: state.telephone_number,
    password: state.password,
    redirectionURI,
  });

  return (
    <AuthTemplate title="로그인" padding="102px 50px" withUnderLine>
      <Input
        margin={['top', 20]}
        width={382}
        unit=""
        label="전화번호"
        type="text"
        placeholder="전화번호"
        name="telephone_number"
        onChange={onChangeInputValue}
        value={state.telephone_number}
      />
      <Input
        margin={['top', 35]}
        width={382}
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
        onClick={() => {}}
        margin={['top', 45]}
        color="orange"
        disabled={!isTruthValues([state.telephone_number, state.password])}
      >
        로그인
      </_Button>
      <AuthLinks />
    </AuthTemplate>
  );
};

const _Button = styled(Button)`
  width: 100%;
`;
