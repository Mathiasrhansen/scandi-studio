// Tilføj antal
const decreaseBtn = document.getElementById('decreaseQty');
      const increaseBtn = document.getElementById('increaseQty');
      const quantityDisplay = document.getElementById('quantity');
      let quantity = 1;

      decreaseBtn.addEventListener('click', () => {
        if (quantity > 1) {
          quantity--;
          quantityDisplay.textContent = quantity;
        }
});

      increaseBtn.addEventListener('click', () => {
        quantity++;
        quantityDisplay.textContent = quantity;
});

// Billedskift
const thumbnails = document.querySelectorAll('.thumbnail');
      const mainImage = document.querySelector('.productPic');
      
      thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
          mainImage.src = thumbnail.src;
        });
});

// Farvevælger
const colorOptions = document.querySelectorAll('.colorOption');
      colorOptions.forEach(option => {
        option.addEventListener('click', () => {
          colorOptions.forEach(opt => opt.classList.remove('selected'));
          option.classList.add('selected');
        });
});