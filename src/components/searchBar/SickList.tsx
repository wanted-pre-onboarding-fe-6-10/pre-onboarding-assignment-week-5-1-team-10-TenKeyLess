import { useState } from 'react';
import styled from 'styled-components';
import { useInputContext } from '../../contexts/InputContext';
import useSickSearch from '../../hooks/useSickSearch';

import { DEFAULT_PAGE } from '../../utils/constants';

const SickList = () => {
  const { query } = useInputContext();

  const [page, setPage] = useState(DEFAULT_PAGE);
  const { searchList, isLoading, hasMore, error } = useSickSearch({ query, page: page });

  return <ListWrapper>kjsldfd</ListWrapper>;
};

const ListWrapper = styled.div``;

// const List
export default SickList;
