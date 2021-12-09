interface UsePaginationProps {
  initPage: number;
  initLimit: number;
  totalPages: number;
}

export function useNextPagination({
  initPage,
  initLimit,
  totalPages,
}: UsePaginationProps) {
  const page = initPage;
  const limit = initLimit;
  return {
    page: new Number(Math.min(page + 15, totalPages - 15)).toString(),
    limit: new Number(Math.min(limit + 15, totalPages)).toString(),
  };
}
