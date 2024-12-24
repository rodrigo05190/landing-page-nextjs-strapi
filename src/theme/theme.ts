import { css } from 'styled-components';

export default {
  breakpoints: {
    mobile: {
      number: 375,
      px: '375px',
    },
    desktop: {
      number: 1365,
      px: '1365px',
    },
  },
  fontFamily: ['Nexa, sans-serif'],
  colors: {
    white: '#ffffff',
    green: {
      light: '#89A757',
      dark: '#145A38',
    },
    gray: {
      360: '#4D5457',
      medium: '#7C7C7C',
      light: {
        1: '#F2F2F2',
        2: '#D3D3D3',
      },
    },
    black: '#000000',
    select: '#E6E5E6',
    yellow: '#FFC72C',
    orange: '#F5A14D',
    wine: '#AC1841',
    divider: '#EBEAE3',
    blue: '#0C2340',
    feedback: {
      error: '#CA0000',
      success: '#41CA00',
      warning: '#ffc107',
      disabled: '#b8b8b8',
    },
  },
  typography: {
    body: css`
      font-family: 'Nexa';
      font-size: 17px;
      font-weight: 400;
      letter-spacing: 0.3px;
      line-height: 27px;
    `,
    bodyNav: css`
      font-family: 'Nexa';
      font-size: 15px;
      font-weight: 700;
      letter-spacing: 0.3px;
      line-height: 25px;
    `,
    bodyLegends: css`
      font-family: 'Nexa';
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.3px;
      line-height: 25px;
    `,
    bodyWhy: css`
      font-family: 'Nexa';
      font-size: 23px;
      font-weight: 300;
      letter-spacing: 0.3px;
      line-height: 33px;
    `,
    titleCards: css`
      font-family: 'Nexa';
      font-size: 19px;
      font-weight: 700;
      letter-spacing: 0.3px;
      line-height: 29px;
    `,
    button: css`
      font-family: 'Nexa';
      font-size: 15px;
      font-weight: 700;
      letter-spacing: 0.3px;
      line-height: 25px;
    `,
    spanBold: css`
      font-family: 'Nexa';
      font-size: 18px;
      font-weight: 700;
      letter-spacing: 0.3px;
      line-height: 28px;
    `,
    h1Desktop: css`
      font-family: 'Nexa';
      font-size: 36px;
      font-weight: 400;
      letter-spacing: 0.3px;
      line-height: 46px;
    `,
    h2Desktop: css`
      font-family: 'Nexa';
      font-size: 32px;
      font-weight: 900;
      letter-spacing: 0.3px;
      line-height: 42px;
    `,
    h3Desktop: css`
      font-family: 'Nexa';
      font-size: 24px;
      font-weight: 700;
      letter-spacing: 0.3px;
      line-height: 34px;
    `,
    h2Mobile: css`
      font-family: 'Nexa';
      font-size: 26px;
      font-weight: 900;
      letter-spacing: 0.3px;
      line-height: 32px;
    `,
  },
  space: [0, 8, 16, 24, 32, 40, 48, 64, 96],
};
