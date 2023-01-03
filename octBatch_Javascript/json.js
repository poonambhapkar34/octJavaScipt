
//JSON: 
empDetails = {
    emp: [
        { firstName: 'Raj', lastName: "Patil", age: 35 },
        { firstName: 'Raj1', lastName: "Patil1", age: 50 },
        { firstName: 'Raj2', lastName: "Patil2", age: 37 }
    ],
    add: [
        {
            city: 'mumbai'
        }
    ],
    detailAddress: [
        [
            { city: 'pune', pincode: 400111 }
        ],
        [
            { city: 'nashik', pincode: 477111 }
        ]
    ],
    statusCode: 400,
    msg: "success"
}
console.log(empDetails.emp[1].firstName);
console.log(empDetails.detailAddress[1][0].city);
console.log('empDetails-->',empDetails);
//json stringify
var stringyfiedJson = JSON.stringify(empDetails);
console.log('stringyfied empDetails--->',stringyfiedJson);
var parsedJson = JSON.parse(stringyfiedJson)
console.log('parsedJson--->  ', parsedJson)