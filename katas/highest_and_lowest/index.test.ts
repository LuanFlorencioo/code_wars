class Kata {
  static highAndLow(numbers: string): string {
    const allNumbers: number[] = numbers.split(' ').map(number => +number);
    const minValue: number = Math.min(...allNumbers);
    const maxValue: number = Math.max(...allNumbers);
    return `${maxValue} ${minValue}`;
  }
}