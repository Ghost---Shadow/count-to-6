const midpoint = require('./8-default-args');

test('Both parameters', () => {
  expect(midpoint(0.1, 0.3)).toBeCloseTo(0.2);
});

test('Lower missing', () => {
  expect(midpoint(undefined, 0.3)).toBeCloseTo(0.15);
});

test('Upper Missing', () => {
  expect(midpoint(0.1, undefined)).toBeCloseTo(0.55);
});

test('One parameter', () => {
  expect(midpoint(0.1)).toBeCloseTo(0.55);
});

test('Both missing', () => {
  expect(midpoint()).toBeCloseTo(0.5);
});
