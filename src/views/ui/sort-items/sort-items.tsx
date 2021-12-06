import { FC } from 'react';

import { SortItem } from './sort-item';

export const SortItems: FC = () => {
  return (
    <>
      <SortItem title="Alphabet" active={true} />
      <SortItem title="Prospects Available" active={false} />
      <SortItem title="Last Activity" active={false} />
    </>
  );
};
