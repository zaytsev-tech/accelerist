import { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { IconHeart } from '../../icons';

export const ButtonHeartEmpty: FC = () => {
  const theme = useContext(ThemeContext);
  return (
    <Block>
      <IconHeart width={20} height={18} color={theme.colors.red} />
    </Block>
  );
};

const Block = styled.button`
  border: 1px solid ${({ theme: { colors } }) => colors.grayBorder};
  background: ${({ theme: { colors } }) => colors.white};
  border-radius: 6px;
  cursor: pointer;
  width: 40px;
  height: 40px;

  &:hover {
    border-color: ${({ theme: { colors } }) => colors.grayCheckbox};
  }

  &:active {
    border-color: ${({ theme: { colors } }) => colors.red};
  }
`;
