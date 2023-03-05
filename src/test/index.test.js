import ErrorRepository from '../index';

const errors = new ErrorRepository();

test('get error', () => {
  expect(errors.translate(10)).toBe('Неизвестный персонаж');
});

test('unknown error', () => {
  expect(errors.translate(30)).toBe('Unknown error');
});
