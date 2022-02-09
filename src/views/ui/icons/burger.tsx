import { FC } from 'react';

import { IconProps } from './type';

export const IconBurger: FC<IconProps> = ({ width, height, color, className }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <rect x="3" y="4" width="18" height="2" rx="1" fill={color} />
      <rect x="3" y="11" width="18" height="2" rx="1" fill={color} />
      <rect x="3" y="18" width="18" height="2" rx="1" fill={color} />
    </svg>
  );
};
