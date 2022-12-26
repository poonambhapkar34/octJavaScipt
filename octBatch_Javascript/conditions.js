// syntax: if condition == true then if block will get execute.
// if(condition){

// }
// >-- greater than operator
// < -- less than operator
// == -- equals to operator;
// <= lessthan eq to;
// >= GTET;
// != not equal to;

function conditions(){
    let marks = 35 ;
    let minMarks = 35;
    if(marks === minMarks){
        console.log('i am pass');
    }
    else{
        console.log('i am fail');
    }
   
}
// && -- logical AND operator LHS = true/f && RHS= true/f ==true/f else False 0 && 0 =  0, 1 && 1 = 1,1 && 0 =0
// || -- logical OR operator 
function marks(){
    let basicPercentage = 40;
    let percentage = 50;
    let  percentage1 = 60;
    let  percentage3 = 70;
    if(basicPercentage==40 ){
        console.log('third class');
    }
    else if( 60 < 40 && 60 > 50  ){
        console.log('second class');
    }
    else if(70 < 40 && 70 > 60){
         console.log('first class');
    }
    else{
        console.log('fail');
    }
}
// T || T = T,T || F =T,F||T = T,F||F=F;
function logicalOr(){
    if(10 >= 10 || 10 < 50){
        console.log('inside if');
    }
}
// ternory operator: condition ? block1 : block2

  50 > 10 || 50>=20 ?   marks() : console.log('10 is greater');
//prefix ++i: first value will get increamented,and then will return.
//postfix i++ operators : first returns value then will get incremented by 1.
let i = 2;
console.log('i',i);
console.log('i--',i--);
console.log('i',i);

let j = 1;
j = j + 1;  //(j++)
console.log('j',j );

let h = 1;
console.log('h',h);
console.log('--h',--h);
console.log('h',h);

let no1 = 20;
let no2 = '20' ;
// let result = ++no1; //no1 = no1+1
// console.log('result', result);
// console.log('no1',no1);
no1 === no2 ? console.log('values are equal') : console.log('values are not equal');

