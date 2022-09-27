const products = [
    {id:1 , name: 'alu', price: 30},
    {id:2 , name: 'pepe', price: 10},
    {id:3 , name: 'lau', price: 20},
    {id:4 , name: 'piaz', price: 80},
    {id:5 , name: 'kumra', price: 100}
]

//forEach function
products.forEach(product=>{
    console.log(product.name);
})

//map function
const pro = products.map(product => product.name);

const proId= products.map(product=>{
    return product.id; //eivabe return dite hobe, jodi ek line hoy then no need to write return
})

//same effect but we can return an array from map
console.log(pro);
console.log(proId);

//filter method - it will return an array with elements that match its conditions

const bazar = products.filter(item => item.price <= 20 || item.price> 30)
console.log(bazar);

//find mehtod - it will return a value that matches first

const item = products.find(item => item.price>50);

console.log(item);

//array reduce
// let sum = 0;

//1) products.forEach(item => sum += item.price);
//2) for(let item of products){
//     sum += item.price;
// }

//we can do the same thing with reduce method
let initial = 0;
const sum =products.reduce((prev, current)=>{
    return prev + current.price;
}, initial)

//prev = initial = 0;
// current = 10
// prev= prev+ current
// current is the next value = 20
//it will return the sum
//first parameter ta always prev value takei nibe , tumi je value ta nibe initial er jagay shetai niye nibe

//when multiplying the initial value should be one/1

console.log(sum);
