const add = (num1, num2)=>{
    return num1+ num2;
}

console.log(add(6,7));

// arrow function can return implicit only in the same line 
const multiply = (num1, num2)=> num1*num2;//no need to write return or give brackets

console.log(multiply(8,7));

//parameters: when it only has one parameter it is not necessary to give brackets, but if it has more than one parameter we need to give brackets