import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { inputChange } from '../store/inputSlice';
import { AppDispatch, ReducerType } from '../store/store';

const useInput = () => {
  const { input } = useSelector((state: ReducerType) => state.input);
  const dispatch = useDispatch<AppDispatch>();

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    dispatch(inputChange(value));
    if (input.length === 0) return;
  };

  return { handleInputChange, input };
};

export default useInput;
