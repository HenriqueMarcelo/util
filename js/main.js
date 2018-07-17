function timeToString(timestamp){
  var a = new Date(parseInt(timestamp));
  return a.toLocaleString();
}

function dateToTimestamp(date){
  var a = new Date(date.split('-'));
  return a.getTime();
};

function calculaRegraTres(a,b,x){
  if(a && b && x){
    return (x * b) / a;
  }else{
    return " ";
  }
}

var inputTime = document.getElementsByClassName('input-time')[0];
var inputDate = document.getElementsByClassName('input-data')[0];
var inputA    = document.getElementsByClassName('input-a')[0];
var inputB    = document.getElementsByClassName('input-b')[0];
var inputX    = document.getElementsByClassName('input-x')[0];

var datePHP = document.getElementsByClassName('date-php')[0];
var dateJS  = document.getElementsByClassName('date-js')[0];
var timePHP = document.getElementsByClassName('time-php')[0];
var timeJS  = document.getElementsByClassName('time-js')[0];
var regraTres  = document.getElementsByClassName('regra-tres')[0];

function callBackInputTime(){
  datePHP.innerHTML = timeToString(inputTime.value / 1000);
  dateJS.innerHTML = timeToString(inputTime.value);
};
function callBackInputDate(){
  timePHP.innerHTML = dateToTimestamp(inputDate.value) / 1000;
  timeJS.innerHTML = dateToTimestamp(inputDate.value);
};
function callBackRegraTres(){
  regraTres.innerHTML = calculaRegraTres(
    inputA.value,
    inputB.value,
    inputX.value
  );
}

inputTime.addEventListener("change", callBackInputTime);
inputTime.addEventListener("keyup", callBackInputTime);


inputDate.addEventListener("change", callBackInputDate);
inputDate.addEventListener("keyup", callBackInputDate);

inputA.addEventListener("change", callBackRegraTres);
inputA.addEventListener("keyup", callBackRegraTres);
inputB.addEventListener("change", callBackRegraTres);
inputB.addEventListener("keyup", callBackRegraTres);
inputX.addEventListener("change", callBackRegraTres);
inputX.addEventListener("keyup", callBackRegraTres);
