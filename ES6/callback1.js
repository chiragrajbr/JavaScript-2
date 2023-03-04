//call back
let a=(recive)=>{
    console.log("function a")
    recive()
}
let b=()=>{
    console.log("function b")

}
setTimeout(a,2000,b)

