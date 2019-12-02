loadProducts()
let products = [];

function loadProducts() {
    fetch("/api/products")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            products = data
        });
}

