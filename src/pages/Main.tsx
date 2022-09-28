import styled from 'styled-components';
import Header from '../components/header/Header';
import SearchBar from '../components/searchBar/SearchBar';

const Main = () => {
  return (
    <Container>
      <Header />
      <SearchBar />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: ${(props) => props.theme.space.sm};
  background-color: ${(props) => props.theme.colors.background};
`;

export default Main;
