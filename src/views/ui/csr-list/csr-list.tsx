import { FC } from 'react';

interface CsrListProps {
  list: Array<string>;
}

export const CsrList: FC<CsrListProps> = ({ list }) => {
  return (
    <div>
      {Object.values(list).reduce((prev, curr) => {
        return prev + ' · ' + curr;
      })}
    </div>
  );
};
