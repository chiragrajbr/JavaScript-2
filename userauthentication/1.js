//user authentication
function UA(a,b){
    this. uname=a;
    this. upass=b;
    let details=function(){
        console.log("details created")
        console.log(`${this.uname} ${this.upass} `)
    }
    this.display=function(){
        details()
    }
    this.login=function(c,d){
        let rname=c;
        let rpass=d;
        if(this.uname==rname && this.upass==rpass){
            console.log("login successfull")
        }
        else{
            console.log("login failed")
        }
    }
    this.change_pass=function(e){
        this.upass=e
        console.log("new password ")
    }
    

}

let a=new UA("chirag",9591)
a.login("chirag",9592)
a.change_pass(3333)
a.display()
