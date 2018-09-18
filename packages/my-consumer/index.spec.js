const index = require('./index');

test('adds 1 + 2 to equal 3', () => {
  const result = index.publicFonction();
  expect(result).toBe(4);
});
