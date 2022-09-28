import styled from 'styled-components';
import { useInputContext } from '../../contexts/InputContext';
import { localeKR } from '../../locales';
import HistoryItem from './HistoryItem';
import SickItem from './SickItem';

const HistoryList = () => {
  const { searchHistory } = useInputContext();

  return (
    <HistoryListWrapper>
      <ListBox>
        <ListHeader>{localeKR.sickList.recentKeywordHeader}</ListHeader>
        <ItemBox>
          {searchHistory.map((keyword: string, idx: number) => (
            <HistoryItem key={idx} keyword={keyword} />
          ))}
        </ItemBox>
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
  padding-bottom: ${(props) => props.theme.space.medium};
  font-size: ${(props) => props.theme.fontSizes.small};
  padding-left: ${(props) => props.theme.space.medium};
`;

const ItemBox = styled.div`
  padding-left: ${(props) => props.theme.space.medium};
`;

export default HistoryList;
