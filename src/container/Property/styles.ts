import styled from 'styled-components';
import Text from '../../components/Text';
import theme from '../../theme';

export const Section = styled.section`
  padding-block: 60px;

  & + & {
    position: relative;

    &::before {
      background-color: ${theme.colors.gray.light[2]};
      content: '';
      height: 1px;
      width: 100%;
      max-width: 1170px;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  > div {
    padding-bottom: 20px;
  }
`;

export const Title = styled(Text)`
  color: ${theme.colors.green.dark};

  & > span {
    background-color: ${theme.colors.green.dark};
    color: ${theme.colors.white};
    padding-inline: 2px;
    padding-top: 16px;
    text-transform: uppercase;
  }
`;

export const SubTitle = styled(Text)`
  color: ${theme.colors.gray.medium};
`;
