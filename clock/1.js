function time(){
    let a=new Date()
    let b=a.getHours()
    let c=a.getMinutes()
    let d=a.getSeconds()


console.log(b+"hr"+c+"min"+d+"sec")
//console.log(a.toLocaleTimeString())
}
time()