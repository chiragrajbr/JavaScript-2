class bank{
    min_bal=500
    id
    holder_name
    amt_deposite

    constructor(a,b,c){
        this.id=a
        this.holder_name=b
        this.amt_deposite=c
    }

    get_statement(){
        console.log(`id is ${this.id}, of ${this.holder_name} deposited amout is ${this.amt_deposite} and total balance is ${this.amt_deposite + this.min_bal }`)
    }

    
}
let chirag=new bank(01,"chirag raj br",463)
let darshu=new bank(02,"darshan br",453)
chirag.get_statement()
darshu.get_statement()

