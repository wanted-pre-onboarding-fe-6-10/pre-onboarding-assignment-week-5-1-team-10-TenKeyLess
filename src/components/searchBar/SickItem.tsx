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
      <Highlighter text={sickName} highlight={query} />
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 9px 5px;
  border-radius: 3px;
  justify-content: space-between;

  &:hover {
    background-color: ${(props) => props.theme.colors.background};
  }

  &:active {
    background-color: ${(props) => props.theme.colors.error};
  }
`;

export default SickItem;
