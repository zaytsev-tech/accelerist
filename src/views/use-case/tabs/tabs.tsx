import { FC, useState } from 'react';
import styled from 'styled-components';

import { Authorization } from '../../components/login-page/authorization';
import { Registration } from '../../components/login-page/registration';

export const Tabs: FC = () => {
  const [toggle, setToggle] = useState('register');
  return (
    <Container>
      <Input
        id="register"
        name="toggle"
        type="radio"
        defaultChecked={toggle === 'register'}
        onClick={() => setToggle('register')}
      />
      <Switcher htmlFor="register">Register</Switcher>
      <Input id="login" name="toggle" type="radio" onClick={() => setToggle('login')} />
      <Switcher htmlFor="login">Login</Switcher>
      <LoginForm>
        {toggle === 'register' ? <Registration /> : <Authorization />}
      </LoginForm>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${({ theme: { colors } }) => colors.grayLight};
  border-radius: 6px;
  width: 75%;
  height: 40px;
  margin: 0 auto;
  margin-top: 27px;
  display: inline-block;
`;

const Input = styled.input`
  display: none;
  position: relative;
  &:checked + label {
    border: none;
    border-radius: 6px;
    color: ${({ theme: { colors } }) => colors.black};
    background-color: ${({ theme: { colors } }) => colors.blueSecond};
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

const LoginForm = styled.div`
  color: ${({ theme: { colors } }) => colors.grayDark};
  text-align: center;
  margin-top: 34px;
`;
