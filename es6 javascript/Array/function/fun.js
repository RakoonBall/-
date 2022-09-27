const fun = (x,y)=>{
    return [x,y]; //returns an array
}

const result = fun(4,5);

const [first, second] = fun(5,7);//when it is array we can use any type of variable 

console.log(first);
console.log(second);


//but when it is object we can't change the names
const func=(x,y)=>{
    return {x,y};
}
const {x,y} = func(4,7); //we have to write x,y otherwise it won't work in the case of object
//but we can change the names\

// ====// const {x:num,y}

console.log(y,x);
console.log(result);
//let's see this other example 
const add=()=>{
    console.log('hello world');
}

const obj= {
    name: 'mehedi',
    roll: 23,
    func:add  //method
}

const show = ({name, roll, func}) =>{//here we are directly destructuring it xd

//in case of react we use props we candestructure in 2 ways
    

 // const {name, roll,func} = props;
    console.log(name, roll);
    func()
}

show(obj)//mehedi 23



// object shorthand
const a= 5;
const b=10;

// case:1 
const obj1= {
    first: a,
    second: b
}

//in the following case we can use shorthand when you want to use the propery name as the const name

// case:2 
const obj2 ={
    a:a,
    b:b
}
// case:3 
const obj3={a,b}
console.log(obj3) //{a:5, b:10}