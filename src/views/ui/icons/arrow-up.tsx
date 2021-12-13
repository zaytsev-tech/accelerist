import { FC } from 'react';

import { IconProps } from './type';

export const IconArrowUp: FC<IconProps> = ({ width, height, color, className }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 14 8"
    >
      <path
        d="M13 7L7 1L1 7"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
