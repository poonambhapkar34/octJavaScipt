// [...] part / full array copy
let color = [6666,'pink','yellow','red','black','blue'];
let [color5, color2, kkk, ...clr3 ] = color;
console.log(color5);
console.log(typeof(color5));

let color1 = ['pink','pink','white','orange']
let newColor1 = [...color];
console.log(newColor1);
let newColor = [...color, ...color1];
console.log(newColor);


let fruits = {
    fruitName: 'Apple',
    fruitName:'kkkk',
    fruitName:'kkkk',
    color : 'red',
    price: 30
}

let updatedFruit ={
   
    fruitName:'hhh',
    color : 'orange',
    size :'big',
    fav : 'yes'
}

let newFruit = { ...updatedFruit};
console.log(newFruit);