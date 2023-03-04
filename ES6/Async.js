//asynchronous - short time function execute first
let a=(reciveb,recivec)=>{
    console.log("function a is a main function")
    reciveb()
    recivec()
}
let b=()=>{
    console.log("function b")
}
let c=()=>{
    console.log("function c")
}
setTimeout(a,2000,b,c)
//setTimeout(b,1000)
//setTimeout(c,5000)
