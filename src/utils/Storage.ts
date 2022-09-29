import { Keywords } from '../types/commonTypes';

export interface Storage {
  save(key: string, kewords: Array<Keywords>): void;
  get(key: string): Array<Keywords>;
  remove(key: string): void;
}

export class LocalStorage implements Storage {
  save: (key: string, kewords: Array<Keywords>) => void = (key, kewords) => {
    localStorage.setItem(key, JSON.stringify(kewords));
  };

  get: (key: string) => Array<Keywords> = key => {
    const getKeywords = localStorage.getItem(key);
    return JSON.parse(getKeywords as string);
  };

  remove: (key: string) => void = key => {
    localStorage.removeItem(key);
  };
}
