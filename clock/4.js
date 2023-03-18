function time(){
    //console.log(time.toLocalTimeString())
    let a=new Date();
    let b=a.getHours();
    let c=a.getMinutes();
    let d=a.getSeconds();
    console.log(b+":"+c+":"+d)
    console.log(a.toLocaleTimeString())
}
time();
