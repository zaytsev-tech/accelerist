interface UsePaginationProps {
  initPage: number;
  initLimit: number;
  totalPages: number;
  totalItems: number;
}

export function useNextPagination({
  initPage,
  initLimit,
  totalPages,
  totalItems,
}: UsePaginationProps) {
  const page = initPage;
  const limit = initLimit;
  return totalPages > 15
    ? {
        page: new Number(Math.min(page + 15, totalPages - 15)).toString(),
        limit: new Number(Math.min(limit + 15, totalPages)).toString(),
      }
    : {
        page: new Number(Math.max(page, totalPages)).toString(),
        limit: new Number(Math.min(limit, totalItems)).toString(),
      };
}
