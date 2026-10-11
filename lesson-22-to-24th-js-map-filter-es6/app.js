//Q1.  Double the Number
const number = [1, 2, 3, 4, 5];

let doubleNumber = number.map(num => num * 2);

console.log('Orignal Number ', number);
console.log('Modify Number ', doubleNumber);

console.log('-----------------------------------------------------');
// -----------------------------------------------------

//Q2. Add 10 to each number

const numbers = [5, 10, 15, 20];

let addedNum = numbers.map(num => num + 10);

console.log('Orignal array ', numbers);
console.log("Modify array ", addedNum);
console.log('-----------------------------------------------------');
// -----------------------------------------
//Q3. Convert to UpperCase names

const userNames = ['ali', 'sajid', 'owais'];

let toUpperCase = userNames.map(name => name.toUpperCase());
console.log('Orignal array ', userNames);
console.log('Convert ToUpperCase ', toUpperCase);

console.log('-----------------------------------------------------');
// -----------------------------------------
//Q4. Get Even Numbers
const num = [1, 2, 3, 4, 5, 6];

let filterEven = num.filter(num => num % 2 == 0);

console.log('orignal number ', num);
console.log('filtered numbers ', filterEven);
console.log('-----------------------------------------------------');
// -----------------------------------------
//Q5. Get numbers greater than 10
const nums = [5, 12, 8, 20, 3, 15];

let getNumber = nums.filter(num => num > 10);
console.log('Orignal numbers ', nums);
console.log('print Greater than 10 ', getNumber);
console.log('-----------------------------------------------------');
// -----------------------------------------
//Q6. get names longer than 4 charactor's
const names = ['ali', 'ahmed', 'usman', 'sara', 'johan'];

let filterNames = names.filter(name => name.length > 4);
console.log('Orignal array ', names)
console.log('Filtered array ', filterNames)
console.log('-----------------------------------------------------');
// -----------------------------------------
// Q7. First filter numbers greater than 5, than map them to double

const arrayOfNumber = [2, 6, 8, 3, 10];

let filterArray = arrayOfNumber.filter(num => num > 5).map(num => num * 2);
console.log("Orignal array ", arrayOfNumber)
console.log('filtered & modifyed array ', filterArray)
// -----------------------------------------
