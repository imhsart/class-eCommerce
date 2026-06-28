import productData from '../productData.js'
const contentContainer = document.querySelector('.content')

export default class ProductManager{
  constructor(products, cart){
    this.products = products
    this.cart = cart
    this.modalContainer = document.querySelector('.preview-modal')
  }

  render(){
    contentContainer.innerHTML = this.products.map(product => `
        <div class="product-card" data-id="${product.id}">
          <div class="image-preview">
            <img alt="${product.name}" src="${product.image}">
            <div class="${product.sale ? 'sale' : ''}">${product.sale ? 'SALE' : ''}</div>
            <button class="preview-button">⛶</button>
          </div>
          <div class="product-details">
            <h4 class="product-name">${product.name}</h4>
            <p class="price">
            ${
              product.sale ? `$${product.price} USD <span class="sale-price">$${product.oldPrice} USD</span>` : `$${product.price} USD`
            }       
            </p>
          </div>
        </div>
      `
    ).join('')
    this.addPreviewListener()
  }

  addPreviewListener(){
    contentContainer.addEventListener('click', (e) => {
      if(e.target.closest('.preview-button')){
        const card = e.target.closest('.product-card')
        const cardId = Number(card?.dataset?.id)
        this.preview(cardId)
      }
    })
  }

  getById(idx){
    return this.products.find(product => product.id === idx)
  }

  preview(idx){
    const product = this.getById(idx)
    if(!product) return
    this.modalContainer.innerHTML = `
      <div class="preview-modal-content">
      <button class="modal-close-btn">╳</button>
      <div class="modal-img"><img src="${product.image}"></div>
      <div class="preview-modal-details">
        <div class="preview-modal-number">${product.modelNumber}</div>
        <div class="preview-modal-name">${product.name}</div>
        <div class="preview-modal-des">${product.description}</div>
        <p class="preview-modal-price">$ ${product.price}</p>
        <div class="preview-modal-quantity"><div class="preview-modal-quan">${product.quantity}</div></div>
        <button class="modal-add-to-cart"><svg style="height: 20px; width: 20px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"/>
                      <circle cx="10" cy="20" r="1.5" fill="currentColor"/>
                      <circle cx="18" cy="20" r="1.5" fill="currentColor"/>
                </svg>ADD TO CART</button>
      </div>
    </div>
    `
    this.modalContainer.style.display = 'flex'

    document
    .querySelector('.modal-close-btn')
    .addEventListener('click', () => this.closeModal())

    document
    .querySelector('.modal-add-to-cart')
    .addEventListener('click', ()=> {
      this.cart.addToCart(product)
    })
  }

  closeModal(){
    this.modalContainer.style.display = 'none'
  }
}