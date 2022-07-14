import { range } from "./range";

describe('range', () => {
  it('should return array of count with indexes as elements', () => {
    const count1 = 1;
    expect(range(count1)).toEqual([0]);
    const count2 = 2;
    expect(range(count2)).toEqual([0, 1]);
    const count3 = 3;
    expect(range(count3)).toEqual([0, 1, 2]);
  });
});
