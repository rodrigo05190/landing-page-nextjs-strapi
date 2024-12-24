import styled from 'styled-components';
import theme from '../../theme';

export const Section = styled.div`
  background-color: ${theme.colors.gray.light[1]};
  border-radius: 50px;
  margin-top: -205px;
  padding-top: 205px;

  @media (max-width: ${theme.breakpoints.desktop.px}) {
    margin-top: -322px;
    padding-top: 322px;
  }
`;
