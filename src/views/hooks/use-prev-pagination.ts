import { URLSearchParamsInit, useSearchParams } from 'react-router-dom';

interface UsePaginationProps {
  page: number;
  limit: number;
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

export function usePrevPagination({ page, limit, setSearch }: UsePaginationProps) {
  if (limit - 15 > 15) {
    limit -= 15;
    page -= 15;
  } else {
    limit = 15;
    page = 1;
  }
  setSearch({ page: page.toString(), limit: limit.toString() });
}
