import { ResetPwdRequest, useResetPwd } from '@/apis/resetPwd';
import { useForm } from '@/hooks/useForm';
import { Button, Input } from '@team-entry/design_system';
import { SubmitForm } from './SubmitForm';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import { removeLocalStorageItem } from '@/utils/localstorage';

export const ReSetPwd = () => {
  const { state, onChangeInputValue } = useForm<ResetPwdRequest>({
    new_password: '',
    check_password: '',
  });
  const { resetPwd } = useResetPwd();

  useEffect(() => removeLocalStorageItem('isVerified'), []);

  return (
    <SubmitForm>
      <Input
        type="password"
        placeholder="새로 사용할 비밀번호를 입력하세요"
        label="새 비밀번호"
        width="100%"
        name="new_password"
        onChange={onChangeInputValue}
        value={state.new_password}
        margin={['top', 16]}
      />
      <Input
        type="password"
        placeholder="비밀번호를 다시 한 번 입력하세요"
        label="새 비밀번호 확인"
        width="100%"
        name="check_password"
        onChange={onChangeInputValue}
        value={state.check_password}
        margin={['top', 16]}
      />
      <_Button
        kind="contained"
        color="orange"
        onClick={() => resetPwd.mutate(state)}
        margin={['top', 16]}
        disabled={state.check_password !== state.new_password}
      >
        확인
      </_Button>
    </SubmitForm>
  );
};

const _Button = styled(Button)`
  width: 100%;
`;
