const getGrade = require('./index');

test("return the letter grade", () => {
    expect(getGrade(95, 90, 93)).toBe('A');
    expect(getGrade(70, 70, 100)).toBe('B');
    expect(getGrade(75, 60, 82)).toBe('C');
    expect(getGrade(58, 62, 70)).toBe('D');
    expect(getGrade(58, 59, 60)).toBe('F');
})