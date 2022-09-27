//how to find if it's array or not 

const numbers = [4,56,23,56,3,23,76];

console.log(Array.isArray(numbers)); 

//use .length to get the length of the array

console.log(numbers.length);

//we can use many methods on array as well

//array is non-primitive type

const nums= numbers;

console.log(nums);
console.log(numbers);

numbers.pop();

nums.push(7);
console.log(nums);
console.log(numbers);//numbers also changed, because js is giving them the same location
//there fore we need spreading

//now we do 
const num1 = [...numbers];
console.log(num1);
//if we change numbers it doesn't change num1

num1.shift();
console.log(numbers);
console.log(num1)// 4 has been removed , the first element of num1 but in the numbers array it did not change at all.

num1.unshift(65); // unshift inserts a value at the start of an array
console.log(num1);


