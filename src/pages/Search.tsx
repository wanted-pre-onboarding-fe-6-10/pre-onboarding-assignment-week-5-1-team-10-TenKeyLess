import { useEffect } from 'react';
import Http, { BASE_URL } from '../services/Http';
import GetKeywordService from '../services/KeywordService';
import { LocalStorage } from '../utils/Storage';
import Input from './components/Input';
import Recommend from './components/Recommend';

const Search = () => {
  const keywordsStorage = new LocalStorage();
  const http = new Http(BASE_URL, keywordsStorage);
  const getService = new GetKeywordService(http, keywordsStorage);

  useEffect(() => {
    getService.getKeyword();
  }, []);

  return (
    <>
      <Input />
      <Recommend />
    </>
  );
};

export default Search;
