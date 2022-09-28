import KeywordList from './components/KeywordList';
import SearchInput from './components/SearchInput';
import styled from 'styled-components';
import SearchHeader from './components/SearchHeader';

const Search = () => {
  return (
    <Container>
      <SearchHeader />
      <SearchInput />
      <KeywordList />
    </Container>
  );
};

export default Search;

const Container = styled.div`
  display: flex;
  width: 600px;
  height: 600px;
  flex-direction: column;
  align-items: center;
  background-color: #c5cae9;
  margin: auto;
`;
