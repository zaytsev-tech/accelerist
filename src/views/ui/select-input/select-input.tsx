import { FC, useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { IconArrowDown } from '../icons';

interface SelectInputProps {
  name: string;
  items: Array<string>;
}

export const SelectInput: FC<SelectInputProps> = ({ name, items }) => {
  const theme = useContext(ThemeContext);
  const [isActive, setActive] = useState(false);
  return (
    <Container>
      <Select>
        <Title>{items[0]}</Title>
      </Select>
      <Svg onClick={() => setActive(!isActive)}>
        <IconArrowDown width={15} height={10} color={theme.colors.black} />
      </Svg>
      {isActive ? (
        <Options>
          {items.map((item) => (
            <Option value={item} key={item}>
              {item}
            </Option>
          ))}
        </Options>
      ) : (
        <></>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  float: left;
  min-width: 300px;
  width: 300px;
  min-height: 40px;
  font-weight: 300;
  background-color: ${({ theme: { colors } }) => colors.white};
  border: 1px solid ${({ theme: { colors } }) => colors.grayBorder};
  border-radius: 8px;
  transition: all 375ms ease-in-out;
`;
const Title = styled.div`
  ${({ theme: { typography } }) => typography.body.body};
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 10%;
`;
const Options = styled.div`
  position: absolute;
  margin-left: -1px;
  margin-top: 13%;
`;
const Select = styled.div``;
const Option = styled.button`
  position: relative;
  display: flex;
  float: left;
  min-width: 300px;
  width: 302px;
  min-height: 40px;
  font-weight: 300;
  margin-top: -1%;
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.white};
  border: none;
  border-right: 1px solid ${({ theme: { colors } }) => colors.grayBorder};
  border-left: 1px solid ${({ theme: { colors } }) => colors.grayBorder};

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.blueSecond};
  }

  &:last-child {
    border-radius: 0 0 8px 8px;
    border-bottom: 1px solid ${({ theme: { colors } }) => colors.grayBorder};
  }
`;
const Svg = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  align-self: center;
  position: absolute;
  right: 4%;
  height: 22px;
`;
