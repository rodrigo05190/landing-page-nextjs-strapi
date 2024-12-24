import styled from 'styled-components';
import theme from '../../theme';

export const Section = styled.section`
  position: relative;
`;

export const Details = styled.div`
  align-items: center;
  background: linear-gradient(
    72.98deg,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0.7) 100%
  );
  backdrop-filter: blur(20px);
  border-radius: 15px;
  bottom: 26px;
  color: ${theme.colors.gray.medium};
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: space-between;
  left: 50%;
  max-width: 770px;
  padding: 20px 24px;
  position: absolute;
  transform: translateX(-50%);
  width: calc(100% - 40px);

  p {
    font-weight: 700;

    &:first-of-type {
      font-weight: 900;
    }
  }

  @media (min-width: ${theme.breakpoints.desktop.px}) {
    button {
      max-width: 246px;
    }
  }
`;
