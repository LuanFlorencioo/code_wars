const getGrade = (s1, s2, s3) => {
    const score = parseInt((s1 + s2 + s3) / 3);

    if (score >= 90 && score <= 100)
        return 'A';
    else if (score >= 80 && score <= 90)
        return 'B';
    else if (score >= 70 && score <= 80)
        return 'C';
    else if (score >= 60 && score <= 70)
        return 'D';
    else
        return 'F';
}

test("return the letter grade", () => {
    expect(getGrade(95, 90, 93)).toBe('A');
    expect(getGrade(70, 70, 100)).toBe('B');
    expect(getGrade(75, 60, 82)).toBe('C');
    expect(getGrade(58, 62, 70)).toBe('D');
    expect(getGrade(58, 59, 60)).toBe('F');
})