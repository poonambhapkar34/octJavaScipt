var text = " i live in mumbai , mumbai ,MUMbai,mumbai mm mmjllmmjjmm m ";
console.log(text.match(/mm+/g));
console.log(text.match(/mm*/g));

let num = 5.523456;
//para : length
console.log(num.toPrecision()); // '5.123456'
console.log(num.toPrecision(5)); // '5.1235'
console.log(num.toPrecision(2)); // '5.1'
console.log(num.toPrecision(1)); // '5'

// var x = ['100', 90];
var x =90;
console.log('x' + ' ' + x + '\n' + x);

console.log('hhhh'+'\n'+"jjjjjj");
let d = 'i-live in-mumbai'
let text1= d.split(' ');
console.log(text1[0] + "\n" + text1[1]);
console.log(x.valueOf());
console.log(typeof(x));