import styled from 'styled-components';
import {
  Box,
  Container as ContainerGrid,
  Text,
} from '../../components';
import theme from '../../theme';

interface ContainerProps {
  image: string;
}

export const Section = styled(ContainerGrid)<ContainerProps>`
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid #d3d3d3;
  border-radius: 40px;
  height: 530px;
  margin-top: 94px;
  overflow: hidden;
  position: relative;
  width: 100%;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    background-size: 100%;
    height: auto;
    padding-inline: 0;
    width: calc(100% - 40px);
  }
`;

export const ContainerHero = styled.div`
  background: linear-gradient(
    90deg,
    ${theme.colors.white} 43.85%,
    transparent 63.76%
  );
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding-left: 40px;
  width: 100%;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    background: linear-gradient(
      0deg,
      ${theme.colors.white} 68%,
      transparent 78%
    );
    padding: 178px 10px 16px;
  }
`;

export const TitleHero = styled(Text)`
  color: ${theme.colors.black};
  max-width: 470px;

  strong {
    color: ${theme.colors.green.light};
  }
`;

export const BoxHero = styled(Box)`
  align-items: center;
  display: flex;
  gap: 8px;
  margin-top: 16px;

  & > span {
    color: ${theme.colors.green.dark};
  }
`;
