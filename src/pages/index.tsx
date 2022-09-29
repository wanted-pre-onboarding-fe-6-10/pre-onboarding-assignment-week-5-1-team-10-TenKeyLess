import { FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import { debounce } from 'lodash';
import styled from 'styled-components';

interface SearchData {
  sickCd: string;
  sickNm: string;
}
interface localStorageData {
  data: SearchData[];
}

const Home = () => {
  const autoRef = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState(-1);
  const [query, setQuery] = useState('');
  const [wordList, setWordList] = useState<SearchData[]>([]);
  const [loading, setLoading] = useState(true);
  const getRecommendedWord = useMemo(
    () =>
      debounce(keyword => {
        setQuery(keyword);
        if (keyword === '') return;
        const localData = window.localStorage.getItem('searchData');
        const localStorageData = JSON.parse(localData!);
        if (localStorageData.key === keyword) {
          setWordList(localStorageData.data);
          return;
        }
        setLoading(true);
        console.info('calling api');
        fetch(`${process.env.REACT_APP_BASE_URL}/sick?q=${keyword}`)
          .then(res => res.json())
          .then(data => {
            if (data.length === 0) {
              setLoading(false);
              return setWordList([{ sickCd: '검색어 없음', sickNm: '검색어 없음' }]);
            }
            window.localStorage.setItem('searchData', JSON.stringify({ key: keyword, data }));
            setWordList(data);
            setLoading(false);
          });
      }, 200),
    [query]
  );
  const enterKeyBoard = (e: React.ChangeEvent<HTMLInputElement>) => {
    getRecommendedWord(e.target.value);
  };
  // keydown 이벤트를 통해 검색어 선택 할 수 있게 구현
  const handleArrowKey = (e: React.KeyboardEvent) => {
    if (wordList.length > 0) {
      switch (e.key) {
        case 'ArrowDown':
          setIndex(prev => prev + 1);
          if (autoRef.current?.childElementCount === index + 1) setIndex(0);
          break;
        case 'ArrowUp': //키보드 위에 키
          setIndex(prev => prev - 1);
          if (index <= 0) {
            setWordList([]);
            setQuery('');
            setIndex(-1);
          }
          break;
        case 'Escape': // esc key를 눌렀을때,
          setWordList([]);
          setQuery('');
          setIndex(-1);
          break;
        case 'Enter':
          // getRecommendedWord(query);
          window.open(
            `https://clinicaltrialskorea.com/studies?conditions=${wordList[index].sickNm}`
          );
      }
    }
  };

  const hightlightedText = (text: string, target: string) => {
    if (target !== '' && text.includes(target)) {
      const parts = text.split(new RegExp(`(${target})`, 'gi'));
      return (
        <>
          {parts.map((part: string, idx: number) =>
            part === target ? <HighlightSearchItem key={idx}>{part}</HighlightSearchItem> : part
          )}
        </>
      );
    }
  };
  const searchByKeyword = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.open(`https://clinicaltrialskorea.com/studies?conditions=${query}`);
  };

  useEffect(() => {
    if (!query) {
      setWordList([]);
    }
  }, [query]);

  return (
    <Container>
      <ContentBox>
        <Content>국내 모든 임상시험 검색하고 </Content>
        <Content>온라인으로 참여하기</Content>
        <SearchBox onSubmit={searchByKeyword}>
          <SVG
            className="h-3.5 w-3.5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </SVG>
          <SearchInput type="text" onChange={enterKeyBoard} onKeyDown={handleArrowKey} />
          <SearchBtn>검색</SearchBtn>
        </SearchBox>
      </ContentBox>
      {loading ? (
        <>Loading</>
      ) : wordList.length > 0 ? (
        <ListBox>
          <SearchList ref={autoRef}>
            {wordList.map((word: SearchData, idx: number) => (
              <SearchListItem
                isFocus={index === idx ? true : false}
                key={word.sickCd}
                onClick={() =>
                  window.open(`https://clinicaltrialskorea.com/studies?conditions=${word.sickNm}`)
                }
              >
                {hightlightedText(word.sickNm, query)}
              </SearchListItem>
            ))}
          </SearchList>
        </ListBox>
      ) : null}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  /* padding-top: 5rem; */
  background-color: #95e1ff;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  transition: all 0.5s ease-in-out;
  transform: translateY(0);
`;
const Content = styled.div`
  color: white;
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;
const SearchBox = styled.form`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
`;
const SVG = styled.svg`
  position: absolute;
  left: 27%;
  top: 50%;
`;
const SearchInput = styled.input`
  border: 0;
  padding: 2rem 4rem;
  background-color: ${props => props.theme.bgColor};
  border-radius: 5rem;
  width: 50%;
  height: 5rem;
  color: black;
  font-size: 1rem;
  font-weight: bold;
  outline: none;
  margin-bottom: 1rem;
  margin-top: 2rem;
`;
const SearchBtn = styled.button`
  position: absolute;
  top: 32%;
  right: 26%;
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  background-color: ${props => props.theme.ownColor};
  border: 0;
  cursor: pointer;
  color: white;
  font-weight: bold;
  font-size: 1rem;
`;
const ListBox = styled.div`
  z-index: 3;
  height: 50vh;
  width: 50%;
  height: auto;
  background-color: #fff;
  top: 45px;
  border: 2px solid;
  padding: 15px;
  border-radius: 1rem;
  margin-bottom: 10rem;
`;
const SearchList = styled.ul``;
const SearchListItem = styled.li<{ isFocus?: boolean }>`
  padding: 10px 8px;
  width: 100%;
  font-size: 14px;
  /* font-weight: bold; */
  z-index: 4;
  letter-spacing: 2px;
  border-radius: 1rem;
  &:hover {
    background-color: ${props => props.theme.ownColor};
    cursor: pointer;
  }
  position: relative;
  /* img {
    position: absolute;
    right: 5px;
    width: 18px;
    top: 50%;
    transform: translateY(-50%);
  } */
  background-color: ${props => (props.isFocus ? props.theme.ownColor : props.theme.bgColor)};
`;

const HighlightSearchItem = styled.span`
  font-weight: bold;
`;

export default Home;
