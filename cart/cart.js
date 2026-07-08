import Cart from "../scripts/Cart.js";
import Orders from "../scripts/OrderManager.js";

document
.getElementById('cart-home')
.addEventListener('click', ()=>{
  window.location.href = '../index.html'
})

const cart = new Cart()
const orders = new Orders(cart)
cart.render()
orders.init()
