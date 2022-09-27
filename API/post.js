//api methods
//method are 5 types :
// 1) get - when we use it we don't need to declare it
// 2)post - it is always for creating a resource
// 3) put - to completely update something and replace it entirely // put is for checking if the resource exists and then update it
// 4) patch -  client sends partial data that is to be updated but not the entire data // always for updating resources
// 5) delete - we use it to delete data 

// =========//========== POST============================================

// calling a post api 

//methods, body, headers
fetch('https://www.hero-open-api.ml/phone/add-pixels',{
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json",
    }
})
.then(res => res.json())
.then(data => {
    showTost(data.message || "Submitted");
    submitBtn.setAttribute("disabled", true);
})