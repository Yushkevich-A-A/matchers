import sortCharacters from '../app';

const exprected = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

test('function for sorting characters by health level', () => {
  const received = sortCharacters([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ]);

  expect(received).toEqual(exprected);
});

test('function for sorting characters by health level', () => {
  const received = sortCharacters([
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
  ]);

  expect(received).toEqual(exprected);
});
