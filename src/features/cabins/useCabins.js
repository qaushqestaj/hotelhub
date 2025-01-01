import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { getCabins } from '../../services/apiCabins';

export function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQueryErrorResetBoundary({
    queryKey: ['cabins'],
    queryFn: getCabins,
  });

  return { isLoading, error, cabins };
}
