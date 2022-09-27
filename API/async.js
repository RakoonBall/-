//method 1
const loadData = async()=>{
    const res =await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await res.json();
    return data;
}
 const displayData1=()=>{
    loadData().then((data) => console.log(data));
 }
 displayData1();
 

 // method 1 can also be declared like this,
 //here we use async and await and wait for the promise to return the data
 const showDataNew = async ()=>{
     const res = await loadData();
     console.log(res);
    }
    
 showDataNew();
    
    
    //method 2
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    .then(res => res.json())
    .then(data => displayData2(data));
    
    const displayData2=(data)=>{
        console.log(data);
    }