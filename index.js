const PI = 3.14;
let value = 3;

// console.log('initial value of "value" is', value);

// function changeValue(count){
//     count++;
//     return count;
// }

// const changeValue = function(count){
//     count++;
//     return count;
// }

const changeValue = (count) => {
    let value = 10;
    count += value;
    return count;
}
// console.log(changeValue(1));
// console.log('final value of "value" is', value);


let sayHello = "Hello"
sayHello = 3.2
let whichClass = "3ALINFO4"
whichClass = false
// let concateValues = sayHello.concat(" ").concat(whichClass);

let backTickConcat = `${sayHello} ${whichClass}`;

// console.log('concateValues ==>', concateValues)
// console.log('backTickConcat ==>', backTickConcat)


// "1" == 1 ==> true
// console.log(1 + (+"1"));


const table = [1, "3alinfo4", false, [1, 2, 3, 4]];

const object = {
    fullName: "John Doe",
    "classe": 4,
    table,
    fullName: "John Doe duplicated",
}

let { fullName } = object;
//Eq to:: let fullName = object.fullName 
// console.log(fullName);



// var functionName = function(arg1) {
//     this
// }

// const { User } = require("./user.model");

// var userObj = {
//     id: 1,
//     lastName: "last",
//     firstName: "first"
// }


// console.log(User.toJson(userObj))



// Seance 2

function greet() {
    console.log("Hello")
}

// function sayHey(){
//     setTimeout(()=>{
//         console.log("Hey!")
//     }, 2000)
// }

// setImmediate(()=>{
//     console.log("immediate");
// })
// sayHey();
// greet();

var i = 0;
const interval = setInterval(() => {
    i++;
    if(i == 5){
        clearInterval(interval);
    }
    console.log("interval", i);
}, 1000);

