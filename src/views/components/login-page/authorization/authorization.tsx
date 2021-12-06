import { FC } from 'react';
import { Field, Form } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

import { AuthData, Profile } from '../../../../store/user';
import { loginRequest } from '../../../../store/user/actions';
import { routes } from '../../../routes';
import { DefaultButton } from '../../../ui/buttons/default-button';
import { CheckBox } from '../../../ui/checkbox';
import { Input } from '../../../ui/input';

const initialValue = {
  email: '',
  password: '',
};

export const Authorization: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state: Profile) => state.user.isAuthorized);

  const onSubmit = (value: AuthData) => {
    dispatch(loginRequest(value));
    if (token) navigate(routes.dashboard.root);
  };
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValue}
      render={({ handleSubmit }) => (
        <>
          <Field
            type="text"
            name="email"
            render={({ input: { value, onChange } }) => (
              <>
                <Label>Email</Label>
                <FormInput value={value} onChange={onChange} />
              </>
            )}
          />
          <Field
            type="password"
            name="password"
            render={({ input: { value, onChange } }) => (
              <>
                <Label>Password</Label>
                <FormInput type="password" value={value} onChange={onChange} />
                <ControlPass>
                  <Remember
                    className="Remember"
                    title="Remember"
                    onClick={() => console.log('Remember')}
                  />
                  <ForgotPass>Forgot Password?</ForgotPass>
                </ControlPass>
              </>
            )}
          />
          <Submit>
            <DefaultButton title="Login" onClick={handleSubmit} />
          </Submit>
        </>
      )}
    />
  );
};

const FormInput = styled(Input)`
  margin: 0 auto;
`;

const Submit = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 16px;
`;

const Label = styled.label`
  ${({ theme: { typography } }) => typography.body.footnote};
  color: ${({ theme: { colors } }) => colors.grayDark};
  margin-top: 24px;
  margin-bottom: 4px;
  display: flex;
`;

const ControlPass = styled.div`
  flex-direction: row;
  margin-top: 1%;
  margin-bottom: 61px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Remember = styled(CheckBox)`
  text-align: left;
  display: inline-block;
  width: 67%;

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.mobile}) {
    width: 50%;
  }
`;

const ForgotPass = styled.a`
  ${({ theme: { typography } }) => typography.body.footnote};
  cursor: pointer;
`;
