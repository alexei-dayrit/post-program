// JavaScript
const firstName1 = 'Alexei';
const myAge1 = 24;

const increment1 = counterVal => {
  return counterVal + 1;
}

const counter1: number = increment1(10)

// TypeScript
const firstName2: string = 'Alexei';
const myAge2: number = 24;

const increment2 = (counterVal: number) => {
  return counterVal + 1;
}

const counter2: number = increment2(10)
