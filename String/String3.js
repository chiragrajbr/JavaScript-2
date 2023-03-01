// capitalize first letter
let a="good morning to everyone"
let b=a.split(" ") //splitting at space
let c=[] // taking empty array to push
//console.log(b)

for(cap of b){
    let d=cap.slice(0,1).toUpperCase()
    c.push(d+cap.slice(1))
}
console.log(c)
let e=c.join(" ")
console.log(e)