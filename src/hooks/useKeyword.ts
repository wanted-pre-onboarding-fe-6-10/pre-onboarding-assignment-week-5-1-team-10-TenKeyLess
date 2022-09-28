import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Http, { BASE_URL } from '../services/Http';
import GetKeywordService from '../services/KeywordService';
import { AppDispatch, ReducerType } from '../store/store';
import { updateList } from '../store/updateSlice';
import { LocalStorage } from '../utils/Storage';

const useKeyword = () => {
  const keywordsStorage = new LocalStorage();
  const http = new Http(BASE_URL, keywordsStorage);
  const getService = new GetKeywordService(http);
  const { list } = useSelector((state: ReducerType) => state.list);
  const { input } = useSelector((state: ReducerType) => state.input);
  const dispatch = useDispatch<AppDispatch>();

  const updateKeywords = async () => {
    if (!keywordsStorage.get(input)) {
      const list = await getService.getKeyword(input);
      keywordsStorage.save(input, list);
      dispatch(updateList(keywordsStorage.get(input)));
    } else {
      dispatch(updateList(keywordsStorage.get(input)));
    }
  };

  useEffect(() => {
    const debounce = setTimeout(() => {
      if (input) updateKeywords();
    }, 500);
    return () => {
      clearTimeout(debounce);
    };
  }, [input]);

  return { list };
};

export default useKeyword;
