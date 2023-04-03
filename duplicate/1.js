//find duplicat elements
let number=[10,20,30,40,50,10,20]

let s=new Set(number)
//set do not allow duplicates

let b=number.filter((no)=>{
    if(s.has(no)){
        s.delete(no)
    }
    else{
        return no
    }
})
 
console.log(b)
