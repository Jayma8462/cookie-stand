'use strict'
var fapStore = new StoreData('First and Pike', 23, 65, 6.3);
var saStore = new StoreData('Seatac Airport', 3, 24, 1.2);
var scStore = new StoreData('Seattle Center', 11, 38, 3.7);
var chStore = new StoreData('Capital Hill', 20, 38, 2.3);
var aStore = new StoreData('Alki', 2, 16, 4.6);
var stores = [fapStore, saStore, scStore, chStore, aStore];
var hour = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var totalCookiesPerHour = [];
var allStoresCookieCount = 0;
var passVar = 0;
function StoreData(name, minCx, maxCx, avgCookies) {
  this.name = name;
  this.avgCookies = avgCookies;
  this.minCx = minCx;
  this.maxCx = maxCx;
  this.cookiesPerHour = [];
  var hour = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
  for (var i = 0; i < hour.length; i++){
    var ranNum = Math.floor(Math.random() * (this.maxCx - this.minCx)) + this.minCx;
    var cphPush = Math.round(ranNum * this.avgCookies);
    this.cookiesPerHour.push(cphPush);
  }
}
function totalCookies(hour, stores) {
  for (var i = 0; i < hour.length; i++){
    for (var j = 0; j < stores.length; j++){
      var total = stores[j].cookiesPerHour[i];
      allStoresCookieCount += total;
      if (j === stores.length - 1){
        totalCookiesPerHour[i] = allStoresCookieCount;
        allStoresCookieCount = 0;
      }
    }
  }
}
totalCookies(hour, stores);
window.onload = function(stores) {
  var stores = [fapStore, saStore, scStore, chStore, aStore];
  var listEl = document.getElementById('generated-table');
  var createNewList = document.createElement('ul');
  var createListEl = document.createElement('li');
  for (var i = 0; i < stores.length; i++){
    var storeEl = document.createElement('p');
    storeEl.textContent = stores[i].name;
    listEl.appendChild(storeEl);
    for (var j = 0; j < hour.length; j++){
      var createEl = document.createElement('li');
      createEl.textContent = hour[j] + ": " + stores[i].cookiesPerHour[j];
      listEl.appendChild(createEl);
    }
  }
}
