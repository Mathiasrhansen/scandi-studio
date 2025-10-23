const cardContainer = document.querySelector(".cardContainer");

// Function to get a random ID from the specified ranges
function getRandomProductId() {
    // Define the two ranges: 11-15 and 43-77
    const range1 = { min: 11, max: 15 };
    const range2 = { min: 43, max: 77 };
    
    // Randomly choose one of the two ranges
    const useRange1 = Math.random() < 0.5;
    const selectedRange = useRange1 ? range1 : range2;
    
    // Generate random ID within the selected range
    return Math.floor(Math.random() * (selectedRange.max - selectedRange.min + 1)) + selectedRange.min;
}

// Function to fetch and display bestseller products
async function fetchBestsellers() {
    try {
        const productIds = new Set();
        
        // Generate 4 unique random product IDs
        while (productIds.size < 4) {
            productIds.add(getRandomProductId());
        }
        
        // Fetch all products
        const productPromises = Array.from(productIds).map(id => 
            fetch(`https://dummyjson.com/products/${id}`).then(res => res.json())
        );
        
        const products = await Promise.all(productPromises);
        
        // Display the products
        showBestsellers(products);
        
    } catch (error) {
        console.error('Error fetching bestsellers:', error);
    }
}

// Function to display products in the card container
function showBestsellers(products) {
    cardContainer.innerHTML = "";
    
    products.forEach((product) => {
        const hasDiscount = product.discountPercentage > 0;
        const originalPrice = product.price;
        const salePrice = hasDiscount 
        ? (product.price * (1 - product.discountPercentage / 100)).toFixed(2)
        : product.price;
        const imgClass = hasDiscount ? 'imgContainer sale' : 'imgContainer';
        
        cardContainer.innerHTML += `
            <a href="product.html?id=${product.id}&category=${product.category}" class="bestsellerCard">
                <div class="imgContainer bestsellerTag">
                    <img src="${product.thumbnail}" alt="${product.title}" class="productImg" />
                </div>
                <p class="productName">${product.title}</p>
                <p class="productTag">${product.tags[1] || product.tags[0]}</p>
                ${hasDiscount ? `<p class="productOriginalPrice">${product.price}</p>` : ''}
                <p class="productPrice">${salePrice}</p>
                <button class="productBtn">Read more</button>
            </a>
        `;
    });
}

// Call the function when the page loads
fetchBestsellers();