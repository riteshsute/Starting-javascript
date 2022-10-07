

var obj = {
    num: 3,
    nation:"india" 
}

var addTo = function(a) {
    return this.num + a;
}

console.log(addTo.call(obj,3))

//

var obj = {
    num:3
}

var addTo = function(a,b,c) {
    return this.num + a + b + c;
}

let arr = [1,2,3]
console.log(addTo.apply(obj,arr))

//

var student = {
    age: 20
}

var print = function() {
    console.log(this.age);
}

var bound = print.bind(student);

console.log(bound(this));

// 

// let multiply = function(x,y){
//     console.log(x + y);
// }

let multiply = function(x) {
    return function(y) {
        console.log(x + y);
    }
}

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(3);

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);


