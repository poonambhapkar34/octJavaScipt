let name1 = 'Rajvardhan';
console.log('length',name1.length);
var name2 = name1.slice(-5,-2)
console.log(name2);
var carName = 'mini cuper'
console.log(carName.substring(-2,5));

var address = 'Mumbai I live mumbai in mumbai'
var updatedAddress = address.replace(/mumbai/i,'pune')
console.log(updatedAddress);

var text = 'poonam patil..Test.';
console.log(text.toUpperCase());
var text1 = 'POONAM PATIL..'
console.log(text1.toLowerCase());

console.log(text1.concat(text));
var text2 = text + ' $ ' + text1;
console.log(text,text1);
console.log(text2);

console.log('proprty access..',text[19]);
console.log(text.charAt(19));

console.log(text.indexOf('TeSt'));
console.log(text.lastIndexOf('x'));
console.log(text.search(/TeSt/))

var date = '10-20-2022';
console.log(typeof(date));
var newDate = date.split('-');
console.log(newDate);
console.log(date);
console.log(typeof(newDate));
console.log(parseFloat(newDate));

let numberArray = []
for (let index = 0; index < newDate.length; index++) {
    numberArray.push(parseInt(newDate[index]))  
}

console.log('-->',numberArray);
var fullName = 'Poonam Patil';
var NewFullName = fullName.split(' ');
console.log(NewFullName);

var firstName = NewFullName[0];
console.log(firstName);
var lastName = NewFullName[1];
console.log(lastName);