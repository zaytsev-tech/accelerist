export function useSortMas(mas: Array<string>, word: string) {
  return mas.sort(function (a: string, b: string) {
    if (a.toLowerCase().indexOf(word.toLowerCase()) !== -1) {
      return -1;
    }
    if (b.toLowerCase().indexOf(word.toLowerCase()) !== -1) {
      return -1;
    }
    return 1;
  });
}
