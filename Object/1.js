// object crud operation
let name={
    101:"ramu",
    102:"bheemu",
    103:"somu"
}
//console.log(name)
name[104]="good morning"
//console.log(name)     // adding object
name[104]="good night" //update
//console.log(name)
delete name[104]    //to delete
console.log(name)

//iteration of object - only one method (for in loop)
for(let names in name){
    console.log(names+":"+name[names])
}

//converting object to array - there is no direct method to convert object to array
// some object methods are available to convert (o to a)
//object.keys-it converts all keys of object to array
//obect.values - it converts all values of object to array
//object.entries - it converts all keys and values of object to array
// note---when we convert object to array,all array iteration methods are available to perform on iteration

// how to copy object to object - use assign method
let b={}
b=Object.assign(name)
console.log(b)