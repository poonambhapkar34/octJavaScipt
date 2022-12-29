function changeColor(xyz){
   var element = document.getElementById('para');
   console.log('content',element);
   element.style.color = xyz;
}

// function addition(a,b):number{
//     // let a = 10;
//     // let b = 20;
//     return a+b;
// }

// const res = (a,b) => {
//     return a+b;
// }
const res = (a,b,c) =>  c+b;

 console.log(res(10,20,30)); 
 //console.log(additon(10,20))
// console.log('res',res);