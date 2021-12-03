import { FC } from 'react';
import { Field, Form } from 'react-final-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { routes } from '../../../routes';
import { DefaultButton } from '../../../ui/buttons/default-button';
import { CheckBox } from '../../../ui/checkbox';
import { Input } from '../../../ui/input';

const initialValue = {
  email: '',
  pass: '',
};

export const Authorization: FC = () => {
  const navigate = useNavigate();
  return (
    <Form
      onSubmit={() => navigate(routes.dashboard.root)}
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
            name="pass"
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
          <Submit onClick={handleSubmit}>
            <DefaultButton title="Login" />
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
