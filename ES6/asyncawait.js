//async - to simplify or consize promise method

 async function test(){
    try{
        let a=fetch('https://jsonplaceholder.typicode.com/todos/1').then("fetched successfull")

        console.log(a.JSON())
    }
    catch(n){
        console.log("not possible "+n.message)
    }
 }
 test()

// function test(){
//     return new Promise((resolve,reject)=>{
//         //console.log("working")
//         5>10?resolve(console.log("working")):reject(console.log("error"))
//     })
// }
// test().then(()=>{

// })
// .catch(()=>{

// })