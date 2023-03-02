//inheritance with constructor

class bank{
    constructor(id,name){
        this.id=id
        this.name=name
    }
}
class minibank extends bank{
    constructor(id,name,address){
        super(id,name)
        this.address=address
        }
        get_details(){
            console.log(`id is ${this.id} and name is ${this.name} address ${this.address}`)
            }

}
let a=new minibank(01,"chirag","mandya")
a.get_details();
