emp = [
    {firstName : 'Raj', lastName : "Patil", age:35},
    {firstName : 'Raj1', lastName : "Patil1", age:50},
    {firstName : 'Raj2', lastName : "Patil2", age:37},
    {firstName : 'Raj3', lastName : "Patil1", age:50},,
    {firstName : 'Raj1', lastName : "Patil1", age:50},
]

let data = emp.filter((element)=>{ 
    //return  element.age == 50;
  return  element.age == 50 && element.firstName == 'Raj1';
})
console.log("data",data);

console.log(emp[1].firstName);
let newData =[];
emp.forEach(element => {
    newData.push(element.firstName)
});
console.log(newData);