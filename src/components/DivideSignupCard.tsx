/* eslint-disable object-curly-newline */
import React from 'react';
import SchoolBag from '@/assets/SchoolBag';
import styled from '@emotion/styled';
import { Text, Button, theme } from '@team-entry/design_system';

interface IDivideSignupCard {
  setIsStudent: React.Dispatch<React.SetStateAction<boolean>>;
  setIsClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const DivideSignupCard = ({ setIsStudent, setIsClick }: IDivideSignupCard) => {
  return (
    <_Wrapper>
      <_Container>
        <_IconWrapper>
          <SchoolBag />
        </_IconWrapper>
        <Text size="title2" color="black">
          학생 본인
        </Text>
      </_Container>
      <Text size="body2" color="black" align="center">
        {'학생 본인 명의로 '}
        Entry에 가입합니다
      </Text>
      <Button
        kind="rounded"
        color="orange"
        onClick={() => {
          setIsClick(true);
          setIsStudent(true);
        }}
      >
        가입
      </Button>
    </_Wrapper>
  );
};

export default DivideSignupCard;

const _Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
  height: 100%;
`;

const _Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 145px;
`;

const _IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  padding: 12px;
  background-color: ${theme.color.orange500};
  border-radius: 50%;
`;

const _SelectButton = styled(Button)`
  width: 120px;
`;
