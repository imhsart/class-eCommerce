import productData from './productData.js'
import Cart from './scripts/Cart.js'
import ProductManager from './scripts/ProductManager.js'

document
.getElementById('navbar-cart')
.addEventListener('click', () => {
  window.location.href = './cart/cart.html'
})

const cart = new Cart()
const manager = new ProductManager(
  productData, 
  cart
)
manager.render()