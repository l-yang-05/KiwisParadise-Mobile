loadProducts()
let products = [];

function loadProducts() {
    fetch("https://kiwisparadise-pwa.herokuapp.com/api/products")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            products = data
        });
}

