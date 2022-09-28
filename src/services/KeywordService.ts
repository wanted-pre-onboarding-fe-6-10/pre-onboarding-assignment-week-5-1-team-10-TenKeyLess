import { debounce } from 'lodash';
import { Storage } from '../utils/Storage';
import { HttpClient } from './Http';

interface KeywordServeice {
  getKeyword: (q: string) => Promise<any>;
}

class GetKeywordService implements KeywordServeice {
  httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getKeyword: (q: string) => Promise<any> = async q => {
    const { data } = await this.httpClient.fetch('get', q);
    console.info('calling api');
    return data;
  };
}

export default GetKeywordService;
