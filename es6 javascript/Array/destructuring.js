// const arr = [1, 3, 5, 7, 8, 12, 16];

//spreading is a destructering method we have covered it in array.js
 const arr = [10 ,12, 20, 40, 60, 90, 15, 35];

 const [x,y,...z]= arr; //this is rest 


 console.log(z, y, z);
 console.log(x,y,...z);
 console.log(x)
 console.log(y)
 console.log(z);


