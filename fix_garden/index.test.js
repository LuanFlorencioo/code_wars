const rainAmount = require('./index');

test("Fix garden", () => {
    expect(rainAmount(100)).toBe("Your plant has had more than enough water for today!");
    expect(rainAmount(39)).toBe("You need to give your plant 1mm of water");
})