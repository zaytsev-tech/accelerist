import { FC, useContext } from 'react';
import { useDispatch } from 'react-redux';
import styled, { ThemeContext } from 'styled-components';

import { getLikeCompany } from '../../../../store/ducks/companies/actions';
import { IconHeart } from '../../icons';

interface ButtonHeartEmptyProps {
  id: string;
}

export const ButtonHeartEmpty: FC<ButtonHeartEmptyProps> = ({ id }) => {
  const theme = useContext(ThemeContext);
  const dispatch = useDispatch();
  function onClick() {
    dispatch(getLikeCompany(id));
  }
  return (
    <Block onClick={onClick}>
      <IconHeart width={20} height={18} color={theme.colors.red} />
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
