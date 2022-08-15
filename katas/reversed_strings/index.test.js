// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

const solution = (value) => value.split('').reverse().join('');

test('reverse the strings', () => {
    expect(solution('world')).toBe('dlrow');
    expect(solution('hello')).toBe('olleh');
    expect(solution('')).toBe('');
    expect(solution('h')).toBe('h');
});