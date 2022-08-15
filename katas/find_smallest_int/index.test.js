const SmallestIntegerFinder = require('./index');

test("Find the smallest interger", () => {
    const sif = new SmallestIntegerFinder();
    expect(sif.findSmallestInt([62, 522, 137, 25, 79])).toBe(25);
});