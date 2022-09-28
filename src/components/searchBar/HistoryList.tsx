import styled from 'styled-components';
import { localeKR } from '../../locales';

const HistoryList = () => {
  return (
    <HistoryListWrapper>
      <ListBox>
        <ListHeader>{localeKR.sickList.recentKeywordHeader}</ListHeader>
        {/* {searchList.map((item: SickType, idx: number) => (
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
          ))} */}
      </ListBox>
    </HistoryListWrapper>
  );
};

const HistoryListWrapper = styled.div`
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

export default HistoryList;
