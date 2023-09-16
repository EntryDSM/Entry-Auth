import React, { useState } from 'react';
import styled from '@emotion/styled';
import DivideSignupCard from './DivideSignupCard';
import { Stack, Text, theme } from '@team-entry/design_system';
import { GoToAuthorization } from './GoToAuthorization';
import { Link } from 'react-router-dom';

interface IDivideSignup {
  setIsStudent: React.Dispatch<React.SetStateAction<boolean>>;
}

const DivideSignup = ({ setIsStudent }: IDivideSignup) => {
  const [isClick, setIsClick] = useState(false);
  if (isClick)
    return <GoToAuthorization text="본인 인증후 회원가입을 진행해 주세요" />;
  return (
    <>
      <Wrapper>
        <DivideSignupCard
          isStudent
          setIsStudent={setIsStudent}
          setIsClick={setIsClick}
        />
      </Wrapper>
      <Stack justify="center" gap={12} margin={[0, 'auto']}>
        <Text color="gray600" size="body1">
          학생 명의로 가입할 수 없나요?
        </Text>
        <Text
          onClick={() => {
            setIsClick(true);
            setIsStudent(false);
          }}
          color="orange500"
          size="body1"
          style={{ textDecoration: 'underline' }}
          cursor="pointer"
        >
          학부모 명의로 가입
        </Text>
      </Stack>
    </>
  );
};

export default DivideSignup;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 32px;
`;
