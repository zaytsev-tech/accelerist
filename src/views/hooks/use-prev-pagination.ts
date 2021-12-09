interface UsePaginationProps {
  initPage: number;
  initLimit: number;
  totalItems: number;
}

export function usePrevPagination({
  initPage,
  initLimit,
  totalItems,
}: UsePaginationProps) {
  const page = initPage;
  const limit = initLimit;
  console.log(initLimit, totalItems);
  return initPage > 15
    ? {
        page: new Number(Math.max(page - 15, 1)).toString(),
        limit: new Number(Math.max(limit - 15, initLimit - 15)).toString(),
      }
    : {
        page: new Number(Math.max(page - 15, 1)).toString(),
        limit: new Number(Math.max(limit)).toString(),
      };
}
