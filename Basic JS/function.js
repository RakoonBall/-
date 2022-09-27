// 3 ways to declare a function 

// 1
function sum(a,b){
    console.log(a+b);
}

sum(12,14);
// 2
const addNum = function(num1, num2){
    return num1+ num2;
}
console.log(addNum(2,3));

// 3
const addTotal =(a,b)=>{
 const multiplication = a*b;
 console.log(multiplication);
}

addTotal(3,5)
