function Multiply() {
    var result = 1;
    for (i = 11; i < 15; i++) {
        result *= i;
    }
    return result;
}
console.log(Multiply());

function chMultiple() {
    num1 = document.getElementById("Multiple").value;
    num2 = document.getElementById("Multiple1").value;
    alert("Result:" + num1 * num2);
}


// inheritance 

class Car {
    setName(name) {
        this.name = name;
    }
    startEngine() {
        console.log('Engine started for ' + this.name);
    }
    stopEngine() {
        console.log('Engine started for ' + this.name);
    }
}

class Toyota extends Car {
    topSpeed(speed) {
        console.log('Top speed for ' + this.name + ' is ' + speed);
    }
}

let myCar = new Toyota();
myCar.setName('Camry');
myCar.startEngine();
myCar.stopEngine();
myCar.topSpeed(220);

// encapsulation 

class Employee {
    setEmpDetails(name, id, phoneNo) {
        this.name = name;
        this.id = id;
        this.phoneNo = phoneNo;
    }
    getEmpName() {
        return this.name;
    }
    getEmpId() {
        return this.id;
    }
    getEmpPhoneNo() {
        return this.phoneNo;
    }
}
let emp1 = new Employee();

emp1.setEmpDetails('Osama', 911, +9111191191)

console.log(emp1.getEmpName());
console.log(emp1.getEmpId());
console.log(emp1.getEmpPhoneNo());