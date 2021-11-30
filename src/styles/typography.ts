import { css } from 'styled-components';

export const typography = {
  body: {
    logoTitle: css`
      font-family: 'Gotham Rounded';
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 145%;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: #fff;
    `,
    headline: css`
      font-family: Rubik;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 148%;
      color: #122434;
    `,
    body: css`
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 155%;
      color: #122434;
    `,
    footnote: css`
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 150%;
    `,
  },
};
