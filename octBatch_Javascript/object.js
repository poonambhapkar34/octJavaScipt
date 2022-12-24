//var studenntDetails = {}; //empty object
var studentDetails = { name: 'Jay Kadam', age: 20, address: 'pune', std: 12 };
console.log(studentDetails);
console.log(studentDetails.address);
// for,for/in,fpr/of/while/do while
//(statement;condition block;inc/dcr)
let name1 = 'poonam'
let returnedValue = this.looping();
console.log(returnedValue);
//for/foreach:
function looping() {
  let cars = ['BMW', 'volvo', 'Audi', 'minicup']
  for (var t = 0; t < 2; t++) { //t=t+1
    if (cars[t] == 3) {
      // continue;
      break;
    }
    console.log(cars[t]);
  }
  let newCars = [];
  cars.forEach(items => {
    if (items != 'volvo') {
      newCars.push(items);
    }
  })
  return newCars
}

