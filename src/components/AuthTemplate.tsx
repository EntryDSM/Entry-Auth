import styled from '@emotion/styled';
import { BackgroundImage } from '../assets/Background';

interface PropsType {
  children: React.ReactNode;
  title: string;
  withUnderLine?: boolean;
  width?: number;
  padding?: string;
}

export const AuthTemplate = ({
  children,
  width = 500,
  title,
  withUnderLine,
  padding = '50px',
}: PropsType) => {
  return (
    <_Wrapper>
      <_Background>
        <BackgroundImage />
      </_Background>
      <_Box width={width} padding={padding}>
        <_Title>{title}</_Title>
        {withUnderLine && <_Divider />}
        {children}
      </_Box>
    </_Wrapper>
  );
};

const _Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  @media (max-width: 500px) {
    padding: 15px;
  }
`;

const _Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  transform: translate(-16%, -5%);
`;

const _Box = styled.div<{
  width: number;
  padding: string;
}>`
  z-index: 2;
  width: 100%;
  max-width: 500px;
  padding: ${(props) => props.padding};
  background-color: #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`;

const _Title = styled.h1`
  ${({ theme }) => theme.font.header2};
  text-align: center;
`;

const _Divider = styled.hr`
  width: 50px;
  height: 2px;
  background-color: ${({ theme }) => theme.color.orange300};
  margin: 20px auto 0 auto;
`;
