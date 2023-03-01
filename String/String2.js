let a="welcome to prostack academy"
let b=a.split(" ")
//console.log(a)
let c=[]

for(cap of b){
    let d=cap.slice(0,1).toUpperCase();
    c.push(d+cap.slice(1))
    
}
console.log(c)
let e=c.join(" ")
console.log(e)