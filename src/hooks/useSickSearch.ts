import { useEffect, useRef, useState } from 'react';
import { getRecommendations } from '../api/sickAPI';
import { useInputContext } from '../contexts/InputContext';
import { SearchCacheType } from '../types/search';
import { SickType } from '../types/sick';
import { DEFAULT_PAGE } from '../utils/constants';

interface IUseSickSearch {
  query: string;
  page: number;
}

const cache: Map<string, Array<SickType>> = new Map();

const useSickSearch = ({ query, page = DEFAULT_PAGE }: IUseSickSearch) => {
  const { isLoading, setIsLoading } = useInputContext();

  const [error, setError] = useState(false);
  const [searchList, setSearchList] = useState<Array<SickType>>([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setSearchList([]);
  }, [query]);

  useEffect(() => {
    if (query.length > 0) {
      setIsLoading(true);
      setError(false);

      /* Caching */
      if (cache.has(query)) {
        // FIXME
        const data = cache.get(query);
        setSearchList(data!);
        setIsLoading(false);
      } else {
        getRecommendations({ q: query, page: page })
          .then((res: any) => {
            setSearchList((prev: Array<SickType>) => {
              const newList = [...prev, ...res];
              cache.set(query, newList);
              return newList;
            });
            setHasMore(searchList.length < res.data.total);
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
    searchList,
    hasMore,
  };
};

export default useSickSearch;
