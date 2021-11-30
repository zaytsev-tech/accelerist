import { Field, Form } from 'react-final-form';
import styled from 'styled-components';

import { DefaultButton } from '../../../ui/buttons/default-button';
import { Input } from '../../../ui/input';

const initialValue = {
  email: '',
  pass: '',
};

export const Authorization = () => {
  return (
    <Form
      onSubmit={(value) => console.log(value)}
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
              </>
            )}
          />
          <Submit onClick={handleSubmit}>
            <DefaultButton title="Login" />
          </Submit>
          <AfterText>or continue with</AfterText>
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

const AfterText = styled.p`
  ${({ theme: { typography } }) => typography.body.footnote};
  color: ${({ theme: { colors } }) => colors.grayDark};
  margin-top: 40px;
`;
