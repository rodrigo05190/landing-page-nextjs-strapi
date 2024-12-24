import { Field } from 'formik';
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

export const BoxInput = styled.div<SpaceProps>`
  height: 149px;

  ${space}
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

export const Input = styled(Field)<
  CustomStylesProps & ValidationProps
>`
  ${({ input, isError, isValid }) =>
    input ??
    css`
      background-color: ${theme.colors.white};
      border: 1px solid;
      border-radius: 5px;
      border-color: ${isError
        ? theme.colors.feedback.error
        : isValid
        ? theme.colors.feedback.success
        : theme.colors.white};
      display: block;
      height: 84px;
      padding: 8px 12px;
      width: 100%;
      ${theme.typography.body}

      &:focus {
        border-width: 2px;
      }
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
