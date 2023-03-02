let a=new Date()
setInterval(()=>{
    //console.log(a.getHours()+"hr "+a.getMinutes()+"min "+a.getSeconds()+'sec')
    console.log(a.toLocaleTimeString())
},[1000])
