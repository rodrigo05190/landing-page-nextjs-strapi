import styled, { css } from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import { prop, switchProp } from 'styled-tools';
import theme from '../../theme';

export interface BtnProps extends SpaceProps {
  size: 'full' | 'small' | 'medium' | 'large' | 'big';
  color?:
    | 'greenDark'
    | 'transparent'
    | 'white'
    | 'orange'
    | 'greenDarkForm';
}

const sizes = {
  full: '100%',
  small: '147px',
  medium: '149px',
  large: '334px',
  big: '697px',
};

const variant = {
  greenDark: css`
    background-color: ${theme.colors.green.dark};
    color: ${theme.colors.white};

    &:hover {
      background-color: ${theme.colors.green.light};
      color: ${theme.colors.white};
    }
  `,
  greenDarkForm: css`
    background-color: ${theme.colors.green.dark};
    color: ${theme.colors.white};

    &:hover {
      background-color: ${theme.colors.white};
      color: ${theme.colors.green.dark};
    }
  `,
  transparent: css`
    border: 1px solid ${theme.colors.gray.medium};
    background-color: transparent;
    color: ${theme.colors.gray.medium};

    &:hover {
      background-color: ${theme.colors.gray.medium};
      color: ${theme.colors.white};
    }
  `,
  white: css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.green.dark};

    &:hover {
      background-color: ${theme.colors.green.light};
      color: ${theme.colors.white};
    }
  `,
  orange: css`
    background-color: ${theme.colors.orange};
    color: ${theme.colors.white};

    &:hover {
      background-color: ${theme.colors.white};
      color: ${theme.colors.orange};
    }
  `,
};

export const Btn = styled.button<BtnProps>`
  align-items: center;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  gap: 12px;
  padding: 14px;
  transition: 0.2s ease-in-out;
  max-width: ${({ size }) => sizes[size]};
  width: 100%;
  ${space}

  ${theme.typography.button}

  img {
    height: 20px;
    width: 20px;
  }

  ${switchProp(prop('color', 'greenDark'), {
    greenDark: variant.greenDark,
    greenDarkForm: variant.greenDarkForm,
    transparent: variant.transparent,
    white: variant.white,
    orange: variant.orange,
  })}
`;
