const countPositivesSumNegatives = input => {
    if (input == null || input.length == 0) {
        return []
    } else {
        const countPositivesNumbers = input.filter(number => number > 0).length;
        const sumNegativesNumbers = input.filter(number => number < 0).reduce((p, c) => p + c, 0);
        return [countPositivesNumbers, sumNegativesNumbers];
    }
}