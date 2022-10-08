
let square =(a) => { return a*a }
console.log(square(2));


let mult =(a,b) => { return a*b }
console.log(mult(2,4));


////////

class student{
    
    constructor(name, age, marks){
        this.name = name;
        this.age = age;
        this.marks = marks;
    }

    setPlacementAge(minPlacementAge){
        console.log(this);
        return (minMarks) => {
                
            console.log('inside egligibleForCurrent Company' , this);
            if(this.marks > minMarks && this.age > minPlacementAge) {
                console.log(this.name + "is ready for placements")
            } else {
                console.log(this.name + "is not ready for placements")
            }
        }
    }
}


const Riya=new student('Riya',18,34);
const Hiya=new student('Hiya',15,35);
const Diya=new student('Diya',16,60);
const Siya=new student('Siya',17,70);
const Rooh=new student('Rooh',19,80);

Riya.setPlacementAge(17)(35);
Hiya.setPlacementAge(17)(35);
Diya.setPlacementAge(17)(35);
Siya.setPlacementAge(17)(35);
Rooh.setPlacementAge(17)(35);


///////

var x = function(){
    this.val = 1;
    setTimeout(() => {
        this.val++; 
        console.log(this.val)
    }, 1)
 };

var xx = new x();