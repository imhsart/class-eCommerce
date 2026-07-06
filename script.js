import productData from './productData.js'
import Cart from './scripts/Cart.js'
import ProductManager from './scripts/ProductManager.js'
import Favorites from './scripts/Favorites.js'


const cart = new Cart()
const faves = new Favorites(
  cart
)
const manager = new ProductManager(
  productData, 
  cart,
  faves,
  getCartCount 
)


document
.getElementById('favorites')
.addEventListener('click', () => {
  window.location.href = './favorites/favorites.html'
})
document
.getElementById('navbar-cart')
.addEventListener('click', () => {
  window.location.href = './cart/cart.html'
})
document
.getElementById('about')
.addEventListener('click', ()=> {
  window.location.href = './about-us/about-us.html'
})
document
.getElementById('contact')
.addEventListener('click', () => {
  window.location.href = './contact/contact.html'
})
function getCartCount(){
  document.getElementById('cart-count-badge').innerText = cart.getLength()
}
getCartCount()

manager.render()