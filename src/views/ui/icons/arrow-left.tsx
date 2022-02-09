import { FC } from 'react';

import { IconProps } from './type';

export const IconArrowLeft: FC<IconProps> = ({ width, height, color, className }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 11 18"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.90914 0.376577C10.4112 0.87868 10.4112 1.69275 9.90914 2.19485L3.10399 9L9.90914 15.8051C10.4112 16.3073 10.4112 17.1213 9.90914 17.6234C9.40703 18.1255 8.59297 18.1255 8.09086 17.6234L0.376577 9.90914C-0.125526 9.40703 -0.125526 8.59297 0.376577 8.09086L8.09086 0.376577C8.59297 -0.125526 9.40703 -0.125526 9.90914 0.376577Z"
        fill={color}
      />
    </svg>
  );
};
