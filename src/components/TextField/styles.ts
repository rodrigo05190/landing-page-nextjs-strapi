import styled, { css, CSSProp } from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import theme from '../../theme';

export interface CustomStylesProps {
  label?: CSSProp;
  input?: CSSProp;
  error?: CSSProp;
}

export interface ValidationProps {
  isError?: boolean;
  isValid?: boolean;
}

export const BoxInput = styled.div<
  SpaceProps & CustomStylesProps & ValidationProps
>`
  height: 99px;

  ${space}

  & > input {
    ${({ input, isError, isValid }) =>
      input ??
      css`
        background-color: ${theme.colors.white};
        border-radius: 5px;
        border: 1px solid;
        border-color: ${isError
          ? theme.colors.feedback.error
          : isValid
          ? theme.colors.feedback.success
          : theme.colors.white};
        display: block;
        height: 46px;
        padding: 8px 12px;
        width: 100%;
        ${theme.typography.body}

        &:focus {
          border-width: 2px;
        }
      `}
  }
`;

export const Label = styled.label<CustomStylesProps>`
  ${({ label }) =>
    label ??
    css`
      color: ${theme.colors.white};
      display: block;
      ${theme.typography.body}
    `}
`;

export const Error = styled.p<CustomStylesProps>`
  ${({ error }) =>
    error ??
    css`
      color: ${theme.colors.feedback.error};
      margin-top: 4px;
      ${theme.typography.bodyLegends}
    `}
`;
