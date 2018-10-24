// Syntactic Sugar

// function Employee(name,age,salary){
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
// }
// Employee.prototype.showInfos = function(){
//     console.log("İsim:" + this.name + " Yaş: " + this.age + " Maaş: " + this.salary);

// }
// const emp = new Employee("Mustafa",25,4000);

// console.log(emp);

class Employee {

    constructor(name,age,salary){ // Constructr
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    showInfos(){
        console.log("İsim:" + this.name + " Yaş: " + this.age + " Maaş: " + this.salary);
    }

}

const emp = new Employee("Mustafa",25,4000);

// console.log(emp);
emp.showInfos();
