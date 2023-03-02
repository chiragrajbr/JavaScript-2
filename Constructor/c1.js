// inside constructor
class Acc{

    constructor(name,amt){
        this.name=name
        this.amount=amt
        console.log(`account holder name is ${name} balance is ${amt}`)
    }
    open_Acc(){
        console.log("account opend successfully")
    }
}
let a=new Acc("chirag",1000)
//console.log(a);
