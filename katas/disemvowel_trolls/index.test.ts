class Kata {
    static disemvowel(str: string): string {
        const isNotVowels = (letter: string): boolean => {
            const regex = /[aeiouAEIOU]/;
            return !regex.test(letter);
        }
        return str.split('').filter(letter => isNotVowels(letter)).join('');
    }
}