export default class Favorites{
  constructor(cart){
    this.favorites = JSON.parse(localStorage.getItem('favorites')) || []
    this.cart = cart
  }
  addToFaves(item){
    let existing = this.favorites.find(fav => fav.id === item.id)
    if(existing){
      this.favorites = this.favorites.filter(val => val.id !== item.id)
    }else{
      this.favorites = [...this.favorites, item]
    }    
    this.saveFaves()
  }

  //saving to localstorage
  saveFaves(){
    localStorage.setItem('favorites', JSON.stringify(this.favorites))
  }
  //removing from favorite list
  removeFromFaves(idx){
    this.favorites = this.favorites.filter(val => val.id !== idx)
    this.saveFaves()
    this.renderFaves()
  }
  //remove all
  removeAllFaves(){
    this.favorites = []
    this.saveFaves()
    this.renderFaves()
  }
  getLength(){
    return this.favorites.length
  }
  getById(idx){
    return this.favorites.find(item => item.id === idx)
  }
  //allocating click listeners
  addListeners(){
    document
    .querySelector('.favorites-section')
    .addEventListener('click', (e) => {
      let item = e.target.closest('.favorite-card')
      let itemId = Number(item?.dataset?.id)

      if(e.target.closest('.fav-add-to-cart')) this.cart.addToCart(this.getById(itemId))
      else if(e.target.closest('.remove-from-fav')) this.removeFromFaves(itemId)
    })
  }
  //listener for remove all button
  removeListener(){
    document
    .getElementById('remove-all-fav')
    .addEventListener('click', () => this.removeAllFaves())
  }

  //rendering favorite items
  renderFaves(){

    let favContent = document.querySelector('.fav-content')

    if(!this.favorites.length){
      favContent.innerHTML = `
      <div class="favorites-mid-bar">
        <div class="fav-heading-details">
          <div class="fav-heading">My Favorites 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </div>
          <div id="fav-count">${this.getLength()} items</div>
        </div>
        <button id="remove-all-fav">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <polyline points="3 6 5 6 21 6"/>
          <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
          <path d="M10 11v6"/>
          <path d="M14 11v6"/>
          <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
        </svg> Clear Favorites</button>
      </div>
        <div class="empty-favs-section">
          <img src="../assets/uncanny-cat.png">
          <h3>Your Favorite list is empty</h3>
          <p>Save items you love to your favorite list and shop for them later.</p>     
        </div>
      `
      this.removeListener()
      return;
    }

    const favs = this.favorites.map(item => (
      `
        <div class="favorite-card" data-id="${item.id}">
          <div class="image-section">
            <img src="${item.image}">
            <div class="favorite-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
            </div>
          </div>
          <div class="favorite-details">
          <div class="fav-item-name">${item.name}</div>
          <div class="fav-item-price">$ ${item.price}</div>
          <button class="fav-add-to-cart">
            <svg style="height: 20px; width: 20px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"/>
                      <circle cx="10" cy="20" r="1.5" fill="currentColor"/>
                      <circle cx="18" cy="20" r="1.5" fill="currentColor"/>
                </svg>Add to Cart</button>
          <button class="remove-from-fav">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <polyline points="3 6 5 6 21 6"/>
              <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
              <path d="M10 11v6"/>
              <path d="M14 11v6"/>
              <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
          </svg>Remove</button>
        </div>
        </div>
      `
    )).join('')

  favContent.innerHTML = `
      <div class="favorites-mid-bar">
        <div class="fav-heading-details">
          <div class="fav-heading">My Favorites 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M12 21s-7-4.35-9.5-8.28C.5 9.3 2.42 5 6.5 5c2.04 0 3.57 1.17 4.5 2.5C11.93 6.17 13.46 5 15.5 5 19.58 5 21.5 9.3 19.5 12.72 19 13.54 12 21 12 21z"/>
          </svg>
        </div>
          <div id="fav-count">${this.getLength()} items</div>
        </div>
        <button id="remove-all-fav">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
          <polyline points="3 6 5 6 21 6"/>
          <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>
          <path d="M10 11v6"/>
          <path d="M14 11v6"/>
          <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
        </svg> Clear Favorites</button>
      </div>
      <div class="favorites-section">
        ${favs}
      </div>
  `
    this.removeListener()
    this.addListeners()
  }
}