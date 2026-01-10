console.log("Today we are going to learn Special function of the function");
// Special method of Array
// forEach(callback function) : No return
// map()  : return empty array , if we return value then it update that empty array
// filter()
// reduce()
// sort()  :original array changed
// some()
// every()
// find()
// flat()

let arr = [1, 2, 3, 4, 5, 6];
// for (let v of arr) {
//     console.log(v);
// }

arr.forEach((v, i,ar) => {
    console.log(i + ":" ,v);
    console.log(ar);
    
})

//map() 
// let update = arr.map((a, i, ar) => {
//     return a * 2;
    
// })

// let update = arr.map(v => {
//     return v * 2;
    
// })
let updateArray = arr.map(v => v * 2)
console.log(updateArray)

// filter()
let filterArray = arr.filter((v) => {
    return v % 2 === 0;
})
console.log(filterArray);


// reduce()
let sum = arr.reduce((s, v) => {
    return s += v;
},0);
console.log(sum)
let mul = arr.reduce((s, v) => {
    return s *= v;
});
console.log(mul)


// sort()
let num = [2, 5, 1, 59, 14, 35, 344];
console.log(num.sort((a, b) => {return a-b }));
// console.log(num.sort((a, b) => {return b-a }));


// some()
let value = num.some((v) => { return v % 2 === 0 })
console.log(value);


// every()
let allPositive = num.every((v) => { return v >= 0 });
console.log(allPositive);


// find()
console.log(num.find((v) => { return v > 2 }));


// flat()
console.log([1, 2, [4, 5], [6, 7]].flat(1));
console.log([1, 2, [4, [5, 6]], [7, 8]].flat(Infinity));





// DOcument Methods
// getelementById("id")
let h1 = document.getElementById("heading");
console.log(h1)
// getelementClassName("class")
let p = document.getElementsByClassName("para")
console.log(p);
// getelementTagName("tag")
let t = document.getElementsByTagName("p")
console.log(t);
// querySelector("id/class/tag")
let q = document.querySelector("p")
console.log(q);
// querySelectorAll("id/class/tag")
let q2 = document.querySelectorAll("p")
console.log(q2);

