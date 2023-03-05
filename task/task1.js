// a=4 e=3 i=1 o=0 s=5
function task(recive){
    let a=recive
    let b=a.split("")
    let c=[]
    for(i=0;i<b.length;i++){
        if(b[i]=='a'){
            c.push(4)
        }
        else if(b[i]=='e'){
            c.push(3)
        }
        else if(b[i]=='o'){
            c.push(0)
        }
        else if(b[i]=='s'){
            c.push(5)
        }
        else if(b[i]=='i'){
            c.push(1)
        }
        else{
            c.push(b[i])
        }
    }
    let d=c.join("")
    console.log(d)
}
task("javascript is cool")
task("programming is fun")
task("become a coder")

