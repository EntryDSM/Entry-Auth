import { instance } from '@/apis/axios';
import { useOpenPopUp } from '@/apis/popup';
import { AuthTemplate } from '@/components/AuthTemplate';
import { useForm } from '@/hooks/useForm';
import { useModal } from '@/hooks/useModal';

import { isTruthValues } from '@/utils/isTruthValues';
import styled from '@emotion/styled';
import { Input, Button } from '@team-entry/design_system';

export const SignUp = () => {
  const { render, close } = useModal();
  const { mutate: openPopUp } = useOpenPopUp();
  const { state, onChangeInputValue } = useForm({
    name: '',
    phoneNumber: '',
    password: '',
    checkPassword: '',
  });

  const successSignUp = () => {
    openPopUp();

    // render({
    //   title: '회원가입',
    //   content: '가입이 완료되었습니다',
    //   button: (
    //     <Button kind="contained" color="orange" onClick={close}>
    //       완료
    //     </Button>
    //   ),
    // });
  };

  return (
    <AuthTemplate title="회원가입">
      <Input
        margin={['top', 33]}
        width="100%"
        unit=""
        label="이름"
        type="text"
        placeholder="이름"
        name="name"
        onChange={onChangeInputValue}
        value={state.name}
      />
      <Input
        margin={['top', 16]}
        width="100%"
        unit=""
        label="전화번호"
        type="text"
        placeholder="전화번호"
        name="phoneNumber"
        onChange={onChangeInputValue}
        value={state.phoneNumber}
      />
      <Input
        margin={['top', 16]}
        width="100%"
        unit=""
        label="비밀번호"
        type="password"
        placeholder="비밀번호"
        name="password"
        onChange={onChangeInputValue}
        value={state.password}
      />
      <Input
        margin={[16, 0, 33, 0]}
        width="100%"
        unit=""
        label="비밀번호 확인"
        type="password"
        placeholder="비밀번호 확인"
        name="checkPassword"
        onChange={onChangeInputValue}
        value={state.checkPassword}
      />
      <_Button
        kind="contained"
        color="orange"
        cursor="pointer"
        disabled={
          !isTruthValues([
            state.name,
            state.password,
            state.checkPassword,
            state.phoneNumber,
          ]) || state.checkPassword !== state.password
        }
        onClick={() => {
          successSignUp();
        }}
      >
        PASS로 본인 인증
      </_Button>
    </AuthTemplate>
  );
};

const _Button = styled(Button)`
  width: 100%;
`;
