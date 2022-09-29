import { useEffect, useState } from 'react';
import { getRecommendations } from '../api/sickAPI';
import { useInputContext } from '../contexts/InputContext';
import { useRecommendContext } from '../contexts/RecommendContext';
import { SickType } from '../types/sick';
import { DEFAULT_PAGE } from '../utils/constants';

interface IUseSickSearch {
  query: string;
  page: number;
}

// const cache: Map<string, Array<SickType>> = new Map();

const useSickSearch = ({ query, page = DEFAULT_PAGE }: IUseSickSearch) => {
  const { isLoading, setIsLoading } = useInputContext();
  const { recommendations, setRecommendations, cache } = useRecommendContext();

  const [error, setError] = useState(false);
  // const [searchList, setSearchList] = useState<Array<SickType>>([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setRecommendations([]);
  }, [query]);

  useEffect(() => {
    if (query.length > 0) {
      setIsLoading(true);
      setError(false);

      /* Caching */
      if (cache.has(query)) {
        const data = cache.get(query);
        setRecommendations(data!);
        setIsLoading(false);
      } else {
        getRecommendations({ q: query, page: page })
          .then((res: any) => {
            setRecommendations((prev: Array<SickType>) => {
              const newList = [...prev, ...res];
              cache.set(query, newList);
              return newList;
            });
            setHasMore(recommendations.length < res.data.total);
          })
          .catch((err) => setError(true))
          .finally(() => setIsLoading(false));
      }
    }
  }, [query, page]);

  return {
    query,
    isLoading,
    error,
    hasMore,
  };
};

export default useSickSearch;
