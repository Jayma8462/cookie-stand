'use strict'
debugger;
var table = document.getElementById('generatedTable');
var createTHead = document.createElement('th');
var createTRow = document.createElement('tr');
var createTData = document.createElement('td');

var storeData = {
  name: ['1st and Pike', 'Seatac Airport', 'Seattle Center', 'Capital Hill', 'Alki'],
  hour: ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
  cxVisit: cxVisit;
}
for (var i = 0; i<= storeData.name.length; i++){
  console.log("I is = " + i);
  for (var j = 0; j<= storeData.hour.length; j++){
    console.log("J is = " + j);
    var name = storeData.name[i];
    var cxVisit = ranCxCount();
    var hour = storeData.hour[j];
    var location = new Object(name, hour, cxVisit)
    location.name = name;
    location.cxVisit = cxVisit;
    location.hour = hour;
  }
}
//document.getElementById('generatedTable').appendChild.write(createTHead);
function ranCxCount () {
  var ranCxCountPerHour = Math.floor(Math.random() * 20);
 return ranCxCountPerHour;
}
