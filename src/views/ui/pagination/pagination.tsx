import { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { IconArrowLeft, IconArrowRight } from '../icons';

interface PaginationProps {
  next: (page: number, limit: number) => void;
  prev: (page: number, limit: number) => void;
  page: number;
  limit: number;
  scorePages: number;
}

export const Pagination: FC<PaginationProps> = ({
  next,
  prev,
  page,
  limit,
  scorePages,
}) => {
  const theme = useContext(ThemeContext);
  return (
    <Container>
      <Prev onClick={() => prev(page, limit)}>
        <IconArrowLeft width={10} height={18} color={theme.colors.black} />
      </Prev>
      <Count>
        {page}-{limit} of {scorePages}
      </Count>
      <Next onClick={() => next(page, limit)}>
        <IconArrowRight width={10} height={18} color={theme.colors.black} />
      </Next>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 7%;
  justify-content: space-between;

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.tablet}) {
    width: 10%;
  }

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.mobile}) {
    width: 15%;
  }

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.mobile}) {
    display: none;
  }

  & > button {
    cursor: pointer;
  }
`;

const Count = styled.p`
  ${({ theme: { typography } }) => typography.body.footnote};
  white-space: pre;
`;

const Prev = styled.button`
  text-decoration: none;
  border: none;
  background-color: transparent;
`;

const Next = styled.button`
  text-decoration: none;
  border: none;
  background-color: transparent;
`;
