import { Keywords } from '../types/commonTypes';

export interface Storage {
  save(kewords: Array<Keywords>): void;
  get(): Array<Keywords>;
  remove(): void;
}

export class LocalStorage implements Storage {
  KEY = 'KEYWORDS';

  save: (kewords: Array<Keywords>) => void = kewords => {
    localStorage.setItem(this.KEY, JSON.stringify(kewords));
  };

  get: () => Array<Keywords> = () => {
    const getKeywords = localStorage.getItem(this.KEY);
    return JSON.parse(getKeywords as string);
  };

  remove: () => void = () => {
    localStorage.removeItem(this.KEY);
  };
}
