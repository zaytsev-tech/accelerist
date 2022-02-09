import { FC } from 'react';

import { IconProps } from './type';

export const IconSearch: FC<IconProps> = ({ width, height, color, className }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill={color}
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.1999 5.59999C8.10717 5.59999 5.59999 8.10717 5.59999 11.1999C5.59999 14.2927 8.10717 16.7999 11.1999 16.7999C14.2927 16.7999 16.7999 14.2927 16.7999 11.1999C16.7999 8.10717 14.2927 5.59999 11.1999 5.59999ZM4 11.1999C4 7.22353 7.22353 4 11.1999 4C15.1764 4 18.3999 7.22353 18.3999 11.1999C18.3999 15.1764 15.1764 18.3999 11.1999 18.3999C7.22353 18.3999 4 15.1764 4 11.1999Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.1545 15.1544C15.467 14.8419 15.9735 14.8419 16.2859 15.1544L19.7659 18.6343C20.0783 18.9467 20.0783 19.4533 19.7659 19.7657C19.4535 20.0781 18.9469 20.0781 18.6345 19.7657L15.1545 16.2857C14.8421 15.9733 14.8421 15.4668 15.1545 15.1544Z"
        fill={color}
      />
    </svg>
  );
};
