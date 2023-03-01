// non primitive data types - holding multiple values
let a=[10,20,30,40]
let b={
    id:01,
    name:"chirag",
    address:"mandya"
}
let c=[{teddy:"pink",rose:"red"},{id:01,email:"@.com"}]
for( ele of c){
    console.log(Object.keys(ele))
}
