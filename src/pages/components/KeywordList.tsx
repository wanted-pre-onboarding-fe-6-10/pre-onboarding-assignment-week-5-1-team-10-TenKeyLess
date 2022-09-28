import useKeydown from '../../hooks/useKeydown';
import useKeyword from '../../hooks/useKeyword';
import styled from 'styled-components';

const KeywordList = () => {
  const { list } = useKeyword();
  const { autoRef, index } = useKeydown();

  console.log(autoRef);

  return (
    <Wrapper ref={autoRef}>
      {list.map((el, idx) => {
        return (
          <Keyword isFocus={index === idx ? true : false} key={el.sickCd}>
            {el.sickNm}
          </Keyword>
        );
      })}
    </Wrapper>
  );
};

export default KeywordList;

const Wrapper = styled.ul`
  width: 90%;
  padding: 0;
  background-color: #fff;
  overflow: scroll;
  border-radius: 5px;
`;
const Keyword = styled.li<{ isFocus?: boolean }>`
  list-style: none;
  padding: 1rem;
  margin: 0 0.5rem;
  background-color: ${props => (props.isFocus ? 'black' : '#fff')};
  &:hover {
    background-color: black;
  }
`;
