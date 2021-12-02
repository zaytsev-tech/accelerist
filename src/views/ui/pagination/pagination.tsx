import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { IconArrowLeft, IconArrowRight } from '../icons';

export const Pagination = () => {
  const theme = useContext(ThemeContext);
  return (
    <Container>
      <IconArrowLeft width={10} height={18} color={theme.colors.black} />
      <Count>1-15 of 32</Count>
      <IconArrowRight width={10} height={18} color={theme.colors.black} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 7%;
  justify-content: space-between;

  & > svg {
    cursor: pointer;
  }
`;

const Count = styled.p`
  ${({ theme: { typography } }) => typography.body.footnote};
`;
