import { FC, FormEvent } from 'react';
import styled from 'styled-components';

interface InputProps {
  value: string;
  onChange: (event: FormEvent<HTMLInputElement>) => void;
  className?: string;
  type?: string;
}

export const Input: FC<InputProps> = ({ value, onChange, className, type }) => {
  return (
    <Container type={type} value={value} onChange={onChange} className={className} />
  );
};

const Container = styled.input`
  width: 100%;
  border: 1px solid ${({ theme: { colors } }) => colors.grayBorder};
  background-color: ${({ theme: { colors } }) => colors.white};
  box-sizing: border-box;
  border-radius: 6px;
  padding: 10px 16px;

  &:focus-within {
    outline-color: ${({ theme: { colors } }) => colors.blue};
  }
`;
