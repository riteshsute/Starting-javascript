function Student(firstName, lastName, rollNo, age, sex, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.rollNo = rollNo;
    this.age = age
    this.sex = sex;
    this.dob = new Date(dob)
    this.getFull = function() {
        return `${this.firstName} ${this.lastName}`;
    }
    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }
}

Student.prototype.eligible = function eligible(minAge = 16) {
    if (this.age > minAge) {
        console.log(this.firstName + ` is eligible`)
    } else {
        console.log(this.firstName + ` is not eligible`)
    }
}

const student1 = new Student('rohit', 'puri', 'A902', 19, 'Male', '1-7-2003');
const student2 = new Student('navin', 'sawant', 'b002', 20, 'Male', '3-4-2002');

if (student1.age > student2.age) {
    console.log(student1.getFull());
} else {
    console.log(student2.getFull())
}


console.log(student1.eligible())
console.log(student2.eligible())


class Student {
    constructor (firstName, lastName, rollNo, age, sex, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.rollNo = rollNo;
        this.age = age
        this.sex = sex;
        this.dob = new Date(dob)
    }
    getFull = function() {
        return `${this.firstName} ${this.lastName}`;
    }
    getBirthYear = function() {
        return this.dob.getFullYear();
    }
}

const student1 = new Student('rohit', 'puri', 'A902', 19, 'Male', '1-7-2003');
const student2 = new Student('navin', 'sawant', 'b002', 20, 'Male', '3-4-2002');


console.log(student1.getBirthYear())
console.log(student2.getFull())