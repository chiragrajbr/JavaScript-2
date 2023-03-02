//outside constructor
class Bank{
    constructor(name,amt){
        this.name=name
        this.amt=amt
    }
    Total_bal(){
     console.log(`acc holder name is ${this.name} total amt is ${this.amt}`);
    }
}
let a=new Bank("chirag",10)
let b=new Bank("darshu",10)
a.Total_bal()
b.Total_bal()
