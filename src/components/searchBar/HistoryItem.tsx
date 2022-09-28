import styled from 'styled-components';

interface IHistoryItem {
  keyword: string;
}

const HistoryItem = ({ keyword }: IHistoryItem) => {
  return <HistoryItemWrapper>{keyword}</HistoryItemWrapper>;
};

const HistoryItemWrapper = styled.span`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.radius[0]};
  padding: ${({ theme }) => `${theme.space.smaller} ${theme.space.small}`};
  & + & {
    margin-left: ${({ theme }) => theme.space.smaller};
  }
`;

export default HistoryItem;
