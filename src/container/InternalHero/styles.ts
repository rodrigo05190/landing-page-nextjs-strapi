import styled from 'styled-components';
import {
  Container as ContainerGrid,
  Text,
} from '../../components';
import theme from '../../theme';

interface Props {
  occupation: boolean;
}

export const Section = styled.section`
  display: grid;
  position: relative;
`;

export const Bg = styled.img`
  border-radius: 0 0 40px 40px;
  height: 640px;
  width: 100%;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    height: 336px;
  }
`;

export const Container = styled(ContainerGrid)<Props>`
  align-items: flex-end;
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding-bottom: 40px;

  @media (min-width: ${theme.breakpoints.desktop.px}) {
    height: 100%;
    left: 50%;
    position: absolute;
    top: 0;
    transform: translateX(-50%);
    width: 100%;
  }

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    flex-wrap: wrap-reverse;
    justify-content: center;
    margin-top: -8px;
    padding-inline: 0;
    position: relative;

    & > img {
      position: absolute;
      right: 16px;
      max-height: 70px;
      top: -${({ occupation }) => (occupation ? 64 : 16)}px;
      transform: translateY(-100%);
    }
  }
`;

export const Infos = styled.div`
  position: relative;
`;

export const Occupation = styled.div`
  background-color: ${theme.colors.green.light};
  border-radius: 30px 30px 0px 0px;
  color: ${theme.colors.white};
  height: 72px;
  left: 0;
  padding: 10px 28px;
  position: absolute;
  text-align: center;
  top: -40px;
  width: 270px;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 40px);
  }
`;

export const BoxBlur = styled.div`
  background: linear-gradient(
    72.98deg,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0.7) 100%
  );
  backdrop-filter: blur(20px);
  border-radius: 30px;
  display: grid;
  gap: 8px;
  padding: 8px;
`;

export const Content = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 25px;
  display: grid;
  gap: 8px;
  max-width: 454px;
  padding: 24px 20px;
  width: 100%;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    padding-inline: 12px;
  }
`;

export const Title = styled(Text)`
  color: ${theme.colors.black};
  font-weight: 900;
`;

export const BoxLabel = styled.div<Props>`
  background-color: ${theme.colors.white};
  border-radius: 8px;
  bottom: 16px;
  color: ${theme.colors.black};
  height: fit-content;
  padding: 8px 16px 8px 16px;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    position: absolute;
    right: 16px;
    top: -${({ occupation }) => (occupation ? 64 : 16)}px;
    transform: translateY(-100%);
  }
`;

export const Align = styled.div`
  align-items: center;
  color: ${theme.colors.gray.medium};
  display: flex;
  gap: 8px;

  p {
    position: relative;
    top: 3px;
  }
`;

export const BoxIcon = styled.div`
  align-items: center;
  background-color: ${theme.colors.green.dark};
  border-radius: 10px;
  color: ${theme.colors.white};
  display: flex;
  font-size: 32px;
  height: 46px;
  justify-content: center;
  min-height: 46px;
  min-width: 46px;
  width: 46px;
`;
