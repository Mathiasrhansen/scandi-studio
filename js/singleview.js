const productContainer = document.querySelector(".productContainer");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const category = params.get("category");
console.log(id);
console.log(category);

// Linkstruktur href="product.html?id=xx&category=xx"

fetch(`https://dummyjson.com/products/${id}`).then(res => res.json()).then(product => {console.log(product.brandname)

productContainer.innerHTML = `<div class="imgContainer">
          <div class="thumbnailContainer">
            <img src="${product.images[1]}" alt="thumbnail1" class="thumbnail" />
            <img src="${product.images[2]}" alt="thumbnail2" class="thumbnail" />
          </div>
          <img src="${product.images[0]}" alt="productPic" class="productPic" />
        </div>
        <div class="infoContainer">
          <h1 class="productTitle">${product.title} </h1>
          <p class="productSubtitle">${product.tags[1]}</p>

          <div class="productDescription">
            <h2>Product description</h2>
            <p>
              ${product.description}
            </p>
          </div>

          <div class="colorSection">
            <h3>Colour</h3>
            <div class="colorOptions">
              <div
                class="colorOption color-black selected"
                data-color="black"
              ></div>
              <div class="colorOption color-white" data-color="striped"></div>
              <div class="colorOption color-green" data-color="green"></div>
              <div class="colorOption color-brown" data-color="brown"></div>
              <div class="colorOption color-gray" data-color="gray"></div>
              <div class="colorOption color-beige" data-color="beige"></div>
            </div>
          </div>

          <div class="priceSection">
            <span class="originalPrice">$59.99</span>
            <span class="salePrice">$59.99</span>
          </div>

          <div class="cartSection">
            <div class="quantitySelector">
              <button class="quantityBtn" id="decreaseQty">-</button>
              <span class="quantityValue" id="quantity">1</span>
              <button class="quantityBtn" id="increaseQty">+</button>
            </div>
            <button class="addToCartBtn">Add to cart</button>
          </div>
        </div>`;
});