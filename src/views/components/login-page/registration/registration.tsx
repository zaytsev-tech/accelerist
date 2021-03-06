import { FC } from 'react';
import { Field, Form } from 'react-final-form';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { AuthData } from '../../../../store/ducks/user';
import { regRequest } from '../../../../store/ducks/user/actions';
import { DefaultButton } from '../../../ui/buttons/default-button';
import { Input } from '../../../ui/input';

const initialValue = {
  email: '',
  password: '',
};

export const Registration: FC = () => {
  const dispatch = useDispatch();

  const onSubmit = (values: AuthData) => {
    dispatch(regRequest(values));
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
              </>
            )}
          />
          <Policy>
            <p>
              I agree that by clicking <Bold>“Registration”</Bold> I accept the{' '}
              <Bold>Terms Of Service</Bold> and
              <Bold>Privacy Policy</Bold>
            </p>
          </Policy>
          <Submit onClick={handleSubmit}>
            <DefaultButton title="Registration" />
          </Submit>
        </>
      )}
    />
  );
};

const FormInput = styled(Input)`
  margin: 0 auto;
  margin-bottom: 24px;
`;

const Submit = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 16px;
`;

const Label = styled.label`
  ${({ theme: { typography } }) => typography.body.footnote};
  color: ${({ theme: { colors } }) => colors.grayDark};
  margin-bottom: 4px;
  display: flex;
`;

const Policy = styled.div`
  ${({ theme: { typography } }) => typography.body.footnote};
  color: ${({ theme: { colors } }) => colors.grayDark};
  text-align: center;
  margin-top: 15px;
`;

const Bold = styled.span`
  font-weight: 500;
  color: ${({ theme: { colors } }) => colors.black};
`;
