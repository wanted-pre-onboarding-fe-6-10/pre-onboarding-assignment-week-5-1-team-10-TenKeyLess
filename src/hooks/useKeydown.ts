import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setKeydown } from '../store/keydownSlice';
import { AppDispatch, ReducerType } from '../store/store';

const useKeydown = () => {
  //   const [index, setIndex] = useState<number>(-1);
  const autoRef = useRef<HTMLUListElement>(null);
  const { list } = useSelector((state: ReducerType) => state.list);
  const { index } = useSelector((state: ReducerType) => state.key);
  const dispatch = useDispatch<AppDispatch>();

  const handleKeyArrow = (e: React.KeyboardEvent) => {
    if (list.length > 0) {
      switch (e.key) {
        case 'ArrowDown':
          dispatch(setKeydown(index + 1));
          list.length === index + 1 && dispatch(setKeydown(0));
          break;
        case 'ArrowUp':
          dispatch(setKeydown(index - 1));
          index <= 0 && dispatch(setKeydown(-1));
          break;
        case 'Escape':
          dispatch(setKeydown(-1));
          break;

        default:
          break;
      }
    }
  };

  return { autoRef, index, handleKeyArrow };
};

export default useKeydown;
