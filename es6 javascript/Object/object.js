const obj = {
    name: 'heilo',
    roll: 12
}

const obj1 = obj;

console.log(obj1);
console.log(obj);

obj.address = 'mohsin hall'
obj.name="leyana";

console.log(obj1);//wow so obj1 has also changed because object is a non-primitive data type




// object destructuring
const {name, address, roll} = obj;//second bracket because it is object

console.log(name); //leyana





// we again use the spread operator to do our job

const obj2 = {...obj};
console.log(obj2);


//changing variable name
let {name:nam, address:thikana, roll:serial} = obj2;


nam="samrat";

console.log(nam);//samrat

console.log(obj2);

//optional chaining
//when there might be a property missing , we use ternary operator to display them 

//console.log( obj.data[0].display?.length);

//.? will not return error if it doesn't exist so we get an assurance, speacially from nested objects




