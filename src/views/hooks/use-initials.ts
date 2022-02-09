export const useInitials = (name: string) => {
  const initials = name.split(' ');
  return initials
    .filter(Boolean)
    .map((x: string) => x[0])
    .join('');
};
