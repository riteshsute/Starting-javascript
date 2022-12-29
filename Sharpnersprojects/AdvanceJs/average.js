
const studentObj = {
    'yash': 26,
	'vaibhav': 24,
	'rajesh' : 25,
};
const newArr = Object.keys(studentObj)

function findaverageage(studentObj){
let count = 0
let sum = 0
for (const key in studentObj) {
    sum = sum + studentObj[key];
    count++
}
const tally = count;

let counting = sum / count;
return counting;

}

console.log(findaverageage(studentObj))