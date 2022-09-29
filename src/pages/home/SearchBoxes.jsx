/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { BsInbox } from 'react-icons/bs';

export const SearchBox = ({ keywordList }) => {
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

  const onSearchKeydown = e => {
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
  };

  return (
    <div className="searchBox overflow-scroll ">
      {/* [TODO] scrollbar-hide 스크롤바 아랫부분만 없애는 style처리 해야함*/}
      <ul className="w-full max-h-96" onKeyDown={e => onSearchKeydown(e)}>
        <li className="pl-2">{keywordList.length}개의 검색 결과</li>
        {keywordList.map((keywordText, idx) => {
          return (
            <li key={idx}>
              {idx === highLighNum && (
                <a href="#" ref={LinkEl} id={idx} className="searchList flex items-center">
                  <AiOutlineSearch className="mr-3" />
                  {keywordText}
                </a>
              )}
              {idx !== highLighNum && (
                <a href="#" id={idx} className="searchList flex items-center">
                  <AiOutlineSearch className="mr-3" />
                  {keywordText}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const NoSearchBox = () => {
  return (
    <div className="searchBox flexCenter">
      <BsInbox className="mr-5" /> 검색 결과가 없습니다
    </div>
  );
};
