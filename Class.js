// creating class and declaring local and global variable
class acc{
    min_bal=500; //global variable
    create_acc(name,no){  //local variable
        this.name=name;
        this.no=no;
    }
    get_Sta(){
        console.log(`acc holder name is ${this.name} number is ${this.no}`);
    }
}
let a=new acc()
console.log(a);
let b=a.create_acc("chirag",9591)
a.get_Sta();