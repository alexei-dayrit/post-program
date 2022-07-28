// JavaScript - Counter
const firstName1 = 'Alexei';
const myAge1 = 24;

const increment1 = counterVal => {
  return counterVal + 1;
}

const counter1: number = increment1(10)

// TypeScript - Counter
const firstName2: string = 'Alexei';
const myAge2: number = 24;

const increment2 = (counterVal: number) => {
  return counterVal + 1;
}

const counter2: number = increment2(10)


// JavaScript - Array
let programmingLanguages1 = ['java', 'typescript', 'python'];
programmingLanguages1.push('golang');

console.log(programmingLanguages1);

// TypeScript - Array
let programmingLanguages2: string[] = ['java', 'typescript', 'python'];
programmingLanguages2.push('golang');

console.log(programmingLanguages2);


// JavaScript - fetch
const fetchData = apiUrl => {
  return (
    fetch(apiUrl)
      .then(response => response.json())
  );
};

const data = fetchData('https://jsonplaceholder.typicode.com/todos/1')

// TypeScript - fetch
interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const fetchData2 = (apiUrl: string): Promise<ITodo> => {
  return (
    fetch(apiUrl).then(response => response.json())
  );
};

// TypeScript object example
interface IProgrammingLanguage {
  name: string;
  isCool: boolean;
  // ? denotes an optional property
  age?: number;
}

const typeScript: IProgrammingLanguage = {
  name: 'typescript',
  isCool: true
}

// JavaScript
const serveFood = (foodType, servings) => {
  console.log(`You want ${servings} servings of ${foodType}.`)
}

// TypeScript
enum Food {
  adobo = 'adobo',
  steak = 'steak',
  curry = 'curry',
  pasta = 'pasta'
}

// void means function doesn't return anything
const serveFood2 = (foodType: Food, servings: number): void => {
  console.log(`You want ${servings} servings of ${foodType}.`);
}

serveFood(Food.steak, 2);
