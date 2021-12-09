import { FC, useContext, useState } from 'react';
import { Field, Form } from 'react-final-form';
import styled, { ThemeContext } from 'styled-components';

import { IconClose, IconSearch, IconSettings } from '../icons';

interface InputSearchProps {
  isActive: boolean;
  setActive: () => void;
}

export const InputSearch: FC<InputSearchProps> = ({ isActive, setActive }) => {
  const theme = useContext(ThemeContext);
  const [value] = useState('');
  function onSubmit(value: string) {
    console.log('for test: ', value);
  }
  return (
    <Form
      onSubmit={onSubmit}
      initialValue={value}
      render={(handleSubmit) => (
        <Field
          name="value"
          render={({ input: { value, onChange } }) => (
            <SearchContainer>
              <InputContainer value={value} onChange={onChange} placeholder="Search" />
              <Icons>
                <button onClick={() => onChange('')}>
                  <IconClose width={24} height={24} color={theme.colors.grayDark} />
                </button>
                <button onClick={() => setActive()}>
                  {isActive ? (
                    <IconSettings width={24} height={24} color={theme.colors.black} />
                  ) : (
                    <IconSettings width={24} height={24} color={theme.colors.grayDark} />
                  )}
                </button>
                <button type="submit" onClick={() => handleSubmit}>
                  <IconSearch width={24} height={24} color={theme.colors.grayDark} />
                </button>
              </Icons>
            </SearchContainer>
          )}
        />
      )}
    />
  );
};

const SearchContainer = styled.div`
  display: flex;
  position: relative;
  margin-right: 30%;
  flex-grow: 3;

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.tablet}) {
    margin-right: 0;
  }

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.mobile}) {
    width: 100%;
  }
`;

const InputContainer = styled.input`
  background-color: ${({ theme: { colors } }) => colors.grayBgInput};
  padding: 10px 24px;
  border-radius: 6px;
  width: 100%;
  border: none;
`;

const Icons = styled.div`
  position: absolute;
  display: flex;
  margin-top: 0.5%;
  justify-content: space-around;
  align-self: center;
  width: 12%;
  left: 87%;

  & button {
    border: none;
    background-color: transparent;
    padding: 0;
    cursor: pointer;
  }
`;
