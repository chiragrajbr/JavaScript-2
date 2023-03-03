//encapsulation - the mechanism of restricting certain data from user
class employee{
    emp_details(id,name,salary){
        this.id=id
        this.name=name
        this.salary=salary
    }
    getEmpId(){
        return this.id
    }
    getEmpName(){
        return this.name
    }
     getEmpSalary(){
        return this.salary
    }
}
let a=new employee()
a.emp_details(01,"chirag",20000)
console.log("employee id "+a.getEmpId())
console.log("employee name "+a.getEmpName())
console.log("employee salary "+a.getEmpSalary())




