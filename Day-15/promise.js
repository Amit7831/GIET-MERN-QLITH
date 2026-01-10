console.log("Today we are going to learn js promise");

// document.addEventListener("keydown", (e) => {
//     console.log(e);
//     console.log(e.key);
//     console.log(e.code);
//     console.log(e.keyCode);
//     console.log(e.ctrlKey);
//     console.log(e.altKey);
//     console.log(e.shiftKey);
//     console.log("Key down");
// })
// document.addEventListener("keyup", () => {
//     console.log("Key up");
// })

// document.addEventListener("keypress", () => {
//     console.log("Key press");
// })



let in_put = document.querySelector("#input-tag");
console.log(in_put);

in_put.addEventListener("input", (e) => {
    console.log(e);
    console.log("input event");
})

// in_put.addEventListener("change", () => {
//     console.log("change event");
// })

// in_put.addEventListener("focus", () => {
//     console.log("focus event");
// })

// in_put.addEventListener("blur", () => {
//     console.log("blur event");
// })

let form = document.querySelector("form");
console.log(form)
form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(e)
    console.log("form submit")
})



// window
window.addEventListener("load", (e) => {
    console.log(e)
    console.log("load")
})


// window.addEventListener("DOMContentLoaded", () => {
//     console.log("DOMContentLoaded")
// })

// window.addEventListener("resize", () => {
//     console.log("resize")
// })

// window.addEventListener("scroll", () => {
//     console.log("scroll")
// })



// promise  :-Status :- pending , resolve , reject