import styled from 'styled-components';
import theme from '../../theme';
import Text from '../Text/Text';

export const ContainerCard = styled.a`
  background-color: ${theme.colors.white};
  border-radius: 30px;
  border: 1px solid ${theme.colors.gray.light[2]};
  display: block;
  max-width: 370px;
  padding: 10px;
  position: relative;
  width: 100%;

  &:hover > div:first-of-type {
    & > img:first-of-type {
      transform: scale(1.15);
    }
  }
`;

export const BoxDescription = styled.div`
  display: grid;
  gap: 16px;
  height: 190px;
  margin-bottom: 16px;
  margin-top: 24px;
  grid-template-rows: auto 50px 25px;
`;

export const BoxImage = styled.div`
  border-radius: 30px;
  display: grid;
  overflow: hidden;
  position: relative;

  & > span {
    background-color: ${theme.colors.green.light};
    border-radius: 30px 30px 0px 0px;
    color: ${theme.colors.white};
    height: 44px;
    padding-top: 11px;
    position: absolute;
    text-align: center;
    width: 348px;
    z-index: 1;
  }

  & > img:first-of-type {
    height: 238px;
    object-fit: cover;
    transition: 0.4s ease-in-out;
  }
`;

export const ImageEnterprise = styled.img`
  bottom: 8px;
  max-height: 70px;
  position: absolute;
  right: 8px;
`;

export const BoxLabel = styled.div`
  background-color: ${theme.colors.white};
  color: ${theme.colors.black};
  padding: 8px 16px 8px 16px;
  position: absolute;
  border-radius: 8px;
  bottom: 16px;
  right: 16px;
`;

export const Title = styled(Text)`
  color: ${theme.colors.black};
`;

export const BoxInfoIcon = styled.div`
  align-items: flex-start;
  color: ${theme.colors.gray.medium};
  display: flex;
  min-height: 28px;
  gap: 8px;
`;

export const BoxPartnership = styled.div`
  align-items: center;
  border-top: 1px solid ${theme.colors.gray.light[2]};
  color: ${theme.colors.gray.medium};
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  padding-top: 16px;

  & > img {
    height: 34px;
    object-fit: cover;
  }
`;

export const BoxEmpty = styled.div`
  height: 52px;
`;
