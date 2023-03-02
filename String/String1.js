//split
/*let a="good@morning"
let b=a.split("@");
console.log(b);

//slice
let c=[10,20,30,25]
d=c.slice(1,3)
console.log(d);

//capital
let one=["chirag"]
two=one.toString()
console.log(two);
console.log(two.toUpperCase())

//starting letter to uppercase
let cap=["good evening","good mrng"]
for(let i=0;i<cap.length;i++){
    console.log(cap[i].charAt(0).toUpperCase()+cap[i].slice(1,cap[i].length));
}
*/

// capital after everyspace
let a=["hi everyone welcome to prostack academy"]
let b=a.toString()
console.log(b)
let c=b.split(" ")
console.log(c)
let d=[]
for(let i=0;i<c.length;i++){
d.push(c[i].charAt(0).toUpperCase()+c[i].slice(1,c[i].length))
}
console.log(d)
let e=d.toString("").replace(","," ")
console.log(e)


//
let rose="flower"
console.log(rose.toUpperCase())