import styled from 'styled-components';
import theme from '../../theme';

export const Container = styled.div`
  background-color: ${theme.colors.gray.light[2]};
  border-radius: 40px;
  height: 580px;
  padding: 10px;
  width: 100%;

  & > div {
    border-radius: 35px;
    height: 100%;
    width: 100%;
  }
`;
