'use strict'
debugger;
var fapStore = new StoreData('First and Pike', 23, 65, 6.3);
var saStore = new StoreData('Seatac Airport', 3, 24, 1.2);
var scStore = new StoreData('Seattle Center', 11, 38, 3.7);
var chStore = new StoreData('Capital Hill', 20, 38, 2.3);
var aStore = new StoreData('Alki', 2, 16, 4.6);
var stores = [fapStore, saStore, scStore, chStore, aStore];
var hour = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm']

function StoreData(name, minCx, maxCx, avgCookies) {
  this.name = name;
  this.avgCookies = avgCookies;
  this.minCx = minCx;
  this.maxCx = maxCx;
  this.cookiesPerHour = [];
}

function test() {
  var ranNum = Math.floor(Math.random() * (stores[i].maxCx - stores[i].minCx)) + stores[i].minCx;
  this.cookiesPerHour.push(pta);
}
function randomNum(minCx, maxCx){
  var ranNum = Math.floor(Math.random() * (maxCx - minCx)) + minCx;
  return ranNum;
}
for (var i = 0; i < stores.length; i++){
  test(stores[i]);
}
