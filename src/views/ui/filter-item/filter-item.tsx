import { FC } from 'react';
import styled from 'styled-components';

interface FilterProp {
  text: string;
}

export const FilterItem: FC<FilterProp> = ({ text }) => {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
};

const Container = styled.div`
  border: 1px solid ${({ theme: { colors } }) => colors.blueSecond};
  background-color: ${({ theme: { colors } }) => colors.white};
  border-radius: 6px;
  margin-right: 7px;
  padding: 6px;
`;

const Text = styled.p`
  ${({ theme: { typography } }) => typography.body.footnote};
  margin: 0;
`;
