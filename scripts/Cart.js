export default class Cart{
  constructor(){
    this.items = JSON.parse(localStorage.getItem('cartItems')) || []
    this.cartContent = document.querySelector('.cart-content')
  }

  addToCart(product){
    const existing = this.items.find(val => val.id === product.id)
    if(existing){
      existing.quantity += 1
    }else{
      this.items = [...this.items, product]
    }
    this.saveData()
    
    //to be removed later
    console.log(this.items)
  }

  //to save to localstorage
  saveData(){
    localStorage.setItem('cartItems', JSON.stringify(this.items))
  }
  removeFromCart(idx){
    this.items = this.items.filter(item => item.id !== idx)
    this.saveData()
    this.render()
  }
  addRemoveListener(){
    let tableBody = document.querySelector('tbody')
    tableBody.addEventListener('click', (e) =>{
      if(e.target.closest('.cart-item-remove')){
        let item = e.target.closest('.cart-item')
        let itemId = Number(item?.dataset?.id)
        this.removeFromCart(itemId)
      }
    })
  }
  render(){
    if(!this.items.length){
      this.cartContent.innerHTML = `
        <div class="empty-cart-section">
          <div class="cart-heading">Shopping Cart Summary</div>
          <img src="../assets/empty-cart.jfif" >
          <h3>YOUR CART IS CURRENTLY EMPTY.</h3>
        </div>
      `
      return;
    }
    let totalAmount = this.items.reduce((sum,item) => sum + item.price*item.quantity, 0).toFixed(2)
    const rows = this.items.map(item => (
      `
        <tr class="cart-item" data-id="${item.id}">
              <td class="cart-item-remove"><button>╳</button></td>
              <td class="cart-item-image"><img src="${item.image}"></td>
              <td class="cart-item-name">${item.name}</td>
              <td class="cart-item-price">$ ${item.price}</td>
              <td class="cart-item-quantity"><div><span>${item.quantity}</span><div class="quantity-btn"><button>+</button><button>-</button></div></div></td>
              <td class="cart-item-total">$ ${(item.quantity*item.price).toFixed(2)}</td>
            </tr>
      `
    )).join('')

    this.cartContent.innerHTML = `
      <div class="cart-heading">Shopping Cart Summary</div>
        <table class="table">
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th></th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
           ${rows}
          </tbody>
        </table>
        <div id="total-amt">Total: $ ${totalAmount}</div>
        <div id="place-order-btn"><button>Place Order</button></div>
    `
    this.addRemoveListener()
  }
  getItems(){
    return this.items
  }
  getLength(){
    return this.items.length
  }
}
