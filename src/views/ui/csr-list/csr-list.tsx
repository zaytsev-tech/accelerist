import { FC } from 'react';

interface CsrListProps {
  list: Array<string>;
}

export const CsrList: FC<CsrListProps> = ({ list }) => {
  return list.length > 0 ? (
    <div>
      {Object.values(list).reduce((prev, curr) => {
        return prev + ' · ' + curr;
      })}
    </div>
  ) : (
    <div>
      <p>No information</p>
    </div>
  );
};
