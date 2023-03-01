//variable scope-where to access
let a=10; //global varibale - we can access anywhere
function ok(){
let b=20;
console.log(b);
}
console.log(a);
ok();
//console.log(b); - function varibale cant be accessed outside a function
{
    // local varibale- inside a paranthiesis
    let name="chirag";
    console.log(name);
}
//console.log(name); // local variable cant be accessed outside 