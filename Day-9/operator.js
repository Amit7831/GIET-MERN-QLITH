console.log("Hello we are going to learn operator");
// Arithmatic operator
console.log(2 + 3);
console.log(2 - 3);
console.log(2 * 3);
console.log(2 / 3);
console.log(2 ** 3);
console.log(2 % 3);

// Increament
// post Increament
// Pre Increament

// Decreament
// post Decreament
// Pre Decreament

a = 20;
console.log(++a);
console.log(a++);
console.log(a);


// a = 30;
// console.log(--a);
// console.log(a--);
// console.log(a);

// Assignment Operator
 
b = a + 4;
console.log(b);

a = 50;
// a+=a+4;
a += 4;
console.log(a);

a -= 5;
console.log(a);

a *= 5;
console.log(a);

a /= 5;
console.log(a);

a %= 5;
console.log(a);

a **= 2;
console.log(a);

// Comparision operator
console.log(2 > 3);
console.log(4 < 5);
console.log(1 >= 3);
console.log(8 <= 2);
console.log(2 == 2);
console.log(3 == "3");
console.log(3 == "wed");
console.log(3 === 3);
console.log(3 === "3");
console.log(3 === "abc");

console.log(3 != 3);
console.log(1 != "1");
console.log(3 !== "3");
console.log(3 !== 3);

// Logical operator
console.log((2<3) && (4>3));
console.log((2 < 3) || 0);

c = 2;
console.log((2<3) && (c++>3));
console.log(c);

console.log(!true);
console.log(!false);

// String Concatination
console.log("Amit" + "Ranjan");
// Type Casting
console.log("4" + 4);
console.log(+"4" + 4);
console.log(typeof +"8");
console.log(2 + 3 - 4 + "8" - 4);

// Conditional Statement
// if
// if-else
// else-if
// Ternary operator
// Switch

if (true) {
    console.log("Hi i am true");
}
else {
    console.log("Hi i am False"); 
}

// let number  = prompt("Enter your marks")
number = 34;
if (number >= 90 && number <= 100) {
    console.log("Grade A");
}
else if (number >= 75  && number < 90) {
    console.log("Grade B");
}
else if (number >= 65 && number < 75) {
    console.log("Grade C");
}
else if (number >= 40 && number < 65) {
    console.log("Grade D");
    
}
else {
    console.log("Fail");
    
}

let op = "A" ;
switch (op) {
    case "A": {
        console.log("Case A");
    }
    break;
    case "B": {
        console.log("Case B");
    }
    break;
    case "C": {
        console.log("Case C");
    }
    break;

    default: {
        console.log("Default");
    }
    break;
}

console.log(true ? "It is true" : "It is false");
console.log(false && "It is true");
console.log(true && "");



