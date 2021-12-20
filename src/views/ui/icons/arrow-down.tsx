import { FC } from 'react';

import { IconProps } from './type';

export const IconArrowDown: FC<IconProps> = ({ width, height, color, className }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 14 8"
    >
      <path
        d="M1 1L7 7L13 1"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
