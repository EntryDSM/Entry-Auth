import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const AuthLinks = () => {
  return (
    <_Links>
      <Link to="/sign-up" id="sign-up">
        회원가입
      </Link>
      <Link to="/change-pwd">비밀번호 찾기</Link>
    </_Links>
  );
};

export const _Links = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  > #sign-up {
    ::after {
      content: '';
      float: right;
      width: 1px;
      height: 20px;
      background-color: black;
      margin: 0 20px;
      color: black;
    }
  }
`;
