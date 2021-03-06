import { FC } from 'react';
import styled from 'styled-components';

interface NavItemProps {
  title: string;
  active?: string;
}

export const NavItem: FC<NavItemProps> = ({ title, active = '' }) => {
  return title === active ? (
    <ItemActive>{title}</ItemActive>
  ) : (
    <ItemInactive>{title}</ItemInactive>
  );
};

const ItemInactive = styled.li`
  display: inline-block;
  margin-right: 28px;
  cursor: pointer;
`;

const ItemActive = styled.li`
  display: inline-block;
  margin-right: 28px;
  font-weight: 600;
  cursor: pointer;
`;
