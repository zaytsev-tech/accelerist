import { FC } from 'react';
import styled from 'styled-components';

export const Tabs: FC = () => {
  return (
    <Container>
      <Input id="register" name="toggle" type="radio" checked />
      <Switcher htmlFor="register">Register</Switcher>
      <Input id="login" name="toggle" type="radio" />
      <Switcher htmlFor="login">Login</Switcher>
    </Container>
  );
};

const Container = styled.div`
  background: ${({ theme: { colors } }) => colors.grayLight};
  border-radius: 6px;
  width: 75%;
  height: 40px;
  margin: 0 auto;
  margin-top: 27px;
`;

const Input = styled.input`
  display: none;
  position: relative;
  &:checked + label {
    border: none;
    border-radius: 6px;
    color: ${({ theme: { colors } }) => colors.grayDark};
    background: ${({ theme: { colors } }) => colors.blueSecond};
    &:hover {
      color: ${({ theme: { colors } }) => colors.black};
    }
  }
`;

const Switcher = styled.label`
  width: 183px;
  height: 40px;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  transition: background 600ms ease, color 600ms ease;
  color: ${({ theme: { colors } }) => colors.grayDark};

  &:hover {
    color: ${({ theme: { colors } }) => colors.black};
  }
`;
