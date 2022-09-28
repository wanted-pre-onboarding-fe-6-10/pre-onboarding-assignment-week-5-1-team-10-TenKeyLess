import { useState } from 'react';
import { FaEllipsisH } from 'react-icons/fa';
import styled from 'styled-components';
import { useInputContext } from '../../contexts/InputContext';
import useSickSearch from '../../hooks/useSickSearch';
import { localeKR } from '../../locales';
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
    <SickListWrapper>
      {searchList ? (
        <ListBox>
          <ListHeader>{localeKR.sickList.recommendListHeader}</ListHeader>
          {searchList.length > 0 ? (
            searchList.map((item: SickType, idx: number) => (
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
            ))
          ) : (
            <NoResultsText>{localeKR.sickList.emptyResultPlaceholder}</NoResultsText>
          )}
        </ListBox>
      ) : null}
    </SickListWrapper>
  );
};

const SickListWrapper = styled.div`
  border-radius: 2rem;
`;

const ListBox = styled.div`
  max-height: 300px;
  overflow: scroll;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: ${(props) => props.theme.space.medium};
  padding-bottom: ${(props) => props.theme.space.medium};
  background-color: ${(props) => props.theme.colors.subBackground};
  box-shadow: 0px 0px 1px rgba(50, 50, 50, 0.05), 0px 2px 4px rgba(50, 50, 50, 0.1);
  border-radius: ${(props) => props.theme.radius[0]};
  z-index: 1;
`;

const ListHeader = styled.div`
  color: ${(props) => props.theme.colors.textDisabled};
  padding-bottom: ${(props) => props.theme.space.smaller};
  font-size: ${(props) => props.theme.fontSizes.small};
  padding-left: ${(props) => props.theme.space.medium};
`;

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

const NoResultsText = styled.div`
  padding-top: ${(props) => props.theme.space.small};
  color: ${(props) => props.theme.colors.textSub};
  width: 100%;
  text-align: center;
`;

export default SickList;
