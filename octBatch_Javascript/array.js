let varName = 222222222222222222222222225;
//array is used to stores multiple values.
console.log(varName.length);
var colors = ['black','blue','red','yellow', 2222,5555]; //empty array
colors = [10,20,30];
console.log(colors);
console.log(typeof(colors));
console.log(colors.length);
console.log(colors);
console.log(colors[1]);
console.log(colors[colors.length - 1]); //colors[5]
colors[2] = 'white';
console.log(colors);
colors[9] = 'pink';
console.log(colors);
console.log(colors[7]);

var cars = ['Volvo','I20','I10','Jaguar','marcedes Benz']
let newCars = cars.toString();
console.log('newCars',newCars);
console.log(cars.toString());  //array_name.Methaod_name
console.log(cars.join('\n'));
console.log(cars.pop()); 
console.log(cars);

let cars1 = ['Volvo','I20','I10','Jaguar','marcedes Benz'];

cars1.push('mini cuper');
console.log(cars1);
console.log(cars1.shift());

console.log(cars1);
cars1.unshift('Fortune');
console.log(cars1);

delete cars1[2];
console.log(cars1);

var no1 = [10, 20 , 30];
var no2 = [80,60,40,70];
var no = '100';
let xyz ;
var conNo = no2.concat(no,no1,xyz);
console.log(conNo);

const fruits = [10,20,30,40,50,60];
const fruits1 = fruits.slice(1, 3);
console.log('fruits1 +',fruits1);

const fruits2 = [10,20,30,40,50,60];
const fruits3 = fruits2.slice(-4, -1);
console.log('fruits3 -',fruits3);

var drinks = [20,30,40,50,90,70]
//drinks[2] = 100
drinks.splice(2,1,100,200);// 2== index ; 1 == no of items to be removed 
console.log(drinks);
//console.log(drinks.slice(1,3));
