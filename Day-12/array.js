console.log("Today we are going to learn array");
// Array is non-primitive data type
// It is iterable
// Continous store
// type of array Object
// We can create a array in tow different way :- Literal(let arr=[1,23,34]), Object (Array)
//  The value store in indexing format(0 to n-1)
// Here array is dynamic
// Dynamically we can store different data

let arr = [1, 2, true, 4, "hii", 6];
console.log(arr);
console.log(arr[4]);
console.log(arr[6]);


let arrObj = new Array(1, 2, "Amit", 4, 4)
console.log(arrObj);

console.log(Array(3));
console.log(Array(3,5,"hii"));

console.log(Array.of(1, [2, 3, [34, 43]], 4, 4, 5));

console.log(Array.from("Amit"));

// Array property :- Lengthy
// Array Methods :- push(add a element in last index-value), pop(remove a element in last index), shift(remove from start), unshift(add in first-value),at()

let num1 = [1, 3, 5, 6, 2, 7];
num1.push(10);
console.log(num1);

num1.pop();
console.log(num1);

num1.shift()
console.log(num1);

num1.unshift(12, 13);
console.log(num1);

console.log(num1.at(3));

console.log(num1.indexOf(5));

console.log(num1.includes(5));

console.log(num1.reverse());

console.log(num1.join("+"));

console.log(num1.slice(1, 3));

num1.splice(1,3,"hi","hello",10) 
console.log(num1);


// find maximum element
let Arr = [1, 21, 3, 4, 2, 543, 6, 7, 9, 10];
console.log("Max element");
let max = 0;
for (let i = 0; i <= Arr.length - 1; i++){
    if (Arr[i] > Arr[i + 1]) {
        max = Arr[i];
    }
    
}
console.log(max);

// COunt Even and Odd number
console.log("Even And Odd");
let even = 0;
let odd = 0;
for (let i = 0; i <= Arr.length - 1; i++){
    if (Arr[i]%2==0) {
        even += 1;
    }
    else {
        odd += 1;
    }
    
}
console.log("Total even no is " + even);
console.log("Total odd no is " + odd);

// Sum of all array element
let sum = 0;
for (let i = 0; i <= Arr.length - 1; i++){
    sum += Arr[i];
    
}
console.log("The sum of all elemet is " + sum);

// find the differnce of max element and min element
console.log("DIfferense between max and min");
let Max = Arr[0];
let Min = Arr[0];
for (let i = 1; i <= Arr.length - 1; i++){
    if (Max <= Arr[i]) {
        Max = Arr[i];
    }
    if (Min >= Arr[i]) {
        Min = Arr[i];
    }
}
// for (let i = 1; i <= Arr.length - 1; i++){
// }
console.log(Max );
console.log(Min);
console.log("Difference is" + (Max - Min));

// Merge Array in to a single Array
let Arr2 = [12, 3, 4, 4, 43, 55, 3];
// for (let i = 0; i <= Arr2.length - 1; i++){
//     Arr.push(Arr2[i]);
// }

console.log(Arr.concat( Arr2));


// Company =["IBM","Microsfot","Google","Qlith"] remove microshoft and add Amazon,Flipkart

let Company = ["IBM", "Microsfot", "Google", "Qlith"];
console.log(Company);
Company.splice(1,1,"Amazon","Flipkart")
console.log(Company);

// Remove duplicates from the Array [1,2,2,3,4,5,6,6,7]

let dupli = [1, 2, 2, 3, 4, 5, 6, 6, 7];

for (let i = 0; i <= dupli.length - 1; i++){
    for (let j = i+1; j < dupli.length - 1; j++){
        
        if (dupli[i] == dupli[j]) {
            dupli.splice(i,1)
        }
    }
}
console.log(dupli);

// Double each element

let double = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i <= double.length - 1; i++){
    double[i] *= 2;
}
console.log(double);

// Find the product of element in array
let Arr3 = [1, 2, 3, 4, 5, 5];
let prod = 1;
for (let i = 0; i <= Arr3.length - 1; i++){
    prod *= Arr3[i];
    
}
console.log("The sum of all elemet is " + prod);

// Store differnt types of string in a Array and find the word length >4
let Str = ["AmitRanjan", "Ant", "Cat", "Dog", "Java", "Python"];
for (let i = 0; i <= Str.length - 1; i++){
    if (Str[i].length > 4)
    {
        console.log(Str[i])
    }
    
}

// Check a array is containng positive or not
let po = 0;
let Arr5 = [323, 43, 434, -54, 56, 545, 66];
for (let i = 0; i <= Arr.length - 1; i++) {
    if (Arr5[i] > 0) {
        po += 1;
    }
    
}

if(po == Arr5.length )  {  
    console.log(" positive Array");
}
else {
    
    console.log("Not positive Array");
}