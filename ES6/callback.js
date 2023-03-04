//callback-inside a function passing another function as a argument
let a=(name,recive)=>{
console.log(`my name is ${name}`)
recive()

}

let b=()=>{
    console.log("b is a call back function reciving in a")
}
a("chirag",b)