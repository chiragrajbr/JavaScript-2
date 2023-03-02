//inheritance
class parent{
    open_acc(){
        console.log("account created successfully");
    }
}
class child extends parent{
    deposite_amt(){
        console.log("amount deposited");
    }
}
let a=new child()
a.open_acc()
a.deposite_amt()