import { FC } from 'react';
import styled from 'styled-components';

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
