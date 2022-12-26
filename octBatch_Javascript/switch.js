// function function_name(para/arguments1, para2, para3){
//code block
// }

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

function switchStatement(){
    // let a = 60;
    // let b = 20;
    let c =20;
    let a = parseInt(prompt('enter value of a'));
    let b = parseInt( prompt('enter value of b'));
    // let operator = prompt('operator');
    let Result ;
    switch (true) {
        case (a > b || a > c):
            Result = a + b
            console.log('Result', Result);
            break;
        case '-':
            Result = a - b
            console.log('Result', Result);
            break;
        case '*':
            Result = a * b
            console.log('Result', Result);
           break;
        case '/':
            Result = a / b
            console.log('Result', Result);
            break;

       default :
           console.log('no match found');

    }

}