import { FC } from 'react';
import styled from 'styled-components';

interface CheckBoxProps {
  title: string;
  onClick: () => void;
  className?: string;
}

export const CheckBox: FC<CheckBoxProps> = ({ title, onClick, className }) => {
  return (
    <Container className={className}>
      <Input id="checkbox" type="checkbox" onClick={() => onClick} />
      <Title htmlFor="checkbox">{title}</Title>
    </Container>
  );
};

const Container = styled.div`
  margin: 0;
  & > input[type='checkbox'] + *::before {
    content: '';
    display: inline-block;
    vertical-align: bottom;
    width: 15px;
    height: 15px;
    margin-right: 10px;
    border-radius: 10%;
    border: 1px solid ${({ theme: { colors } }) => colors.grayCheckbox};
    flex-shrink: 0;

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.mobile}) {
      width: 10px;
      height: 10px;
    }
  }

  & > input[type='checkbox']:checked + *::before {
    content: '✓';
    color: ${({ theme: { colors } }) => colors.black};
    line-height: 15px;
    text-align: center;
    vertical-align: bottom;
    background: ${({ theme: { colors } }) => colors.blueSecond};
    border-color: ${({ theme: { colors } }) => colors.blueSecond};

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.mobile}) {
      line-height: 10px;
    }
  }
`;

const Input = styled.input`
  display: none;
`;

const Title = styled.label`
  color: ${({ theme: { colors } }) => colors.black};
  font-size: 15px;

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.mobile}) {
    font-size: 70%;
  }
`;
