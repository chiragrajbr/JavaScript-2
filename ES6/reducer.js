//reducer - iterating array elements one by one 
//it takes privious state and return new state
//2 parameters needed and consize the code

//iterating using for loop
let a=[1,2,3,5]
let b=0
for(i=0;i<a.length;i++){
b=b+a[i]
}
console.log(b)

//reducer sytax
let numbers=[10,20,30]
let no=numbers.reduce((p1,p2)=>{
    return p1+p2
},0)
console.log(no)

//reducer consize
let tables=[10,50,45]
let ok=tables.reduce((p1,p2)=>p1+p2)
console.log(ok) 