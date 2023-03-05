//promise - it is a built in class function
//it contain one function with two parameters
//while invoking we use .then and .catch
//.then and .catch contain 1 fat arrow function
let a=()=>{
    return new Promise((resolve,reject)=>{
        10>5?
        resolve():
        reject()
    })
}
a().then(
    ()=>{
        console.log("true")
    }
).catch(
    ()=>{
        console.log("false")
    }
)