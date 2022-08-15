const makeNegative = require('./index');

test("make return negative number", () => {
    expect(makeNegative(3)).toBe(-3);
    expect(makeNegative(-5)).toBe(-5);
    expect(makeNegative(0)).toBe(0);
    expect(makeNegative(0.12)).toBe(-0.12);
})