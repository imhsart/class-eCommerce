export default class Orders{
  constructor(cart){
    //make the billingpart as modal in cart file
    this.cart = cart
    this.orders = JSON.parse(localStorage.getItem('orderItems')) || []
  }
  //assigning the click event listener
  init(){
    document.getElementById('place-order-btn').addEventListener('click', () => {
      this.renderModal()
    })
  }

  validateFields(){
    let form = document.querySelector('form')
    let errormess = form.querySelector(".input-error");
    if (!errormess) {
        errormess = document.createElement("p");
        errormess.className = "input-error";
        form.append(errormess);
    }
    errormess.innerText = ''
    let phone = document.getElementById('input-phone')
    let fname = document.getElementById('input-fname')
    let lname = document.getElementById('input-lname')
    let address = document.getElementById('input-address')
    let email = document.getElementById('input-email')
    if(phone.value === '' || fname.value === '' || lname.value === '' || address.value === '' || email.value === ''){
      errormess.innerText = 'Empty fields'
      return
    }
    if(phone.value.length !== 10){
      errormess.innerText = 'Phone Number must be exact 10 numbers long'
      return
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(!emailRegex.test(email.value)){
      errormess.innerText = 'Invalid email format'
      return
    }

    this.orders.push({
      id: Date.now(),
      customer: {
      name: fname.value + ' ' + lname.value,
      email: email.value,
      phone: phone.value,
      address: address.value
    },
    items: this.cart.getItems(),
    total: this.cart.getTotalAmount()
  })
    errormess.innerText = ''
    this.saveOrders()
    this.cart.items = []
    this.cart.saveData()
    alert('Your purchase was successfull! Press OK to redirect to Home page')
    window.location.href = '../index.html'
  }

  saveOrders(){
    localStorage.setItem('orderItems', JSON.stringify(this.orders))
  }


  renderModal(){
    let billContainer = document.createElement('div')
    billContainer.className = 'billing-modal'
    billContainer.innerHTML = `
     <div class="billing-container">
      <div class="billing-heading">
        <div class="heading">Place Your Order</div>
        <div class="bill-close"><button id="close-bill">╳</button></div>
      </div>
      <hr>
      <div class="billing-details">
        <form>
          <input id="input-phone" name="phone" type="number" placeholder="Phone">
          <input id="input-fname" name="first-name" type="text" placeholder="First Name">
          <input id="input-lname" name="last-name" type="text" placeholder="Last Name">
          <input id="input-address" name="address" type="text" placeholder="Address">
          <input id="input-email" name="email" type="email" placeholder="Email">
        </form>
      </div>
      <hr>
      <div class="buy-section">
          <button id="buy-now-btn">
            BUY NOW
          </button>
      </div>
    </div>
    `
    document.querySelector('.cart-container').append(billContainer)
    billContainer.style.display = 'block'

    document.getElementById('close-bill').addEventListener('click', () => this.closeBillModal())

    document.getElementById('buy-now-btn').addEventListener('click', () => this.validateFields())
  }
  closeBillModal(){
    document.querySelector('.billing-modal').style.display = 'none'
  }
}