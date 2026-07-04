import Favorites from "../scripts/Favorites.js";
import Cart from "../scripts/Cart.js";

document
.getElementById('favorites-home')
.addEventListener('click', () => {
  window.location.href = '../index.html'
})

const cart = new Cart()
const favorites = new Favorites(cart)
favorites.renderFaves()
