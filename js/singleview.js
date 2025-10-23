const productContainer = document.querySelector(".productContainer");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const category = params.get("category");
console.log(id);
console.log(category);

// Linkstruktur href="product.html?id=xx&category=xx"

fetch(`https://dummyjson.com/products/${id}`)
  .then(res => res.json())
  .then(product => {
    console.log("Product loaded:", product);

    // Calculate if there's a sale
    const hasDiscount = product.discountPercentage > 0;
    const originalPrice = product.price;
    const salePrice = hasDiscount 
      ? (product.price * (1 - product.discountPercentage / 100)).toFixed(2)
      : product.price;

    productContainer.innerHTML = `
      <div class="imgContainer">
        <div class="thumbnailContainer">
          <img src="${product.images[1] || product.images[0]}" alt="thumbnail1" class="thumbnail" />
          <img src="${product.images[2] || product.images[0]}" alt="thumbnail2" class="thumbnail" />
        </div>
        <img src="${product.images[0]}" alt="productPic" class="productPic" />
      </div>
      <div class="infoContainer">
        <h1 class="productTitle">${product.title}</h1>
        <p class="productSubtitle">${product.tags[1] || product.category}</p>

        <div class="productDescription">
          <h2>Product description</h2>
          <p>${product.description}</p>
        </div>

        <div class="colorSection">
          <h3>Colour</h3>
          <div class="colorOptions">
            <div class="colorOption color-black selected" data-color="black"></div>
            <div class="colorOption color-white" data-color="striped"></div>
            <div class="colorOption color-green" data-color="green"></div>
            <div class="colorOption color-brown" data-color="brown"></div>
            <div class="colorOption color-gray" data-color="gray"></div>
            <div class="colorOption color-beige" data-color="beige"></div>
          </div>
        </div>

        <div class="priceSection">
          ${hasDiscount 
            ? `<span class="originalPrice">$${originalPrice.toFixed(2)}</span>
               <span class="salePrice">$${salePrice}</span>`
            : `<span class="salePrice">$${originalPrice.toFixed(2)}</span>`
          }
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

    // Initialize functions after content is loaded
    initializeProductFunctions();
  })
  .catch(error => {
    console.error("Error loading product:", error);
    productContainer.innerHTML = `<p>Error loading product. Please try again.</p>`;
  });

// Function to initialize all interactive features
function initializeProductFunctions() {
  // Quantity controls
  const decreaseBtn = document.getElementById('decreaseQty');
  const increaseBtn = document.getElementById('increaseQty');
  const quantityDisplay = document.getElementById('quantity');
  let quantity = 1;

  if (decreaseBtn) {
    decreaseBtn.addEventListener('click', () => {
      if (quantity > 1) {
        quantity--;
        quantityDisplay.textContent = quantity;
      }
    });
  }

  if (increaseBtn) {
    increaseBtn.addEventListener('click', () => {
      quantity++;
      quantityDisplay.textContent = quantity;
    });
  }

  // Image switching
  const thumbnails = document.querySelectorAll('.thumbnail');
  const mainImage = document.querySelector('.productPic');
  
  thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
      mainImage.src = thumbnail.src;
    });
  });

  // Color selector
  const colorOptions = document.querySelectorAll('.colorOption');
  colorOptions.forEach(option => {
    option.addEventListener('click', () => {
      colorOptions.forEach(opt => opt.classList.remove('selected'));
      option.classList.add('selected');
    });
  });
}