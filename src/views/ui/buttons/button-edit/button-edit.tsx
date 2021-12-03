import { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { IconPen } from '../../icons';

export const ButtonEdit: FC = () => {
  const theme = useContext(ThemeContext);
  return (
    <Button>
      <IconPen width={17} height={17} color={theme.colors.blue} />
      <p>Edit</p>
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  cursor: pointer;
  border: 1px solid ${({ theme: { colors } }) => colors.blue};
  background-color: ${({ theme: { colors } }) => colors.white};
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  width: 82px;
  height: 36px;

  & svg {
    margin-right: 10px;
  }

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.blueProfileHover};
    color: ${({ theme: { colors } }) => colors.blue};
  }
`;
