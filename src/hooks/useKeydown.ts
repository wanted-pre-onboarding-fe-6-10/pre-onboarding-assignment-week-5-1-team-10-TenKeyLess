import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { ReducerType } from '../store/store';

const useKeydown = () => {
  const autoRef = useRef<HTMLUListElement>(null);
  const [index, setIndex] = useState<number>(-1);
  const { list } = useSelector((state: ReducerType) => state.list);

  const handleKeyArrow = (e: React.KeyboardEvent) => {
    if (list.length > 0) {
      switch (e.key) {
        case 'ArrowDown':
          setIndex(index + 1);
          autoRef.current?.childElementCount === index + 1 && setIndex(0);
          break;
        case 'ArrowUp':
          setIndex(index - 1);
          index <= 0 && setIndex(-1);
          break;
        case 'Escape':
          setIndex(-1);
          break;

        default:
          break;
      }
    }
  };

  return { autoRef, index, setIndex, handleKeyArrow };
};

export default useKeydown;
