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

    products.forEach((element) => {
        // const isOnSale = element.discountPercentage > 0;
        // const originalPrice = isOnSale ? (element.price / (1 - element.discountPercentage / 100)).toFixed(2) : null;
        
        const hasDiscount = element.discountPercentage > 0;
        const originalPrice = element.price;
        const salePrice = hasDiscount 
        ? (element.price * (1 - element.discountPercentage / 100)).toFixed(2)
        : element.price;
        const imgClass = hasDiscount ? 'imgContainer sale' : 'imgContainer';
        
        productListContainer.innerHTML += `<a href="product.html?id=${element.id}&category=${category}" class="productCard">
          <div class="${imgClass}">
            <img src="${element.thumbnail}" alt="${element.title}" class="productImg" />
          </div>
          <p class="productName">${element.title}</p>
          <p class="productTag">${element.tags[1]}</p>
          ${hasDiscount ? `<p class="productOriginalPrice">${element.price}</p>` : ''}
          <p class="productPrice">${salePrice}</p>
          <button class="productBtn">Read more</button>
        </a>`
    });
}