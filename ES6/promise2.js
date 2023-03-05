let a=[]
let b=(ele)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            a.push(ele)?resolve():reject()
        },3000)
    })
}
let c=()=>{
    console.log("element pushed successfully")
}
b(10).then(()=>{
    c()
    console.log(a)
})
.catch(()=>{
    console.log("error")
})