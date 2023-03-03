//map method - iterate array and execute function
let employee=[{1:"ganesh"},{2:"vignesh"},{3:"sathish"}]
employee.map((b)=>{
   // console.log(b)
})

//array iteration
let colors=["red","blue","green"]
colors.map((c)=>{
    //console.log(c)
})

//object iteration
let ob={
    1:"red",
    2:"green",
    3:"blue"
}
Object.values(ob).map((ok)=>{
    console.log(ok)
})

//object iteration using for in
let fruits={
   12:"grapes",
   15:"banana",
   30:"apple"
}
console.log(Object.keys(fruits))
console.log(Object.values(fruits))
console.log(Object.entries(fruits))
for(let ele in fruits){
    console.log(ele+":"+fruits[ele])
    
}