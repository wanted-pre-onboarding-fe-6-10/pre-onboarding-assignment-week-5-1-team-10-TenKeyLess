import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';
import { useInputContext } from '../../contexts/InputContext';
import Highlighter from '../../hoc/Highlighter';

interface ISickItem {
  sickName: string;
}

const SickItem = ({ sickName }: ISickItem) => {
  const { query } = useInputContext();
  return (
    <ItemWrapper>
      <SearchIcon />
      <Highlighter text={sickName} highlight={query} />
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 9px 5px;
  border-radius: 3px;
  align-items: center;
  padding-left: ${(props) => props.theme.space.medium};

  &:hover {
    background-color: ${(props) => props.theme.colors.hoveredBackground};
  }

  &:active {
    background-color: ${(props) => props.theme.colors.error};
  }
`;

const SearchIcon = styled(FaSearch)`
  min-width: fit-content;
  color: ${(props) => props.theme.colors.textDisabled};
  margin-right: ${(props) => props.theme.space.small};
`;

export default SickItem;
