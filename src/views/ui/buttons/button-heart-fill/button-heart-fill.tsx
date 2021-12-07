import { FC, useContext } from 'react';
import { useDispatch } from 'react-redux';
import styled, { ThemeContext } from 'styled-components';

import { getDislikeCompany } from '../../../../store/ducks/companies/actions';
import { IconHeart } from '../../icons';

interface ButtonHeartFillProps {
  id: string;
}

export const ButtonHeartFill: FC<ButtonHeartFillProps> = ({ id }) => {
  const theme = useContext(ThemeContext);
  const dispatch = useDispatch();
  function onClick() {
    dispatch(getDislikeCompany(id));
  }

  return (
    <Block onClick={onClick}>
      <IconHeart
        width={20}
        height={18}
        color={theme.colors.red}
        fill={theme.colors.red}
      />
    </Block>
  );
};

const Block = styled.button`
  border: 1px solid ${({ theme: { colors } }) => colors.grayBorder};
  background-color: ${({ theme: { colors } }) => colors.white};
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
