import styled from 'styled-components';
import theme from '../../theme';

export const Box = styled.div`
  align-items: center;
  background-color: ${theme.colors.green.light};
  color: ${theme.colors.green.dark};
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 100%;
  justify-content: center;
  width: 448px;
`;
