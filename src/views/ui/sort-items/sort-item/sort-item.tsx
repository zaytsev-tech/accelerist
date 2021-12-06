import { FC } from 'react';
import styled from 'styled-components';

interface SortItemProps {
  title: string;
  active: boolean;
}

export const SortItem: FC<SortItemProps> = ({ title, active }) => {
  return active === true ? (
    <ItemActive>{title}</ItemActive>
  ) : (
    <ItemInactive>{title}</ItemInactive>
  );
};

const ItemActive = styled.p`
  cursor: pointer;
  ${({ theme: { typography } }) => typography.body.footnote};
  border-bottom: 2px solid ${({ theme: { colors } }) => colors.blue};
  margin-right: 22px;
`;

const ItemInactive = styled.p`
  cursor: pointer;
  ${({ theme: { typography } }) => typography.body.footnote};
  margin-right: 22px;
`;
