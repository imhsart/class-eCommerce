import OrderDisplay from "../scripts/Orders.js"

const ordersList = new OrderDisplay()
ordersList.renderOrders()

document
.getElementById('orders-home')
.addEventListener('click', () => {
  window.location.href = '../index.html'
})