const amountOfPages = summary => {
    const n = [];
    let total = '';
    for (let i = 1; total.length < summary; i++) {
        total += i;
        n.push(i);
    }
    return n.length
}