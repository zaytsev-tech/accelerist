import { FC, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

import { useNextPagination, usePageSearchParams, usePrevPagination } from '../../hooks';
import { IconArrowLeft, IconArrowRight } from '../icons';

interface PaginationProps {
  initPage: number;
  initLimit: number;
  totalPages: number;
  totalItems: number;
}

export const Pagination: FC<PaginationProps> = ({
  initPage,
  initLimit,
  totalPages,
  totalItems,
}) => {
  const [, originalRouteSearch] = usePageSearchParams();
  const [, setSearch] = originalRouteSearch;
  const theme = useContext(ThemeContext);
  const next = useNextPagination({ initPage, initLimit, totalPages, totalItems });
  const prev = usePrevPagination({ initPage, initLimit, totalItems });
  return (
    <Container>
      <Prev onClick={() => setSearch(prev)}>
        <IconArrowLeft width={10} height={18} color={theme.colors.black} />
      </Prev>
      <Count>
        {initPage}-{initLimit} of {totalPages}
      </Count>
      <Next onClick={() => setSearch(next)}>
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
