import { URLSearchParamsInit, useSearchParams } from 'react-router-dom';

interface UsePaginationProps {
  page: number;
  limit: number;
  totalPages: number;
  setSearch: (
    nextInit: URLSearchParamsInit,
    navigateOptions?:
      | {
          replace?: boolean | undefined;
          state?: [Record<string, string>, ReturnType<typeof useSearchParams>];
        }
      | undefined,
  ) => void;
}

export function useNextPagination({
  page,
  limit,
  totalPages,
  setSearch,
}: UsePaginationProps) {
  if (limit + 15 <= totalPages) {
    limit += 15;
    page += 15;
  } else {
    limit = totalPages;
  }
  setSearch({ page: page.toString(), limit: limit.toString() });
}
