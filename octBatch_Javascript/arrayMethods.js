//Array Ittration methods :
emp = [
    {firstName : 'Raj', lastName : "Patil", age:35},
    {firstName : 'Raj1', lastName : "Patil1", age:50},
    {firstName : 'Raj2', lastName : "Patil2", age:37},
    {firstName : 'Raj3', lastName : "Patil3", age:50},
    {firstName : 'Raj1', lastName : "Patil1", age:50},
]
var emp1 = emp.map(items=>{
   return  empName = items.firstName;
})
console.log('emp1--->',emp1);

const data1 = emp.map(xyz =>{
    var newAge = xyz.age;
  return newAge;
})
console.log('-->',data1);

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

// const usersByLikes = myUsers.map(item => {
//     var  container = item.likes;
//     return container;
// })
//console.log(usersByLikes);




const sweetArray = [2, 3, 4, 5, 35]
const sweeterArray = sweetArray.map(sweetItem => {
    // return sweetItem * 2
    return sweetItem 
})
console.log(sweeterArray)


const myUsers = [
    { name: 'shark', likes: 'ocean',age:50 },
    { name: 'turtle', likes: 'pond',age:50 },
    { name: 'otter', likes: 'fish biscuits',age:50 },
    { name: 'otte2r', likes: 'fish biscuits',age:50 },
    { name: 'ottere', likes: 'fish biscuits',age:50 },
    { name: 'otter3', likes: 'fish biscuits',age:50 }
]
const usersByLikes = myUsers.map(item => {
 return  container = item.name;
    //return container;
})
console.log("usersByLikes--->",usersByLikes);

const data12 = myUsers.map(xyz =>{
    var newAge = xyz.name;
    return  newAge;
})
console.log('-->',data12);