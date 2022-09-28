import { Storage } from '../utils/Storage';
import { HttpClient } from './Http';

interface KeywordServeice {
  getKeyword: () => void;
}

class GetKeywordService implements KeywordServeice {
  httpClient: HttpClient;
  storage: Storage;

  constructor(httpClient: HttpClient, storage: Storage) {
    this.httpClient = httpClient;
    this.storage = storage;
  }

  getKeyword: () => void = async () => {
    const { data } = await this.httpClient.fetch('get');
    this.storage.save(data);
  };
}

export default GetKeywordService;
