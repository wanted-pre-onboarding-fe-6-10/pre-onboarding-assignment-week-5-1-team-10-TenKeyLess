import useKeydown from '../../hooks/useKeydown';
import useKeyword from '../../hooks/useKeyword';
import styled from 'styled-components';
import useInput from '../../hooks/useInput';
import highlighter from '../../utils/highlighter';

const KeywordList = () => {
  const { input } = useInput();
  const { list } = useKeyword();
  const { autoRef, index } = useKeydown();

  return (
    <Wrapper ref={autoRef}>
      {list.length !== 0 ? <Title>추천검색어</Title> : <Title>검색어 없음</Title>}
      {list.map((el, idx) => {
        return (
          <Keyword isFocus={index === idx ? true : false} key={el.sickCd}>
            {highlighter(el.sickNm, input)}
          </Keyword>
        );
      })}
    </Wrapper>
  );
};

// highlightText.map((text, index) => {
//   if (text === input) {
//     return (
//       <span key={index} style={{ color: '#2196f3' }}>
//         {text}
//       </span>
//     );
//   } else {
//     return text;
//   }
// });

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
  background-color: ${props => (props.isFocus ? '#e3f2fd' : '#fff')};
  &:hover {
    background-color: #e3f2fd;
  }
`;

const Title = styled.div`
  margin: 0.8rem 1.5rem;
  font-size: 0.8rem;
  font-weight: bold;
  color: #2196f3;
`;
