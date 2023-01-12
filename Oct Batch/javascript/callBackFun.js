function addition(a,b){
var  result = a+b;
substraction(result);
}

addition(10,20);

function substraction(c){
 var result1 = 100 - c ;
 result(result1);
}

function result(res){
    console.log(res);
}


function callBac(text){
callBac2(text)
}

callBac('poonam');

function callBac2(text2) {
    console.log(text2);
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(num1);
  }
  
  myCalculator(5, 5, myDisplayer);

  function myDisplayer(sum) {
    console.log(sum);
  }
