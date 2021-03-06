import { FC } from 'react';
import styled from 'styled-components';

interface DefaultButtonProps {
  title: string;
  onClick?: () => void;
}

export const DefaultButton: FC<DefaultButtonProps> = ({ title, onClick }) => {
  return <Button onClick={onClick}>{title}</Button>;
};

const Button = styled.button`
  ${({ theme: { typography } }) => typography.body.bodySelect};
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  background-color: ${({ theme: { colors } }) => colors.blue};
  color: ${({ theme: { colors } }) => colors.white};
  border-radius: 6px;
  border: none;

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.blueHover};
  }

  &:active {
    background-color: ${({ theme: { colors } }) => colors.blueFocus};
  }
`;
