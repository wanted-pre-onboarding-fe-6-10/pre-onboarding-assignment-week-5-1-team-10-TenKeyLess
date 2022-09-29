import { getRecommendations } from './sickAPI';

it('fetch search list', async () => {
  expect.assertions(1);
  await expect(getRecommendations({ q: 'lorem', page: 2 })).resolves.not.toBeUndefined();
});
