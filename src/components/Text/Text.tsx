import styled, { css } from 'styled-components';
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';
import { prop, switchProp } from 'styled-tools';
import theme from '../../theme';

export type TextProps = ColorProps &
  SpaceProps &
  TypographyProps & {
    variant?:
      | 'body'
      | 'bodyNav'
      | 'bodyLegends'
      | 'bodyWhy'
      | 'titleCards'
      | 'button'
      | 'spanBold'
      | 'h1Desktop'
      | 'h2Desktop'
      | 'h3Desktop'
      | 'h2Mobile';
    uppercase?: boolean;
  };

const Text = styled.p<TextProps>`
  ${switchProp(prop('variant', 'body'), {
    body: theme.typography.body,
    bodyNav: theme.typography.bodyNav,
    bodyLegends: theme.typography.bodyLegends,
    bodyWhy: theme.typography.bodyWhy,
    titleCards: theme.typography.titleCards,
    button: theme.typography.button,
    spanBold: theme.typography.spanBold,
    h1Desktop: theme.typography.h1Desktop,
    h2Desktop: theme.typography.h2Desktop,
    h3Desktop: theme.typography.h3Desktop,
    h2Mobile: theme.typography.h2Mobile,
  })}

  ${({ uppercase }) =>
    uppercase &&
    css`
      text-transform: uppercase;
    `}

  ${color}
  ${space}
  ${typography}
`;

Text.displayName = 'Text';

export default Text;
