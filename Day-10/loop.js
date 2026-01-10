// Global level
var a = 10;


console.log(a);

{
    console.log(a);
    
}

function access() {
    
    console.log(a);
}

access();

// Declaration at block level
{
    var b = 20;
    console.log(b);
}
console.log(b);

// Declaration at function level
function dec() {
    var c = 30;
    console.log(c);
}

dec()
// console.log(c);

// let key word
// declaration at global level

let num = 40;
console.log(num);

{
    console.log(num);
    
}

function le() {
    console.log(num);
    
}
le();

// block level
{
    let num1 = 90;
    console.log(num1);
}
// console.log(num1);


// const key word

const fullName = "xyz";
console.log(fullName);

{
    const co = 12;
    console.log(co);
}
// console.log(co);

// How you declare a variable
// var 
var age;  // Only declaration
age = 30;  //only initialization
console.log(age);


var phone = 30493334039;  // both possible
phone = 342940329;
console.log(phone)

var phone = 4394935;
console.log(phone)

// let 
let email;
console.log(email);
email = "email@email"
console.log(email)

// let email;

// const
// const am; only declaration is not possible
//  am = "Amit"; only initialisation is not possible
const pi = 2.14;



// Loop
// for loop
for (let i = 0; i <= 10; i++){
    console.log(i);
}

// whill loop
let id = 1;
while (id <= 5) {
    console.log(id);
    id++
}

// do-while loop
let v = 1;
do {
    console.log(v);
    v++
} while (v <= 5);

// Even Number
for (let i = 0; i<= 10; i++)
{
    if (i % 2 == 0) {
        
        console.log(i+ " is even no ");
    }
}

//

// let number = 50;
// // let user = prompt("enter a number");
// while (number != user ) {
    
//     console.log("Your number is not marched");
//     user = prompt("enter another value:");
    
// }
// if (number == user) {
//     console.log("value matched");
// }



// primitive data type 
console.log(typeof 1);
console.log(typeof "GIET");
console.log(typeof false);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof Symbol("@"));
console.log(typeof BigInt(313232314342523));

// Non-primitive data type
// object

let obj = {
    name : "xyz",
    age : 30
}
console.log(obj.name +  obj.age);
console.log(obj["age"]);

// Array
let arr = [1, 2, 3];
console.log(arr[2])

// for in loop
for (let key in obj) {
    console.log(key);
    console.log(obj[key]);

}

for (let id in arr) {
    console.log(id);
    console.log(arr[id]);
}

// for of only array
for (let id of arr) {
    console.log(id)
}
l
