// Write a method, that will get an integer array as parameter and will process every number from this array.
// Return a new array with processing every number of the input-array like this:
// If the number has an integer square root, take this, otherwise square the number.

const squareOrSquareRoot = (array) => {
    return array.map(number => {
        const numberToRoot = Math.sqrt(number);
        const numberToSquare = number ** 2;
        const isInterger = numberToRoot % 1 == 0;
        return isInterger ? numberToRoot : numberToSquare;
    })
}

test("To square(root) or not to square(root)", () => {
    expect(squareOrSquareRoot([4, 3, 9, 7, 2, 1])).toEqual([2, 9, 3, 49, 4, 1]);
})