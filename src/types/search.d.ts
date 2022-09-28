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

export type { SearchResultType, SearchRequestType };
