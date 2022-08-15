const getCount = (str) => {
    let count = 0;
    for (const letter of str) {
        const isVowel = letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u';
        (isVowel)
            ? count++
            : null;
    }
    return count;
}

test("count vowels of the string", () => {
    expect(getCount('abracadabra')).toBe(5);
})