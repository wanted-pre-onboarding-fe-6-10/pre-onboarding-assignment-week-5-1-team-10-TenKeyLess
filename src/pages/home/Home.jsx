import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addKeywords } from '../../store/keywordsSlice';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsInbox } from 'react-icons/bs';

const BaseUrl = process.env.REACT_APP_BASE_URL; // [질문]

const Home = () => {
  const [keywordList, setKeywordList] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const dispatch = useDispatch();
  const { keywords } = useSelector(state => state);

  let decounceFlag = useRef();

  const keywordChange = e => {
    clearTimeout(decounceFlag.current);
    setKeywordList([]);

    let searchValue = e.target.value;
    setSearchValue(searchValue);

    if (searchValue === '') {
      return;
    }

    decounceFlag.current = setTimeout(() => {
      const searchList = keywords[searchValue];

      if (searchList) {
        const bordList = searchList.map(el => highlightedText(el.sickNm, searchValue));
        setKeywordList(bordList);
      } else {
        axios(`${BaseUrl}/sick?q=${searchValue}`).then(res => {
          console.log('api 호출 횟수 : ', apiCount);
          apiCount += 1;

          const responseList = res.data;
          dispatch(addKeywords({ searchWord: searchValue, result: responseList }));

          const bordList = responseList.map(el => highlightedText(el.sickNm, searchValue));
          setKeywordList(bordList);
        });
      }
    }, 3000);
  };

  return (
    <div>
      <header className="w-full h-[460px] flexCenter flex-col relative bg-mainbgColor mt-14">
        <div className="w-2/5   flex flex-col items-center">
          {/* 1. 제목 */}
          <h1 className="text-2xl mb-10 font-bold text-mainColor  text-center leading-loose">
            국내 모든 임상기험 검색하고 <br /> 온라인으로 참여하기
          </h1>
          {/* 2. 검색창 */}
          <div className="mb-14 px-5 py-2 bg-white w-5/6 h-16 rounded-3xl flexCenter justify-between ">
            <input
              type="text"
              value={searchValue}
              className=" border-none w-4/5 text-xl"
              placeholder="질환명을 입력해주세요"
              onInput={e => keywordChange(e)}
            />
            <button type="button" className="btn-clear" onClick={() => setSearchValue('')}>
              x
            </button>
            <button type="button" className="btn-primary">
              검색
            </button>
          </div>
        </div>
        {/* 3. 검색결과창 */}
        {searchValue && keywordList.length > 0 ? (
          <SearchBox keywordList={keywordList} />
        ) : (
          <NoSearchBox />
        )}
      </header>
    </div>
  );
};

export default Home;

let apiCount = 1;
const highlightedText = (text, searchWord) => {
  if (searchWord !== '' && text.includes(searchWord)) {
    const parts = text.split(new RegExp(`(${searchWord})`, 'gi'));

    return (
      <span>
        {parts.map((part, index) => (part === searchWord ? <mark key={index}>{part}</mark> : part))}
      </span>
    );
  }
};

const SearchBox = ({ keywordList }) => {
  let [highLighNum, setHighLighNum] = useState(0);

  const LinkEl = useRef();

  useEffect(() => {
    if (+LinkEl.current.id === +highLighNum) {
      LinkEl.current.classList.add('bg-gray-200');
      setTimeout(() => {
        LinkEl.current.focus();
      }, 100);
    }
  }, [highLighNum]);

  return (
    <div className="absolute top-[310px] w-2/6 h-max overflow-scroll scrollbar-hide rounded-3xl py-5 bg-gray-300">
      <ul
        className="w-full max-h-96"
        onKeyDown={e => {
          if (e.keyCode === 40) {
            setHighLighNum(prev => {
              if (prev === keywordList.length - 1) {
                return prev;
              }
              return (prev += 1);
            });
          }
          if (e.keyCode === 38) {
            setHighLighNum(prev => {
              if (prev === 0) {
                return prev;
              }
              return (prev -= 1);
            });
          }
        }}
      >
        <li className="pl-2">{keywordList.length}개의 검색 결과</li>
        {keywordList.map((spanEl, idx) => {
          return (
            <li key={idx}>
              {idx === highLighNum && (
                <a href="/" ref={LinkEl} id={idx} className="searchList flex items-center">
                  <AiOutlineSearch className="mr-3" />
                  {spanEl}
                </a>
              )}
              {idx !== highLighNum && (
                <a href="/" id={idx} className="searchList flex items-center">
                  <AiOutlineSearch className="mr-3" />
                  {spanEl}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const NoSearchBox = () => {
  return (
    <div className="absolute top-[310px] w-2/6 h-max flexCenter rounded-3xl py-5 bg-gray-300">
      <BsInbox className="mr-5" /> 검색 결과가 없습니다
    </div>
  );
};
