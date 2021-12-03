import { FC } from 'react';
import styled from 'styled-components';

export const ButtonDelete: FC = () => {
  return (
    <Button>
      <p>Delete</p>
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  cursor: pointer;
  color: ${({ theme: { colors } }) => colors.red};
  border: 1px solid ${({ theme: { colors } }) => colors.grayBorder};
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
    border: 1px solid ${({ theme: { colors } }) => colors.grayDark};
  }

  &:active {
    border: 1px solid ${({ theme: { colors } }) => colors.red};
  }
`;
