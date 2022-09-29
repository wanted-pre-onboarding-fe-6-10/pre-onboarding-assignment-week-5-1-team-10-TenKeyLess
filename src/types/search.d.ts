import { SickType } from './sick';

type SearchResultType = {
  q: string;
  result: Array<string>;
  qty: number;
  total: number;
  page: number;
  limit: number;
};

type SearchRequestType = {
  q: string;
  page?: number;
  limit?: number;
};

type SearchCacheType = {
  q: Array<SickType>;
};

export type { SearchResultType, SearchRequestType, SearchCacheType };
