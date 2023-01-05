emp = [
    {firstName : 'Raj', lastName : "Patil", age:35},
    {firstName : 'Raj1', lastName : "Patil1", age:50},
    {firstName : 'Raj2', lastName : "Patil2", age:37},
    {firstName : 'Raj3', lastName : "Patil1", age:50},,
    {firstName : 'Raj1', lastName : "Patil1", age:50},
]

let data = emp.filter((element)=>{ 
    //return  element.age == 50; 37>35 && 37<=40
    return  element.age >= 35 && element.age <= 40
 // return  element.age == 50 && element.firstName == 'Raj1';
})
console.log("data",data);

console.log(emp[1].firstName);
let newData =[];
emp.forEach(element => {
    newData.push(element.firstName)
});
console.log(newData);

let a = [2,10,20,30,5];
let c = 20;
//  var d = a.map(mapFun());
// function mapFun(arrayItems) {
//    return arrayItems * 10;
// }
p = a.map( ele => ele * 10);
console.log(p);

var data1 = emp.map(xyz => xyz.firstName);
console.log(data1);