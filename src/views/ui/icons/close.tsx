import { FC } from 'react';

import { IconProps } from './type';

export const IconClose: FC<IconProps> = ({ width, height, color, className }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M18 6L6 18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 6L18 18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
