import httpRequest from '.';
import { SearchRequestType } from '../types/search';
import { DEFAULT_PAGE, PAGE_LIMIT } from '../utils/constants';

const END_POINT = '/sick';

export const getRecommendations = async ({
  q,
  page = DEFAULT_PAGE,
  limit = PAGE_LIMIT,
}: SearchRequestType) => {
  try {
    console.info('calling api');
    const data = await httpRequest.get(END_POINT, { params: { q: '' } });
    return data;
  } catch (error) {
    throw new Error('');
  }
};
