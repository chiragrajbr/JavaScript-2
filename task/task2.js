function task(recive){
    let a=recive
    let b=a.split("")
    let c=[]
    for(ele of b){
        switch (ele){
            case ele=="a":{
                c.push(4)
                break
            }
            case ele=="s":{
                c.push(5)
                break
            }
            case ele=="o":{
                c.push(0)
                break
            }
            case ele=="i":{
                c.push(1)
                break
            }
            case ele=="e":{
                c.push(3)
                break
            }
            default : {
                c.push(ele)
                break
            }
        }
    }
    
}