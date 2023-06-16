import { AuthTemplate } from '@/components/AuthTemplate';
import { useForm } from '@/hooks/useForm';
import { isTruthValues } from '@/utils/isTruthValues';
import styled from '@emotion/styled';
import { Button, Input } from '@team-entry/design_system';

export const ChangePwd = () => {
  const { state, onChangeInputValue } = useForm({
    new_password: '',
    checkPassword: '',
  });

  return (
    <AuthTemplate title="비밀번호 재설정">
      <_Wrapper>
        <Input
          placeholder="새 비밀번호를 입력해 주세요."
          type="password"
          width="100%"
          margin={['top', 33]}
          name="new_password"
          onChange={onChangeInputValue}
          value={state.new_password}
        />
        <Input
          placeholder="비밀번호를 한번 더 입력해 주세요."
          type="password"
          width="100%"
          margin={['top', 33]}
          name="checkPassword"
          onChange={onChangeInputValue}
          value={state.checkPassword}
        />
        <Button
          kind="contained"
          color="orange"
          disabled={
            !isTruthValues([state.checkPassword, state.new_password]) ||
            state.checkPassword !== state.new_password
          }
          onClick={() => {}}
        >
          본인 인증
        </Button>
      </_Wrapper>
    </AuthTemplate>
  );
};

const _Wrapper = styled.div`
  > button {
    margin-top: 33px;
    width: 100%;
  }
`;
