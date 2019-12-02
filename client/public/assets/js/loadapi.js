loadProducts()
let dataArray = [];

function loadProdcuts() {
    fetch("https://kiwisparadise-pwa.herokuapp.com/api/products")
        .then(res => res.json())
        .then(data => {
            console.log(data)
        });
}

