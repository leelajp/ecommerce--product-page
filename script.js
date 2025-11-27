// Change main image
const mainImage = document.getElementById("mainImage");
const thumbs = document.querySelectorAll(".thumb");

thumbs.forEach(thumb => {
  thumb.addEventListener("click", () => {
    mainImage.src = thumb.dataset.img;
  });
});

// Quantity controls
const qty = document.getElementById("qty");
document.getElementById("plus").onclick = () => qty.value++;
document.getElementById("minus").onclick = () => {
  if(qty.value > 1) qty.value--;
};

// Cart
let cart = 0;
document.getElementById("addToCart").onclick = () => {
  cart += Number(qty.value);
  document.getElementById("cartCount").textContent = cart;
  alert("Added to cart!");
};