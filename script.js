import productData from './productData.js'

const contentContainer = document.querySelector('.content')

productData.forEach(product => {
  contentContainer.innerHTML += `
    <div class="product-card">
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
})