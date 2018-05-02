function timeToString(timestamp){
  var a = new Date(parseInt(timestamp));
  return a.toLocaleString();
}

function dateToTimestamp(date){
  var a = new Date(date.split('-'));
  // return a.toLocaleString();
  return a.getTime();
};

var inputTime = document.getElementsByClassName('input-time')[0];
var inputDate = document.getElementsByClassName('input-data')[0];

var datePHP = document.getElementsByClassName('date-php')[0];
var dateJS  = document.getElementsByClassName('date-js')[0];
var timePHP = document.getElementsByClassName('time-php')[0];
var timeJS  = document.getElementsByClassName('time-js')[0];
// window.onload = function(){

  inputTime.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      datePHP.innerHTML = timeToString(inputTime.value / 1000);
      dateJS.innerHTML = timeToString(inputTime.value);
    }
  });

  inputDate.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      timePHP.innerHTML = dateToTimestamp(inputDate.value) / 1000;
      timeJS.innerHTML = dateToTimestamp(inputDate.value);
    }
  });
// };
