let a={
    name:"chirag",
    email:"chiragrajbr@gmail.com",
    password:"959182"
}
// importing the bcrypt and assigning to the variable
let bc=require("bcrypt");
// converting into the bcrypt using hashsync(1,2) 1->what we want to bcrypt   2-> giving salt
let new_pass=bc.hashSync(a.password,10);
// updating the brypting value to the a object using ...operator
a={...a,password:new_pass};
console.log(a)
//  to verifying the bycrypted using comparesync(1,2)  1-> password   2-> what we want to verify in the object
if(bc.compareSync("959182",a.password)){
    console.log("password is maching");
}
else{
    console.log("password is wrong");
}
/*let b=require("bcrypt")
let c=b.hashSync(a.password,5)
//console.log(c)
//update
a={...a,password:c}
console.log(a)

if(b.compareSync(a.password,"959182")){
    console.log("login successfull")
}
else{
    console.log("login failed")
}*/

