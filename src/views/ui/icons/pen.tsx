import { FC } from 'react';

import { IconProps } from './type';

export const IconPen: FC<IconProps> = ({ width, height, color, className }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.293 0.292878C13.6835 -0.0976464 14.3167 -0.0976464 14.7072 0.292878L19.7072 5.29288C20.0978 5.6834 20.0978 6.31657 19.7072 6.70709L6.70723 19.7071C6.51969 19.8946 6.26534 20 6.00012 20H1.00012C0.447837 20 0.00012207 19.5523 0.00012207 19V14C0.00012207 13.7348 0.105479 13.4804 0.293015 13.2929L13.293 0.292878ZM2.00012 14.4142V18H5.58591L17.5859 5.99999L14.0001 2.4142L2.00012 14.4142Z"
        fill={color}
      />
    </svg>
  );
};
