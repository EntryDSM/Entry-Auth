import styled from '@emotion/styled';
import { BackgroundImage } from '../assets/Background';

interface PropsType {
  children: React.ReactNode;
  width?: number;
}

export const AuthTemplate = ({ children, width = 500 }: PropsType) => {
  return (
    <_Wrapper>
      <_Background>
        <BackgroundImage />
      </_Background>
      <_Box width={width}>{children}</_Box>
    </_Wrapper>
  );
};

const _Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const _Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  transform: translate(-16%, -5%);
`;

const _Box = styled.div<{
  width: number;
}>`
  z-index: 2;
  width: 500px;
  padding: 50px;
  background-color: #ffffff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
  border: 8px;
  padding: 50px;
  box-sizing: border-box;
`;
