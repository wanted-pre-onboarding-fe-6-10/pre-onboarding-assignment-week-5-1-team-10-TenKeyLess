import { useState } from 'react';
import { FaEllipsisH } from 'react-icons/fa';
import styled from 'styled-components';
import { useInputContext } from '../../contexts/InputContext';
import useSickSearch from '../../hooks/useSickSearch';
import { SickType } from '../../types/sick';

import { DEFAULT_PAGE } from '../../utils/constants';
import Spinner from '../common/Spinner';
import SickItem from './SickItem';

const SickList = () => {
  const { query } = useInputContext();

  const [page, setPage] = useState(DEFAULT_PAGE);
  const { searchList, isLoading, hasMore, error } = useSickSearch({ query, page: page });

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <ListWrapper>
      {searchList ? (
        <ListWrapper>
          {searchList.map((item: SickType, idx: number) => (
            <ItemContainer key={idx}>
              <SickItem sickName={item.sickNm} />
              {searchList.length === idx + 1 ? (
                !isLoading ? (
                  // <MoreItemsIndicator ref={lastItemElementRef} onClick={handleLoadMore}>
                  <MoreItemsIndicator onClick={handleLoadMore}>
                    <MoreItemsIndicatorIcon />
                  </MoreItemsIndicator>
                ) : (
                  <MoreItemsIndicator>
                    <Spinner />
                  </MoreItemsIndicator>
                )
              ) : null}
            </ItemContainer>
          ))}
        </ListWrapper>
      ) : null}
    </ListWrapper>
  );
};

const ListWrapper = styled.div``;

const ItemContainer = styled.div`
  width: 100%;
  padding: 1px 5px;
`;

const MoreItemsIndicator = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 9px 5px;
  cursor: pointer;
  border-radius: 3px;

  &:hover {
    background-color: ${(props) => props.theme.colors.background};
  }

  &:active {
    background-color: ${(props) => props.theme.colors.error};
  }
`;

const MoreItemsIndicatorIcon = styled(FaEllipsisH)``;

export default SickList;
