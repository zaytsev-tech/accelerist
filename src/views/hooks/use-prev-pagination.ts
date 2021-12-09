interface UsePaginationProps {
  initPage: number;
  initLimit: number;
}

export function usePrevPagination({ initPage, initLimit }: UsePaginationProps) {
  const page = initPage;
  const limit = initLimit;
  return {
    page: new Number(Math.max(page - 15, 1)).toString(),
    limit: new Number(Math.max(limit - 15, 15)).toString(),
  };
}
