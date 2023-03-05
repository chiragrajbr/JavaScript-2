//call back
/*let a=(recive)=>{
setTimeout(()=>{
console.log("gm")
recive()
},2000)

}
let b=()=>{
console.log("gn")
}
a(b)*/

let a=()=>{
    return new Promise((resolve,reject)=>{
        10>5?resolve("true"):reject("false")
    })
}
a().then(()=>{
    console.log("updated successfully")
})
.catch(()=>{
console.log("login failed")
})
