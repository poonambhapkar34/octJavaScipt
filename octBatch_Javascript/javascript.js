//let var const
//syntax : let/var/const variable_name = data;
let b = 10; //declaration + defination
let a;  //declaration
 a = 10; //defination
let c=50,
d=30,t=80;
var w = 80;

console.log('c',c);
console.log(d,'d');
let name1 = "poonam";
console.log(name1);
let my_name = "poonam1";
let myName = "poonam3";
let MYNAME = "poonam4";
console.log(a);
console.log('a',a);
console.log(a,'a');
console.log('a' + a);
console.log("a" + a);
console.log('a'+a+b);
console.log('a'+a-MYNAME);
console.log('a',a+b);
console.log('a',a+MYNAME);
console.log('a-->',a + 'b-->',b);
let u='30';
console.log(u);
console.log(u*20);
console.log('xyx'+20);
console.log('aaa'+12+20);
console.log(12+20+'aaa'+12+20);
//js Data types: string ,boolean,null,undefined,number,object
//string
let first_sec = "poonam";
let first_sec1 = 'poonam';
let first_sec2 = '';
let first_sec3 = "";
console.log(typeof(first_sec3));
//boolean: true/false
let rs = 30;
let rs1 = '30';
console.log('equality',rs1 == rs); //= Assigning operator : (eg let a = 20); ==:equality opertor (a==b) ===: it will check data type as well as value of variable
console.log(rs === rs1);
let test1 = 'poonam';
let test2 ='poonam'
console.log( '-->',test1 === test2);
// poonam === patil --> false
// dt(string) === st(string ) -->true

let d1 = true;
console.log(typeof(d1));
let d2 = 'true';
console.log(typeof(d2));
let d3 = null;
console.log(d3);
console.log(typeof(d3));
let d4;
console.log(d4);
console.log(typeof(d4));
let d5 = 50.2;
console.log(typeof(d5));
let d6 = {};
console.log(typeof(d6));
let d7 = [];
console.log(typeof(d7));

function xyz(){
    console.log('jjjjjjjjjjjjjjjjj');// 3.16==3.2
    let d8 = 99999999999999999n //16time 99999999999...==1000000000
    let d9 = BigInt(9999999999999999999n)
    let d10 = BigInt('9999999999999999999')
   console.log(d8 + ' ' + d10);
   console.log(d9);
   console.log(typeof(d8)+typeof(d9));

   let d11 = Symbol('hi');
   console.log(d11);
   console.log(d11.description);
   console.log(typeof(d11));
}

xyz();

