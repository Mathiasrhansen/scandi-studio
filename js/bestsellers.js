const cardContainer = document.querySelector(".cardContainer");

// Funktion til at skabe et random id fra vores valgte kategorier
function getRandomProductId() {
    // Her oprettes der to objekter som indeholder intervaller med de id'er vi har med at gøre
    const range1 = { min: 11, max: 15 };
    const range2 = { min: 43, max: 77 };
    
    // Her bruges math.random til at vælge én af intervaller der blev oprettet før
    // Det gør den ved at vælge et tal mellem 0 og 1
    const useRange1 = Math.random() < 0.5;
    // Hvis tallet er under 0.5 er useRange1 true og så vælger den det første interval (range1)
    const selectedRange = useRange1 ? range1 : range2;
    
    // Her returnerer den en random værdi fra det valgte interval
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