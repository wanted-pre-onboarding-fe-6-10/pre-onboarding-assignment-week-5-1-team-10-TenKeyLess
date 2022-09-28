import axios from 'axios';
import { Storage } from '../utils/Storage';

export const BASE_URL = process.env.REACT_APP_BASE_URL;

type Methods = 'post' | 'get' | 'delete';

export interface HttpClient {
  fetch(method: Methods, url?: string): Promise<any>;
}

class Http implements HttpClient {
  baseURL: typeof BASE_URL;

  constructor(baseURL: typeof BASE_URL, storage: Storage) {
    this.baseURL = baseURL;
  }

  fetch: (method: Methods, url?: string) => Promise<any> = (method, q) => {
    const instance = axios.create({
      baseURL: this.baseURL,
    });

    return instance({
      method,
      params: { q: q },
    });
  };
}

export default Http;
