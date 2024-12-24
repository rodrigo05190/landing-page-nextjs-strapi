import { Field } from 'formik';
import styled, { css, CSSProp } from 'styled-components';
import { space, SpaceProps } from 'styled-system';
import { chevronDown } from '../../assets/icons';
import theme from '../../theme';

export interface CustomStylesProps {
  label?: CSSProp;
  input?: CSSProp;
  error?: CSSProp;
}

export const BoxInput = styled.div<SpaceProps>`
  height: 99px;

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

export const Input = styled(Field)`
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: ${theme.colors.select};
  background-image: url(${chevronDown});
  background-position-x: calc(100% - 16px);
  background-position-y: 50%;
  background-repeat: no-repeat;
  border-radius: 5px;
  display: block;
  height: 46px;
  padding: 11px 16px;
  width: 100%;
  ${theme.typography.body}
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
