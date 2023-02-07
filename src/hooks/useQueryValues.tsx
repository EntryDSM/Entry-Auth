import { useLocation } from 'react-router';

export const useQueryValues = () => {
  return new URLSearchParams(useLocation().search);
};
