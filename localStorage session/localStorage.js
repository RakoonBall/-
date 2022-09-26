const addDataStorage =()=>{
    console.log('hello')
    let product = document.getElementById('product').value;

    const quantity = document.getElementById('quantity').value;
    
    let cart =getCartStorage();
    cart[product]= quantity;
    localStorage.setItem('cart', JSON.stringify(cart));
}

const getCartStorage=()=>{
    let cart={};
     const storedCart =localStorage.getItem('cart');
    if(storedCart){
        cart = JSON.parse(storedCart);
    }

    return cart;
}