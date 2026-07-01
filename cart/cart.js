import Cart from "../scripts/Cart.js";

document
.getElementById('cart-home')
.addEventListener('click', ()=>{
  window.location.href = '../index.html'
})

const cart = new Cart()
cart.render()