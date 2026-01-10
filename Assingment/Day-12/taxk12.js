//1. Create an array of 5 fruits.
//     Print the **first** and **last** elements using indexing.

let arr = ["Apple", "Mango", "Banana", "Pinaple", "Grapes"];
console.log(arr[0], arr[arr.length - 1])



//2. Add "Mango" to the end of the array using push() and "Kiwi" to the start using unshift().
let arr1 = ["Apple", "Banana", "Pinaple", "Grapes"];
arr1.push("Mango")
arr1.unshift("Kiwi")
console.log(arr1)



//3. Remove the first and last elements using shift() and pop().
let first=arr1.shift()
let last= arr1.pop()
console.log(arr1)
console.log(first, last)



// // Find the length of an array without using .length property (using loop).
let len = 0
for (let i in arr1) {
    len++
}
console.log(len)


// Use indexOf() to find the position of "Banana" in an array.
console.log(arr1.indexOf("Banana"))



// Use includes() to check if "Orange" exists in the array.
console.log(arr1.includes("Orange"))



// Convert an array of numbers [1,2,3,4,5] into a string separated by “-” using join().
let arr2 = [1, 2, 3, 4, 5];
console.log(arr2.join("-"))

// Given an array [1, 2, 3, 2, 1, 4, 5], remove duplicates.
let arr3 = [1, 2, 3, 2, 1, 4, 5];

for (let i = arr3.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
        if (arr3[i] === arr3[j]) {
            arr3.splice(i, 1); // remove the duplicate
            break; // stop inner loop since we removed it
        }
    }
}

console.log(arr3); // [1, 2, 3, 4, 5]


// Given an array of strings, return the one with the longest length.

let str3 = ["Sukhoi", "Rifel", "Missile", "Nuke"]

function long(str) {
    let len = ""
    for (let i of str) {
        if (i.length > len.length)
            len = i
    }
    return len
}

console.log(long(str3))


// Create a new array that contains the length of each string from ["React", "Node", "MongoDB"].
let arr5 = ["React", "Node", "MongoDB"]
let New = []
for (let i of arr5) {
    New.push(i.length)
}
console.log(New)

// Convert [1,2,3,4,5] → [5,10,15,20,25]
let num = [1, 2, 3, 4, 5]
for (let i in num) {
    num[i] = num[i] * 5
}
console.log(num)

// Replace all negative numbers in [4, -2, 6, -9, 7] with 0.
let arr6 = [4, -2, 6, -9, 7]
for (let i in arr6) {
    if (arr6[i] < 0) {
    arr6[i]=0
}
}
console.log(arr6)