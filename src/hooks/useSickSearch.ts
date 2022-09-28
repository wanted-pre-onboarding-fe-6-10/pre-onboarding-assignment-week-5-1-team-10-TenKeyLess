import { useEffect, useState } from 'react';
import { getRecommendations } from '../api/sickAPI';
import { useInputContext } from '../contexts/InputContext';
import { DEFAULT_PAGE } from '../utils/constants';

interface IUseSickSearch {
  query: string;
  page: number;
}

const useSickSearch = ({ query, page = DEFAULT_PAGE }: IUseSickSearch) => {
  const { isLoading, setIsLoading } = useInputContext();

  const [error, setError] = useState(false);
  const [searchList, setSearchList] = useState<Array<string>>([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setSearchList([]);
  }, [query]);

  useEffect(() => {
    if (query.length > 0) {
      setIsLoading(true);
      setError(false);
      getRecommendations({ q: query, page: page })
        .then((res: any) => {
          setSearchList((prev: Array<string>) => [...prev, ...res]);
          setHasMore(searchList.length < res.data.total);
        })
        .catch((err) => setError(true))
        .finally(() => setIsLoading(false));
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
