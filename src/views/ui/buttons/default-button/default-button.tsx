import { FC } from 'react';
import styled from 'styled-components';

interface DefaultButtonProps {
  title: string;
}

export const DefaultButton: FC<DefaultButtonProps> = ({ title }) => {
  return <Button>{title}</Button>;
};

const Button = styled.button`
  ${({ theme: { typography } }) => typography.body.body};
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  background: ${({ theme: { colors } }) => colors.blue};
  color: ${({ theme: { colors } }) => colors.white};
  border-radius: 6px;
  font-weight: 600;
  border: none;
`;
