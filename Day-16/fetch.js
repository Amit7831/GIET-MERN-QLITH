console.log("Today we are going to learn fetch method");

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("hello")
        resolve("Success")
        //  reject("Reject")
    },2000)
    
})
console.log(promise);

promise.then((res) => {
    console.log(res);
})
promise.catch((rej) => {
    console.log(rej);
})


// let getData = async () => {
//     let res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     let data = await res.json()
    
//     let ul = document.createElement("ul");
//     ul.style.cssText = "max-width:1024px; margin:auto;background-color:pink; display:flex; flex-wrap:wrap; gap:5px;list-style:none;"
//     data.forEach((obj) => {
//         let li = document.createElement("li");
//         li.innerText = obj.title;
//         li.style.cssText = "width:200px;height:200px; box-shadow:2px 2px 5px black;display:flex; justify-content:center; align-items:center; "
//         ul.append(li)
//     })
//    document.body.append(ul)

// }
// getData()


// HTTP Request
// ->Mostly we will learn 4 Requests.
// CRUD(Create , Read , Update, Delete)
// Create -> Post request .(to store the data in database)
// Read -> get request .(to fetch the data from the database )
// Update -> put request. (to update the existing data in database)
// Delete -> delete request. (to delete the existing data in database)


// let createData = async () => {  
//     let res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: "POST",
//         body: JSON.stringify({
//             name: "xyz",
//             age:30
//         }),
//         headers: {
//             "Content-Type":"application/Json"
//         }
//     })
//     let data = await res.json();
//     console.log(data);
//     console.log("Successfully data saved")
// }
// createData()

// let updateData = async () => {
//     let res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
//         method: "PUT",
//         body: JSON.stringify({
//             title:"this is update title"
//         }),
//         headers: {
//                "Content-Type":"application/Json"
//          }
     

//     });
//     let data = await res.json();
//     console.log(data);
//     console.log("successfully update");

// }
// updateData()



let deleteData = async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "DELETE"
    });
    let data = await res.json();
    console.log(data);
    console.log("successfully delete");

}
deleteData()