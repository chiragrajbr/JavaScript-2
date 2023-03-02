//super -accessing parent argument in child class
class bank{
    constructor(name){
        this.name=name
        console.log("parent constructor")
    }

}
class child extends bank{
    constructor(name,amount){
        super(name)
        this.amount=amount
        console.log(`account holder name is ${name} and balance is ${amount}`)
    }
}
let a=new child("chirag",203)
