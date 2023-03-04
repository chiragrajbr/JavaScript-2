//object destructure - to fetch which value we need
let a={
    "id":101,
    "name":"chirag"
}
//console.log(a.id)   // in noraml object we should call object name and then key to fetch

const {name}=a
console.log(name)    // in destructure process required key is fetched and stored
