const params = new URLSearchParams(window.location.search);
const category = params.get("category");
document.querySelector("h1").textContent = category;

const sortBtn = document.querySelector(".sortBtn");
sortBtn.addEventListener("click", showSorts);

function showSorts() {
    document.querySelector("#hilo").classList.toggle("hidden");
    document.querySelector("#lohi").classList.toggle("hidden");
}

document.querySelector(".sortBtn").addEventListener("click", showSorted);

function showSorted(event) {
    const direction = event.target.dataset.direction;
    if (direction == "lohi") {
        currentDataSet.sort((a, b) => a.price - b.price);
    } else {
        currentDataSet.sort((a, b) => b.price - a.price);
    }
    showProducts(currentDataSet);
}

const productListContainer = document.querySelector(".productContainer");
let allData, currentDataSet;

fetch(`https://dummyjson.com/products/category/${category}`)
    .then((response) => response.json())
    .then((data) => {
        allData = currentDataSet = data.products;
        showProducts(allData);
    });

function showProducts(products) {
    productListContainer.innerHTML = "";
    products.forEach((element) => {
        productListContainer.innerHTML += `<a href="" class="productCard">
          <div class="imgContainer">
            <img src="${element.thumbnail}" alt="${element.title}" class="productImg" />
          </div>
          <p class="productName">${element.title}</p>
          <p class="productTag">${element.tags[1]}</p>
          <p class="productPrice">${element.price}</p>
        </a>`
    });
}