const midpoint = require('./8-default-args');

describe('Midpoint tests', () => {
  it('Both parameters', () => {
    expect(midpoint(0.1, 0.3)).toBeCloseTo(0.2);
  });

  it('Lower missing', () => {
    expect(midpoint(undefined, 0.3)).toBeCloseTo(0.15);
  });

  it('Upper Missing', () => {
    expect(midpoint(0.1, undefined)).toBeCloseTo(0.55);
  });

  it('One parameter', () => {
    expect(midpoint(0.1)).toBeCloseTo(0.55);
  });

  it('Both missing', () => {
    expect(midpoint()).toBeCloseTo(0.5);
  });
});
