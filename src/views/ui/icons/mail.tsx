import { FC } from 'react';

import { IconProps } from './type';

export const IconMail: FC<IconProps> = ({ width, height, color, className }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 6L12 13L2 6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
