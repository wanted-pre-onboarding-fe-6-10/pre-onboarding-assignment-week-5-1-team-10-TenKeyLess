import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [keyword, setKeyword] = useState('');

  const BaseUrl = process.env.REACT_APP_BASE_URL;

  const searchRequest = () => {
    return axios(`${BaseUrl}/sick?q=${keyword}`).then(res => console.log(res.data));
  };

  return (
    <div>
      <header className="w-full h-[460px] flexCenter flex-col relative bg-mainbgColor mt-14">
        <div className="w-2/5   flex flex-col items-center">
          {/* 1. 제목 */}
          <h1 className="text-2xl font-bold text-mainColor  text-center leading-loose">
            국내 모든 임상기험 검색하고 <br /> 온라인으로 참여하기
          </h1>
          {/* 2. 검색창 */}
          <div className="px-5 py-2 bg-white w-5/6 h-16 rounded-3xl flexCenter justify-between ">
            <input
              type="text"
              className=" border-none w-4/5 text-xl"
              placeholder="질환명을 입력해주세요"
              onChange={e => setKeyword(e.target.value)}
            />
            <button type="button" className="btn-clear">
              x
            </button>
            <button type="button" className="btn-primary" onClick={searchRequest}>
              검색
            </button>
          </div>
        </div>

        {/* 3. 검색결과창 */}
        <div className="absolute top-80 w-2/6 mt-3 h-max rounded-3xl py-5 bg-gray-300">
          <ul className="w-full">
            <li className="searchList">검색결과1</li>
            <li className="searchList">검색결과1</li>
            <li className="searchList">검색결과1</li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Home;
