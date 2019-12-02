loadProducts()
let dataArray = [];

function loadProdcuts() {
    fetch("/api/products")
        .then(res => res.json())
        .then(data => {
            dataArray = data;
            createCards(dataArray);
        });
}

function filterType(type) {
    fetch(`/api/productfilter?type=${type}`)
        .then(res => res.json())
        .then(data => {
            dataArray = data;
            createCards(dataArray);
        });
}

function filterPrice(price) {
    fetch(`/api/productfilter?price=${price}`)
        .then(res => res.json())
        .then(data => {
            dataArray = data;
            createCards(dataArray);
        });
}

function filterBoth(type, price) {
    fetch(`/api/productfilter?type=${type}&price=${price}`)
        .then(res => res.json())
        .then(data => {
            dataArray = data;
            createCards(dataArray);
        });
}

function createCards(data) {
    const container = document.getElementsByClassName("container")[0];
    container.innerHTML = "";
    let lastRow;
    const row = createEl("div", "row");

    return data.forEach(function (image, index) {
        const col = createEl("div", "col-md-4 mt-4");
        col.appendChild(createCard(image));
        if (index % 3 === 0) {
            row.appendChild(col);
            container.appendChild(row);
            lastRow = row;
        }

        return lastRow.appendChild(col);
    });
}
