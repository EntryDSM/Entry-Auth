import React from 'react';
import SchoolBag from '@/assets/SchoolBag';
import Users from '@/assets/Users';
import styled from '@emotion/styled';
import { Text, Button, theme } from '@team-entry/design_system';
import { useModal } from '@/hooks/useModal';

interface IDivideSignupCard {
  isStudent: boolean;
  setIsStudent: React.Dispatch<React.SetStateAction<boolean>>;
  setIsClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const DivideSignupCard = ({
  isStudent,
  setIsStudent,
  setIsClick,
}: IDivideSignupCard) => {
  const { render, close } = useModal();
  return (
    <_Wrapper>
      <_Container>
        <_IconWrapper>{isStudent ? <SchoolBag /> : <Users />}</_IconWrapper>
        <Text size="title2" color="black">
          {isStudent ? '학생 본인' : '학부모'}
        </Text>
      </_Container>
      <Text size="body2" color="black" align="center">
        {isStudent ? '학생 본인 명의로' : '학부모 명의로'}
        <br />
        Enyry에 가입합니다
      </Text>
      <Button
        kind="rounded"
        color="orange"
        onClick={
          isStudent
            ? () => {
              setIsClick(true);
              setIsStudent(true);
            }
            : () =>
              render({
                title: '안내',
                content:
                    '학부모 명의로 가입 시 원서 접수 서류에 \n 학부모 연락처가 입력됩니다.',
                button: (
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <_SelectButton
                      kind="contained"
                      color="orange"
                      onClick={() => {
                        close();
                        setIsClick(true);
                        setIsStudent(false);
                      }}
                    >
                      진행
                    </_SelectButton>
                    <_SelectButton
                      kind="outlined"
                      color="black"
                      onClick={() => {
                        close();
                      }}
                    >
                      닫기
                    </_SelectButton>
                  </div>
                ),
              })
        }
      >
        선택
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
