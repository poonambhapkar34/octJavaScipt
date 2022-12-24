var car = {
    carName: 'Swift',
    price: 800000,
    color: 'white',
}

for(var i in car){
//console.log(`${i} `, `-> ${car[i]}` );
if (i == 'price') {
    console.log(i, ' ' , car[i]);
}

}


for (let xyz in car) {
    if (xyz == 'price') {
        console.log(car[xyz]);
    }
    // console.log( xyz);
}
console.log(car.price);
//let d = 20;
let cars = ['swift','i10','i20','Ennova','fortune']
// for(let j in cars){
// console.log(cars[j]);
// }
for(let h of cars){

if(h == 'i20'){
      //break;
     continue
}
console.log(h);
}

let g = 20;

while(g > 10){
console.log(g);
g--;
}

var b = 5;
do {
console.log(b);
b++;
}
while(b < 7);