import React, { useState } from 'react';
import styled from '@emotion/styled';
import DivideSignupCard from './DivideSignupCard';
import { theme } from '@team-entry/design_system';
import { GoToAuthorization } from './GoToAuthorization';

interface IDivideSignup {
  setIsStudent: React.Dispatch<React.SetStateAction<boolean>>;
}

const DivideSignup = ({ setIsStudent }: IDivideSignup) => {
  const [isClick, setIsClick] = useState(false);
  if (isClick) return <GoToAuthorization text="본인 인증후 회원가입을 진행해 주세요" />;
  return (
    <Wrapper>
      <DivideSignupCard
        isStudent
        setIsStudent={setIsStudent}
        setIsClick={setIsClick}
      />
      <DivideLine />
      <DivideSignupCard
        isStudent={false}
        setIsStudent={setIsStudent}
        setIsClick={setIsClick}
      />
    </Wrapper>
  );
};

export default DivideSignup;

const Wrapper = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

const DivideLine = styled.div`
  width: 2px;
  height: 181px;
  background-color: ${theme.color.black100};
`;
