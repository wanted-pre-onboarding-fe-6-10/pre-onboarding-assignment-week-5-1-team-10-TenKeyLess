import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addKeywords } from '../../store/searchSlice';
import { AiOutlineSearch } from 'react-icons/ai';
const BaseUrl = process.env.REACT_APP_BASE_URL;

const Home = () => {
  const [keywordList, setKeywordList] = useState([]);
  let searchText = '';

  const { keywords } = useSelector(state => state);
  //   console.log(keywords);

  const dispatch = useDispatch();

  let isDoenFlag = useRef();

  const inputChange = e => {
    clearTimeout(isDoenFlag.current);

    searchText = e.target.value;

    if (searchText === '') {
      return;
    }

    isDoenFlag.current = setTimeout(() => {
      if (keywords[searchText]) {
        // [난관1] 어떻게 map돌리는 코드로 1)useSelect (keywords[keyword]) 값을 이어줄지?
        setKeywordList(keywords[searchText]);
      } else {
        // api 호출 후 보여주기 // [난관2] 어떻게 api 호출 후, 1)그 결과를 useSelect로 받아서 2)map돌리는 코드로 이어줄지?
        axios(`${BaseUrl}/sick?q=${searchText}`).then(res => {
          console.log('apiCount', apiCount);
          apiCount += 1;
          dispatch(addKeywords({ searchText: searchText, result: res.data }));
          setKeywordList(res.data);
        });
      }
      // console.log('woooow');
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
              className=" border-none w-4/5 text-xl"
              placeholder="질환명을 입력해주세요"
              onInput={e => inputChange(e)}
            />
            <button type="button" className="btn-clear">
              x
            </button>
            <button type="button" className="btn-primary">
              검색
            </button>
          </div>
        </div>

        {/* 3. 검색결과창 */}
        <div className="absolute top-[310px] w-2/6 h-max overflow-scroll scrollbar-hide rounded-3xl py-5 bg-gray-300">
          <ul className="w-full max-h-96">
            {keywordList.length > 0 &&
              keywordList.map(el => {
                let text = el.sickNm;

                text = text.length > 27 ? `${text.slice(0, 27)}...` : text;
                return (
                  <li key={el.sickCd} className="searchList flex items-center">
                    <AiOutlineSearch className="mr-3" />
                    {text}
                  </li>
                );
              })}
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Home;

let apiCount = 1;
