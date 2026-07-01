import productData from './productData.js'
import Cart from './scripts/Cart.js'
import ProductManager from './scripts/ProductManager.js'

const cart = new Cart()
const manager = new ProductManager(
  productData, 
  cart,
  getCartCount
)

document
.getElementById('navbar-cart')
.addEventListener('click', () => {
  window.location.href = './cart/cart.html'
})
function getCartCount(){
  document.getElementById('cart-count-badge').innerText = cart.getLength()
}
getCartCount()

manager.render()