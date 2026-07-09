export default class OrderDisplay{
  constructor(){
    this.orderList = JSON.parse(localStorage.getItem('orderItems')) || []
  }

  renderOrders(){
    let cardHolder = document.querySelector('.card-holder')

    if(!this.orderList.length){
      cardHolder.innerHTML = `
        <div class="empty-orders-section">
          <div class="orders-heading">Your Order Summary</div>
          <img src="../assets/hammy.png" >
          <h3>YOU HAVE NO ORDERS YET.</h3>
        </div>
      `
      return
    }

    let orderows = this.orderList.map(orders => `
        <div class="order-card">
        <div class="customer-details">
          <div class="customer">
            <div class="order-id">Order #${orders.id}</div>
            <div class="customer-name">${orders.customer.name} &bull; <span>${orders.customer.email}</span></div>
          </div>
          <div class="status">Order placed</div>
        </div>
        <hr>
        <div class="order-preview">
        ${
          orders.items.map(order => `
              <div class="order">
              <div class="order-image"><img src="${order.image}"></div>
              <div class="order-detail">
                <div class="order-name">${order.name}</div>
                <div class="order-stats">Qty: ${order.quantity} &bull; <span>$${(order.price*order.quantity).toFixed(2)}</span></div>
              </div>
            </div>
            `).join('')
        }
        </div>
        <hr>
          <div class="total">
            <p class="date">${orders.date}</p>
            <p class="total-price">Total: <span>$${orders.total}</span></p>
          </div>
        </div>
    `).join('')

    cardHolder.innerHTML = orderows
  }
}