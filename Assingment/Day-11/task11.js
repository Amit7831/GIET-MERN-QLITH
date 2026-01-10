// 1 .Palindrome String

let s = "ababa"
let p = "";

for (let i = s.length-1; i >= 0;i--) {
    p+=s[i]
}
if (s === p) {
    console.log("palendrom String")
}
// if (s === s.split("").reverse().join("")) {
//     console.log("palendrom String")
// }

// 2 .Capitalize the first letter of each word

let str = "amit ranjan"
function Capital(a) {
    return a.split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

console.log(Capital(str))


// 3 .Write a function that takes a string and returns its length.

let str1 = "Barcilona";

function strlen(str) {
    return str.length;
}
console.log(strlen(str1));


// 4 .Convert a string to uppercase without using .toUpperCase()
let str2 = "Animal"

function toUpper(str) {
    let result = "";

    for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);

        // a–z → A–Z
        if (code >= 97 && code <= 122) {
            result += String.fromCharCode(code - 32);
        } else {
            result += str[i];
        }
    }

    return result;
}

console.log(toUpper(str2)); 


// 5 .Count the number of vowels in a string.

let str3 = "Synchronization"

function countVowel(str) {
    let vol = "aeiouAEIOU";
    let count = 0;

    for (let i = 0; i <= str.length - 1; i++){
        if (vol.includes(str[i])) {
            count++;
        }
    }
    return count;
}
console.log(countVowel(str3))


// 6 .Write an arrow function that multiplies two numbers.

let arro = (a,b) => {
    return a * b;
}

console.log(arro(2,3))