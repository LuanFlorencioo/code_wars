const solution = require('./index');

test('reverse the strings', () => {
    expect(solution('world')).toBe('dlrow');
    expect(solution('hello')).toBe('olleh');
    expect(solution('')).toBe('');
    expect(solution('h')).toBe('h');
});