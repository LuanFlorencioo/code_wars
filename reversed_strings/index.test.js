const solution = require('./index');

test('reverse "world" => "dlrow"', () => {
    expect(solution('world')).toBe('dlrow');
});
test('reverse "hello" => "olleh"', () => {
    expect(solution('hello')).toBe('olleh');
});
test('reverse "" => ""', () => {
    expect(solution('')).toBe('');
});
test('reverse "h" => "h"', () => {
    expect(solution('h')).toBe('h');
});