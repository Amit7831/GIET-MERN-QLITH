// 1) Print only odd numbers from an array.
console.log("Number 1")
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i of arr1) {
    if (i % 2 != 0) {
        console.log(i);
    }
}

// 2) Count how many positive numbers are in an array.
console.log("Number 2")
let arr2 = [1, 2, -3, 4, -5, 5, -9, 45, -56];
let Count1 = 0;
for (let i of arr2) {
    if (i < 0) {
        Count1 += 1;
    }
}
console.log(Count1);


// 3) Reverse an array using a loop .
console.log("Number 3")
let arr3 = [12, 34, 32, 5, 6, 22, 54];

for (let i = arr3.length; i >= 0;i-- )
 console.log(arr3[i])
console.log(arr3.reverse())


// 4) Print the factorial of a number.
console.log("Number 4");
let num = 6;
let factor = 1;
for (let i = 1; i <= num; i++)
    {
        factor *= i;
    }
    console.log(factor);
    
// 5) Count vowels in a string using a loop.
console.log("Number 5");
let str = "Ansjvjifjwedf";
let vowel = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];
let Count2 = 0;
for (let i of str) {
    for (let j of vowel) {
        if (i === j) {
            Count2++;
        }
    }
}
console.log(Count2);

// 6) Find the largest number in an array using a loop.
console.log("Number 6");
let arr4 = [100, 23, 434, 53, 43, 52, 4, 55];
let max = arr4[0]
for (let i in arr4) {
    if (arr4[i] > max) {
            max = arr4[i]
        }
    }
    console.log(max)
   

// 7) Create a program that prints the Fibonacci series up to n terms.
console.log("Number 7");
let n = 10;
let a = 0, b = 1;
console.log(a)
console.log(b)
for (let i = 3; i <= n; i++){
    let fib = a + b;
    console.log(fib);
    a = b;
    b = fib;
}

// 8) Remove duplicate values from an array using loops only.
console.log("Number 8");
let arr8 = [12, 34, 43, 1, 12, 2, 34,43];
let dup = arr8[0]
for (let i of arr8) {
    if (dup === i) {
        arr8.pop(i)
    }
}
console.log(arr8)



// 9) Check if a number is prime using a loop.
console.log("Number 9");
let num1 = 49;
let Count=0
for (let i = 1; i <= num1; i++){
    if (num1 % i === 0) {
        Count++;
    }
}
if (Count === 2) {
    console.log("This is prime number")
}
else {
    console.log("This is not a prime number")
    
}


// 10) Print the pattern using loops:
console.log("Number 10");
for (let i = 1; i <= 5; i++){
    let row=""
    for (let j = 1; j <= i; j++){  
        row+="*";
       
    }
    console.log(row)
}
