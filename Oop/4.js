//polymorphism - aggign argument in main class and create multiple child class
// and create object to which class u want
class tree{
    constructor(name,price){
        this.name=name
        this.price=price
    }

    height(){
        console.log(`tree name is ${this.name} height is 60 feet and price is ${this.price}`)
    }
}
class fruit extends tree{
    fruit_name(){
        console.log(`fruit name is ${this.name} and price is ${this.price}`)
    }
}
let a=new fruit("apple",110)
a.fruit_name()
