//error handling

//method 1: we are not displaying it here
const loadDataErr = async()=>{
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

loadDataErr();

//======================= best method to load data ======================

//method 3 is an upgraded version of method one where we also call and display the data

const fetchData = async()=>{
    try {
        const res = fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
        const data = res.json();
        return data;  // this returns a promise
    } catch (error) {
        console.log(error);
    }
}

const showData = async()=>{
    const res = await loadData(); //we can't use the promise so we wait again and get the data
    console.log(res);
}




//method 2:
fetch('https://jsonplaceholder.typicode.com/todos')
.then(res => res.json())
.then(data => console.log(data))
.catch(err => console.log(err.message))

