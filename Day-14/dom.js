console.log("Today we are going to learn dom object");

let h1 = document.querySelector("#heading");
console.log(h1);

let p = document.querySelector(".para");
console.log(p);

let t = document.querySelector("h1");
console.log(t);

let ps = document.querySelectorAll(".para")
console.log(ps) 
// innerText :- only return Text content
console.log(ps[0].innerText) 
ps[0].innerText="pragraph 11"
console.log(ps[0].innerText) 
// innerHTML :- return Text with element
console.log(ps[1].innerHTML)
console.log(ps[1].innerText)
ps[1].innerHTML = "<i> This is itallic </i>"
// style
ps[1].style.backgroundColor = "red";

document.body.style.backgroundColor = "Blue";

// classname :- All class in string
console.log(ps[1].className)
// classList :- All calss in Array 
console.log(ps[1].classList)
// add class
ps[1].classList.add("para4","para5")
console.log(ps[1].className)

ps[1].classList.remove("para")

console.log(ps[1].classList.contains("para4"))
// toggle remove and add inversly if the class name is present or not
ps[1].classList.toggle("para5")

// CreateElement() :- creating whole html in js

let h4 = document.createElement("h4");
console.log(h4);
h4.innerText = "This is heading 4"
// document.body.appendChild(h4);

let h5 = document.createElement("h5");
console.log(h5);
h5.innerText = "This is heading 5"
document.body.append(h4, h5);

let b = document.createElement("b")
b.innerText = "This is bold tag "
console.log(b)

let div = document.querySelector(".parent")
console.log(div);
// div.append(b)
// div.prepend(b)
// div.before(b)
div.after(b)


// Event  :- click ,dblclick , mousedown, mouseup ,mousemove, mouseenter,mouseleave
// Key board :- keydown, keyup, keypress :-(ctrl,shift,alt not working )
// input event :- input, change, focus, blur
// form event :- submit
// window Event :- load, domContextloaded, resize, scroll

// 1.target body
// 2.event name
// 3.handling part

// different ways to add evetn handeller
// 1.direct tag   onClick
// 2.variable format(object)    onclick
// 3.method(addEventlistener)

// let handeleBtn = () => {
//     console.log("click")
// }

// let btn = document.querySelector("#btn1")
// console.log(btn)
// btn.onclick = () => {
//     console.log("button click");
// }

let butn = document.getElementById("btn2");
console.log(butn);
butn.addEventListener("click", () => {
    console.log("btn clicked")
})

let pbody = document.getElementById("paragraph")
console.log(pbody)
// pbody.addEventListener("dblclick", () => {
//     console.log("para double click");
// })
pbody.style.backgroundColor = "green"
pbody.addEventListener("mousedown", () => {
    console.log("mouse down");
})
pbody.addEventListener("mouseup", () => {
    console.log("mouse up");
})
pbody.addEventListener("mousemove", () => {
    console.log("mouse move");
})
pbody.addEventListener("mouseenter", () => {
    console.log("mouse enter");
})
pbody.addEventListener("mouseleave", () => {
    console.log("mouse leave");
})
