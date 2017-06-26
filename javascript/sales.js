'use strict';

function Order(name, type, quantity) {
  this.fullName = name;
  this.itemtype = type;
  this.quantity = quantity;
  this.custAddress = '';
}

var totalOrderAmount = 0;

Order.prototype.makeOrder = function () {
  //Step 1 - create element
  var newRowEl = document.createElement('tr'); //<tr></tr>

  //Step 2 - Configure/Mutate the ROW element
  var fullNameEl = document.createElement('td'); //<td></td>
  fullNameEl.textContent = this.name; //<td>this.name</td>
  newRowEl.appendChild(fullNameEl);

  var typeEl = document.createElement('td');
  typeEl.textContent = this.type; //<td>this.price</td>
  newRowEl.appendChild(typeEl);

  var totalEl = document.createElement('td');
  if (this.quantity <= 24) {
    totalEl.number = Math.floor(this.quantity * 0.65);
  } else {
    totalEl.number = Math.floor(this.quantity * 0.50);
  }

  newRowEl.appendChild(totalEl);

  //Step 3 - Append element to the DOM
  tableBodyEl.appendChild(newRowEl);
};

var tableEl = document.getElementById('orders-table');
var tableBodyEl = document.createElement('tbody');
tableEl.appendChild(tableBodyEl);

var newOrderArray = [];
//var allOrders = [];

var formEl = document.getElementById('form');

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  var fullName = event.target.fullName;
  var orderQuantity = event.target.orderQuantity;
  var itemType = event.target.itemType;

  var newOrder = new Order(fullName, orderQuantity, itemType);
  newOrder.makeOrder();
}
