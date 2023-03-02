//abstraction
function abs(name,number){
this.name=name
this.number=number
let salary=20000
let display=function(){
    console.log(`salary is ${salary}` ) //local -cant execute outside
}
this.view=function(){                  // so converting to another function
    display()                          //global   executing outside
}
}
let a=new abs("chirag",9591)
console.log(a.name)
console.log(a.number)
console.log(a.salary)
a.view()




