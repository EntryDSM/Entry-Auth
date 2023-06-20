import { useResetPwd } from '@/apis/resetPwd';
import { useForm } from '@/hooks/useForm';
import { Button, Input } from '@team-entry/design_system';
import { SubmitForm } from './SubmitForm';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import { removeLocalStorageItem } from '@/utils/localstorage';
import { useNavigate } from 'react-router';

interface Props {
  telephone_number: string;
}

export const ReSetPwd = ({ telephone_number }: Props) => {
  const { state, onChangeInputValue } = useForm<{
    new_password: string;
    check_password: string;
  }>({
    new_password: '',
    check_password: '',
  });
  const { resetPwd } = useResetPwd();
  const navigate = useNavigate();

  useEffect(() => removeLocalStorageItem('isVerified'), []);

  if (!telephone_number) navigate('/change-pwd');

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
        margin={['top', 33]}
      />
      <Input
        type="password"
        placeholder="비밀번호를 다시 한 번 입력하세요"
        label="새 비밀번호 확인"
        width="100%"
        name="check_password"
        onChange={onChangeInputValue}
        value={state.check_password}
        margin={['top', 33]}
      />
      <_Button
        kind="contained"
        color="orange"
        onClick={() =>
          resetPwd.mutate({
            telephone_number,
            new_password: state.new_password,
          })}
        margin={['top', 33]}
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
