import { useSearchParams } from 'react-router-dom';

type UseSearchParamsResult = [Record<string, string>, ReturnType<typeof useSearchParams>];

export function usePageSearchParams(): UseSearchParamsResult {
  const searchParams = useSearchParams();
  const [search] = searchParams;
  const searchObject = Object.fromEntries(new URLSearchParams(search));
  return [searchObject, searchParams];
}
